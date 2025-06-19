'use client'; 

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const backgroundImages = [
  '/bg1.jpg',
  '/bg2.jpg',
  '/bg3.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="hero-container"
      className={styles.heroContainer}
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <div className={styles.heroContent}>
        <h1>Tomochapee</h1>
        <p>I love programming.</p>
      </div>
    </div>
  );
}