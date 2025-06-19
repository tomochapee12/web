// src/components/DiscordCard.tsx

'use client';
import useSWR from 'swr';
import { FaDiscord } from 'react-icons/fa';

const fetcher = (url: string) => fetch(url).then(res => res.json());

// あなたのDiscordユーザーIDに置き換えてください
const DISCORD_ID = 'YOUR_DISCORD_ID_HERE'; 

export default function DiscordCard() {
  const { data, error } = useSWR(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`, fetcher, {
    refreshInterval: 10000, // 10秒ごとに更新
  });

  const statusColors: { [key: string]: string } = {
    online: '#3ba55d',
    idle: '#faa81a',
    dnd: '#ed4245',
    offline: '#747f8d',
  };

  if (error) return <div className="widget">Failed to load Discord status.</div>;
  if (!data || !data.data) return <div className="widget">Loading...</div>;

  const discordData = data.data;

  return (
    <a href="https://discord.com/users/801798242894741545" className="widget link-card" target="_blank" rel="noopener noreferrer">
      <div className="icon" style={{ backgroundColor: '#5865f2' }}>
        <FaDiscord size={28} color="white" />
        <span style={{
          position: 'absolute',
          bottom: -2, right: -2,
          width: '15px', height: '15px',
          backgroundColor: statusColors[discordData.discord_status],
          borderRadius: '50%', border: '2px solid #2f3136'
        }}></span>
      </div>
      <div className="content">
        <p className="title">{discordData.discord_user.username}</p>
        <p className="subtitle">
          {discordData.activities.length > 0
            ? `${discordData.activities[0].name}`
            : discordData.discord_status}
        </p>
      </div>
    </a>
  );
}