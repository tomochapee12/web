// src/components/VisitorsCard.jsx
import React, { useState, useEffect } from 'react';
import './VisitorsCard.css';

const Digit = ({ number }) => (
  <div className="digit-box">{number}</div>
);

const VisitorsCard = () => {
  // useStateでカウンターの値を管理
  const [count, setCount] = useState('0000000');

  useEffect(() => {
    const fetchAndIncrementCounter = async () => {
      try {
        // 1. まず現在のカウント数を取得
        const getResponse = await fetch('/api/counter');
        if (getResponse.ok) {
          const currentCount = await getResponse.text();
          // 7桁になるように左側を0で埋める
          setCount(currentCount.padStart(7, '0'));
        }

        // 2. 次にカウントを1増やすリクエストを送る
        // この結果は表示には使わない（次にアクセスした人向け）
        await fetch('/api/counter', { method: 'POST' });

      } catch (error) {
        console.error("Counter API error:", error);
        // エラー時はダミーデータを表示
        setCount('-------');
      }
    };

    fetchAndIncrementCounter();
  }, []); // 初回レンダリング時に一度だけ実行

  return (
    <div className="visitors-card">
      <h3 className="visitors-title">Visitors</h3>
      <div className="counter-display">
        {count.split('').map((char, index) => (
          <Digit key={index} number={char} />
        ))}
      </div>
    </div>
  );
};

export default VisitorsCard;