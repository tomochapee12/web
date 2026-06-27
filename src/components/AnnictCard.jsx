// src/components/AnnictCard.jsx
import React, { useState, useEffect } from 'react';
import './AnnictCard.css';
import watchingIcon from '../assets/icons/watching.svg';

const devPreviewWorks = [
  {
    annictId: 'dev-preview-1',
    title: 'Annict preview item',
    image: {},
    seasonName: 'watching',
    seasonYear: 'Local',
  },
  {
    annictId: 'dev-preview-2',
    title: 'Set VITE_ANNICT_API_TOKEN for live data',
    image: {},
    seasonName: 'preview',
    seasonYear: 'Dev',
  },
  {
    annictId: 'dev-preview-3',
    title: 'ローカル表示確認用データ',
    image: {},
    seasonName: 'sample',
    seasonYear: 'Test',
  },
];

const AnnictCard = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const accessToken = import.meta.env.VITE_ANNICT_API_TOKEN;

  useEffect(() => {
    if (!accessToken) {
      if (import.meta.env.DEV) {
        setAnimeList(devPreviewWorks);
      } else {
        setError("Annict API token is not configured.");
      }
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
        if (import.meta.env.DEV) {
          console.warn("Using Annict preview data in development:", e);
          setAnimeList(devPreviewWorks);
        } else {
          setError(e.message);
        }
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
        <div className="card-icon">
          <img src={watchingIcon} alt="" className="annict-title-icon" aria-hidden="true" />
        </div>
        <h3 className="card-title">Watching Anime</h3>
      </div>
      <div className="anime-list">
        {animeList.map(anime => {
          let imageUrl = anime.image?.recommendedImageUrl;
          let imageType = 'portrait';

          if (!imageUrl) {
            imageUrl = anime.image?.facebookOgImageUrl;
            if (imageUrl) {
              imageType = 'landscape';
            }
          }

          if (!imageUrl) {
            imageUrl = anime.image?.twitterAvatarUrl;
          }

          const layoutClass = imageType === 'landscape' ? 'anime-item-landscape' : '';

          return (
            <a key={anime.annictId} href={String(anime.annictId).startsWith('dev-preview') ? 'https://annict.com/@tete_1212' : `https://annict.com/works/${anime.annictId}`} target="_blank" rel="noopener noreferrer" className={`anime-item ${layoutClass}`}>
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
