// src/components/AnnictCard.jsx
import React, { useState, useEffect } from 'react';
import './AnnictCard.css';

const AnnictIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 18V20H17V22H7V20H11V18H3C2.44772 18 2 17.5523 2 17V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V17C22 17.5523 21.5523 18 21 18H13ZM4 5V16H20V5H4ZM10 7.5L15 10.5L10 13.5V7.5Z"></path>
  </svg>
);

const AnnictCard = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const accessToken = import.meta.env.VITE_ANNICT_API_TOKEN;

  useEffect(() => {
    if (!accessToken) {
      setError("Annict API token is not configured.");
      setLoading(false);
      return;
    }

    const fetchAnnictData = async () => {
      const query = `
        query {
          viewer {
            works(state: WATCHING, orderBy: { field: SEASON, direction: DESC }, first: 3) {
              nodes {
                annictId
                title
                image {
                  recommendedImageUrl
                  facebookOgImageUrl
                  twitterAvatarUrl
                }
                seasonName
                seasonYear
              }
            }
          }
        }
      `;

      try {
        const response = await fetch('https://api.annict.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.errors) {
          throw new Error(result.errors.map(e => e.message).join('\n'));
        }
        
        setAnimeList(result.data.viewer.works.nodes);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnictData();
  }, [accessToken]);

  // ローディング中の表示
  if (loading) {
    return (
      <div className="info-card annict-card">
        <div className="loading-placeholder">Loading Annict Data...</div>
      </div>
    );
  }

  // エラー発生時の表示
  if (error) {
    return <div className="info-card annict-card error-message">Failed to load Annict data.</div>;
  }

  return (
    <div className="info-card annict-card">
      <div className="card-header">
        <div className="card-icon"><AnnictIcon /></div>
        <h3 className="card-title">見てるアニメ</h3>
      </div>
      <div className="anime-list">
        {animeList.map(anime => {
          let imageUrl = anime.image.recommendedImageUrl;
          let imageType = 'portrait';

          if (!imageUrl) {
            imageUrl = anime.image.facebookOgImageUrl;
            if (imageUrl) {
              imageType = 'landscape';
            }
          }

          if (!imageUrl) {
            imageUrl = anime.image.twitterAvatarUrl;
          }

          const layoutClass = imageType === 'landscape' ? 'anime-item-landscape' : '';

          return (
            <a key={anime.annictId} href={`https://annict.com/works/${anime.annictId}`} target="_blank" rel="noopener noreferrer" className={`anime-item ${layoutClass}`}>
              {imageUrl ? (
                <img src={imageUrl} alt={anime.title} className="anime-image" />
              ) : (
                <div className="anime-image-placeholder">No Image</div>
              )}
              <div className="anime-details">
                <p className="anime-title">{anime.title}</p>
                <p className="anime-season">{anime.seasonYear} {anime.seasonName}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AnnictCard;