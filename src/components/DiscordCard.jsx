import React, { useState, useEffect } from 'react';
import './DiscordCard.css';

const DiscordIcon = () => (
    <svg width="24" height="24" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M81.2471 12.3359C75.2471 9.0026 68.6137 6.33594 61.6137 4.33594C61.4804 4.53594 61.2804 4.93594 61.1137 5.16927C55.4804 3.9026 49.7137 3.9026 44.0804 5.16927C43.9137 4.9026 43.7137 4.53594 43.5804 4.33594C36.5804 6.33594 29.9471 9.0026 23.9471 12.3359C10.0804 32.1026 13.0804 50.8026 27.6137 62.1026C33.7471 66.8693 40.8471 69.5693 48.2471 69.5693C48.2471 69.5693 48.2471 69.5693 48.2804 69.5693C55.6804 69.5693 62.7804 66.8693 68.9137 62.1026C83.4471 50.8026 86.4471 32.1026 81.2471 12.3359ZM37.9137 48.0693C34.5471 48.0693 31.8471 45.1359 31.8471 41.4693C31.8471 37.8026 34.5137 34.8693 37.9137 34.8693C41.3137 34.8693 43.9804 37.8359 43.9471 41.4693C43.9471 45.1359 41.3137 48.0693 37.9137 48.0693ZM57.2471 48.0693C53.8804 48.0693 51.1804 45.1359 51.1804 41.4693C51.1804 37.8026 53.8471 34.8693 57.2471 34.8693C60.6471 34.8693 63.3137 37.8359 63.2804 41.4693C63.2804 45.1359 60.6471 48.0693 57.2471 48.0693Z" fill="#5865F2"/>
    </svg>
);

const DiscordCard = () => {
  const [lanyardData, setLanyardData] = useState(null);
  const discordId = "801798242894741545";

  useEffect(() => {
    const fetchLanyardData = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        if (!response.ok) return;
        const data = await response.json();
        setLanyardData(data.data);
      } catch (error) {
        console.error("Failed to fetch Lanyard data:", error);
      }
    };

    fetchLanyardData();
    const interval = setInterval(fetchLanyardData, 300000);

    return () => clearInterval(interval);
  }, [discordId]);

  const statusColor = {
    online: '#43b581',
    idle: '#faa61a',
    dnd: '#f04747',
    offline: '#747f8d'
  };

  if (!lanyardData) {
    return <div className="discord-card-placeholder">Loading Discord Status...</div>;
  }

  return (
    <div className={`discord-card status-${lanyardData.discord_status}`}>
      <div className="discord-header">
        <div className="discord-icon-wrapper">
          <DiscordIcon />
        </div>
        <div className="discord-title-group">
          <h3 className="discord-title">Discord</h3>
          <p className="discord-username">{lanyardData.discord_user.username}</p>
        </div>
        <a href="https://discord.com/users/272037078926229504" className="follow-button-discord" target="_blank" rel="noopener noreferrer">
          Follow
        </a>
      </div>
      
      <div className="discord-status-wrapper">
        <span className="status-dot" style={{ backgroundColor: statusColor[lanyardData.discord_status] }}></span>
        <p className="status-text">{lanyardData.discord_status}</p>
      </div>

      {lanyardData.activities.length > 0 && (
        <div className="activity-card">
          <p className="activity-title">PLAYING A GAME</p>
          <div className="activity-details">
            {lanyardData.activities[0].assets && (
              <img 
                src={`https://cdn.discordapp.com/app-assets/${lanyardData.activities[0].application_id}/${lanyardData.activities[0].assets.large_image}.png`} 
                alt={lanyardData.activities[0].assets.large_text || ''}
                className="activity-image" 
              />
            )}
            <div>
              <p className="activity-name">{lanyardData.activities[0].name}</p>
              <p className="activity-state">{lanyardData.activities[0].details}</p>
              <p className="activity-state">{lanyardData.activities[0].state}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscordCard;