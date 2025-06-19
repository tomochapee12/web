'use client'; 

import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
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
    <div className={styles.heroContainer}>
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={styles.heroBackground}
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
      
      <Tilt
        className={styles.tilt}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.3}
        glarePosition="all"
        scale={1.02}
      >
        <div className={styles.heroContent}>
          <h1>Tomochapee</h1>
          <p>I love programming.</p>
        </div>
      </Tilt>

      <div className={styles.scrollDownArrow}>
        <span>∨</span>
      </div>
    </div>
  );
}