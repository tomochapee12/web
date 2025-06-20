/*
  小さなスライドショー形式で表示
*/
'use client';

import { useState, useEffect } from 'react';

// public/slideshow/ に置いた画像ファイル名を手動でリストアップ
const images = [
  "/slideshow/image1.jpg",
  "/slideshow/image2.png",
  "/slideshow/image3.png",
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10秒ごとに画像を切り替え

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="widget">
      <h3>From Fileserver</h3>
      <div style={{
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <img
          src={images[currentIndex]}
          alt="Slideshow Image"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  );
}