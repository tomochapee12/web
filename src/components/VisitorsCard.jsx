import React, { useState, useEffect } from 'react';
import './VisitorsCard.css';

const Digit = ({ number }) => (
  <div className="digit-box">{number}</div>
);

const VisitorsCard = () => {
  const [count, setCount] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const processCounter = async () => {
      try {
        const getResponse = await fetch('/api/counter');
        if (!getResponse.ok) {
          throw new Error('Failed to fetch count');
        }
        const currentCount = await getResponse.text();
        setCount(currentCount.padStart(7, '0'));
        const hasVisited = sessionStorage.getItem('portfolio_visited');
        if (!hasVisited) {
          sessionStorage.setItem('portfolio_visited', 'true');
          await fetch('/api/counter', { method: 'POST' });
        }
      } catch (error) {
        console.error("Counter API error:", error);
        setCount('-------');
      } finally {
        setIsLoading(false);
      }
    };

    processCounter();
  }, []);

  return (
    <div className="visitors-card">
      <h3 className="visitors-title">Visitors</h3>
      <div className="counter-display">
        {isLoading 
          ? <div className="loading-dots">...</div>
          : count.split('').map((char, index) => <Digit key={index} number={char} />)
        }
      </div>
    </div>
  );
};

export default VisitorsCard;