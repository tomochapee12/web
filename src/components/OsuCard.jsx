import React from 'react';
import './OsuCard.css';

const OsuCard = () => {
  const osuSigUrl = "https://osu-sig.vercel.app/card?user=tomochapee&mode=std&lang=en&blur=6&round_avatar=true&animation=true&hue=200";
  const osuProfileUrl = "https://osu.ppy.sh/users/21865674";

  return (
    <div className="osu-card-wrapper">
      <iframe
        src={osuSigUrl}
        className="osu-iframe"
        title="osu! signature for tomochapee"
        scrolling="no"
        frameBorder="0"
        style={{ pointerEvents: 'none' }}
      ></iframe>
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