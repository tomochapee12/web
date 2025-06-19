'use client'; // このコンポーネントはクライアントサイドで動作することを宣言

import { useState, useEffect } from 'react';

export default function CurrentTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    // 1秒ごとに時間を更新する
    const timerId = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleString('ja-JP'));
    }, 1000);

    // コンポーネントが不要になったらタイマーを停止する
    return () => clearInterval(timerId);
  }, []); // [] は初回のみ実行するという意味

  return (
    <div className="widget">
      <h3>Local Time</h3>
      <p style={{ fontSize: '1.2em' }}>{time || 'Loading...'}</p>
    </div>
  );
}