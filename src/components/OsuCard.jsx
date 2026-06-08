import React, { useState } from 'react';
import './OsuCard.css';

const OsuCard = () => {
  const [imageFailed, setImageFailed] = useState(false);
  const osuSigUrl = "https://osu-sig.vercel.app/card?user=tomochapee&mode=std&lang=en&blur=6&round_avatar=true&animation=true&hue=200";
  const osuProfileUrl = "https://osu.ppy.sh/users/21865674";

  return (
    <div className="osu-card-wrapper">
      {imageFailed ? (
        <div className="osu-card-fallback">
          <p className="osu-fallback-title">osu!</p>
          <p className="osu-fallback-user">tomochapee</p>
        </div>
      ) : (
        <img
          src={osuSigUrl}
          className="osu-image"
          alt="osu! signature for tomochapee"
          onError={() => setImageFailed(true)}
        />
      )}
      <a
        href={osuProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="osu-card-link-overlay"
        aria-label="View tomochapee's osu! profile"
      ></a>
    </div>
  );
};

export default OsuCard;
