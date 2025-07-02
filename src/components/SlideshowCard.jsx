import React, { useState, useEffect } from 'react';
import './SlideshowCard.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

const slideImages = [slide1, slide2, slide3];

const SlideshowCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % slideImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {slideImages.map((imageSrc, index) => (
        <div
          key={index}
          className={`slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
      ))}
    </div>
  );
};

export default SlideshowCard;