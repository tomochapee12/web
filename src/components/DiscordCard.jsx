import React, { useState, useEffect } from 'react';
import './DiscordCard.css';

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="#333">
    <path d="M251-160q-42.05-32-67.525-78.5T158-333l138-51 96 154-141 90Zm458 0-141-90 96-154 138 51q-1 47-26.5 93.5T709-160ZM480-413Zm-20 253q-109 0-194.5-78T180-413q0-101 70-170.5T430-653h100q12.75 0 23.375 10.625T564-619q0 12.75-10.625 23.375T530-585H430q-83 0-141.5 58.5T230-385q0 75 50 126t121 51q66 0 116-36t70-90l-123-45-71 115Zm143-34-71-115-123 45q20 54 70 90t116 36q71 0 121-51t50-126q0-83-58.5-141.5T530-585H471l14-23 15 1 29 49 52 86q32-21 53-53.5t21-70.5q0-61-35-103.5T560-840q-54-42-120-42t-120 42q-47 42-47 101v1l-58-95-58 95v-1q0-94 63.5-155.5T329-920q79-62 171-62 92 62 153 148.5T715-620q0 61-34 110.5T600-410Z"/>
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