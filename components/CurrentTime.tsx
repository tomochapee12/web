'use client';
import { useState, useEffect } from 'react';
import styles from './CurrentTime.module.css';

export default function CurrentTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  return (
    <div className={`${styles.clockContainer} widget`}>
      <div className={styles.clock}>
        <div className={styles.hand} style={{ transform: `rotate(${hourDeg}deg)` }} />
        <div className={styles.hand} style={{ transform: `rotate(${minuteDeg}deg)` }} />
        <div className={`${styles.hand} ${styles.second}`} style={{ transform: `rotate(${secondDeg}deg)` }} />
      </div>
      <div className={styles.digital}>
        {date.toLocaleTimeString('ja-JP')}
      </div>
    </div>
  );
}