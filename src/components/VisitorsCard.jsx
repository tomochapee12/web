import React, { useState, useEffect } from 'react';
import './VisitorsCard.css';

// ... Digitコンポーネントは変更なし ...

const VisitorsCard = () => {
  const [count, setCount] = useState('0000000');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // セッションストレージを使って、同じブラウザセッション内での重複カウントを防ぐ
    const hasVisited = sessionStorage.getItem('portfolio_visited');

    const fetchCounter = async (shouldIncrement) => {
      try {
        let response;
        if (shouldIncrement) {
          // ★カウントアップAPI(POST)だけを呼び出す
          response = await fetch('/api/counter', { method: 'POST' });
        } else {
          // ★既に訪問済みの場合はGETで取得するだけ
          response = await fetch('/api/counter');
        }

        if (response.ok) {
          const currentCount = await response.text();
          setCount(currentCount.padStart(7, '0'));
        }
      } catch (error) {
        console.error("Counter API error:", error);
        setCount('-------');
      } finally {
        setIsLoading(false);
      }
    };

    if (!hasVisited) {
      // まだ訪問していない場合
      fetchCounter(true); // カウントアップする
      sessionStorage.setItem('portfolio_visited', 'true'); // 訪問済みフラグを立てる
    } else {
      // 既に訪問済みの場合
      fetchCounter(false); // 取得だけする
    }

  }, []);

  return (
    <div className="visitors-card">
      <h3 className="visitors-title">Visitors</h3>
      <div className="counter-display">
        {isLoading 
          ? '...'.padStart(7, ' ').split('').map((c, i) => <Digit key={i} number={c} />)
          : count.split('').map((char, index) => <Digit key={index} number={char} />)
        }
      </div>
    </div>
  );
};

export default VisitorsCard;