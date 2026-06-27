import React, { useState, useEffect } from 'react';
import './DiscordCard.css';
import statusLinksIcon from '../assets/icons/status-links.svg';
import githubIcon from '../assets/icons/github.svg';
import xIcon from '../assets/icons/x.svg';
import blogIcon from '../assets/icons/blog.svg';
import discordIcon from '../assets/icons/discord.svg';
import osuIcon from '../assets/icons/osu.svg';
import annictIcon from '../assets/icons/annict.ico';

const activityLabelByType = {
  0: 'Playing',
  2: 'Listening',
  3: 'Watching',
  4: 'Status',
  5: 'Competing',
};

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/tomochapee12', note: 'code', icon: githubIcon },
  { label: 'X', href: 'https://x.com/tomochann12', note: 'posts', icon: xIcon },
  { label: 'Blog', href: 'https://blog.t12jp.org', note: 'writing', icon: blogIcon },
  { label: 'Discord', href: 'https://discord.com/users/272037078926229504', note: 'chat', icon: discordIcon },
  { label: 'osu!', href: 'https://osu.ppy.sh/users/tomochapee', note: 'game', icon: osuIcon },
  { label: 'Annict', href: 'https://annict.com/@tete_1212', note: 'watching', icon: annictIcon },
];

const getActivityImageUrl = (activity) => {
  const largeImage = activity.assets?.large_image;
  if (!largeImage) return '';
  if (largeImage.startsWith('mp:')) {
    return `https://media.discordapp.net/${largeImage.replace('mp:', '')}`;
  }
  if (!activity.application_id) return '';
  return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${largeImage}.png`;
};

const ContactLinkPanel = () => (
  <div className="contact-link-panel">
    <div className="contact-link-heading">
      <p>Contact / Links</p>
      <span>open routes</span>
    </div>
    <div className="contact-link-grid">
      {contactLinks.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link-item">
          <img src={link.icon} alt="" className="contact-link-icon" aria-hidden="true" />
          <span>{link.note}</span>
          <strong>{link.label}</strong>
        </a>
      ))}
    </div>
  </div>
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

  const visibleActivities = lanyardData?.activities?.slice(0, 2) || [];
  const discordStatus = lanyardData?.discord_status || 'connecting';
  const discordUsername = lanyardData?.discord_user?.username || 'loading';

  return (
    <div className="discord-card">
      <div className="discord-header">
        <div className="discord-icon-wrapper">
          <img src={statusLinksIcon} alt="" className="discord-title-icon" aria-hidden="true" />
        </div>
        <div className="discord-title-group">
          <h3 className="discord-title">Status & Links</h3>
          <p className="discord-username">{discordUsername}</p>
        </div>
      </div>
      
      <div className="discord-status-wrapper">
        <span className="status-dot" style={{ backgroundColor: statusColor[discordStatus] || '#718096' }}></span>
        <p className="status-text">{discordStatus}</p>
      </div>

      {visibleActivities.length > 0 ? (
        <div className="activity-list">
          {visibleActivities.map((activity) => {
            const imageUrl = getActivityImageUrl(activity);
            const label = activityLabelByType[activity.type] || 'Activity';

            return (
              <div key={`${activity.name}-${activity.created_at || activity.id || label}`} className="activity-card">
                <p className="activity-title">{label}</p>
                <div className="activity-details">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={activity.assets?.large_text || activity.name}
                      className="activity-image"
                    />
                  ) : (
                    <div className="activity-image-fallback">{activity.name.slice(0, 1)}</div>
                  )}
                  <div>
                    <p className="activity-name">{activity.name}</p>
                    {activity.details && <p className="activity-state">{activity.details}</p>}
                    {activity.state && <p className="activity-state">{activity.state}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="activity-card">
          <p className="activity-title">Activity</p>
          <p className="activity-empty">No public activity right now.</p>
        </div>
      )}

      <ContactLinkPanel />
    </div>
  );
};

export default DiscordCard;
