import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import avatarImage from '../assets/icon-trans.png';

const comments = [
  "Welcome to my portfolio!",
  "ネコとネモは神",
  "このコメントもAPIで取得している（嘘）",
  "バーキンはダイヤモンド会員",
];

const initialCommentIndex = comments.indexOf("Welcome to my portfolio!");

const getRandomCommentIndex = (currentIndex = -1) => {
  if (comments.length <= 1) return 0;

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * comments.length);
  }

  return nextIndex;
};

const ScrollDownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 5V19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 12L12 19L5 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroSection = () => {
  const [commentIndex, setCommentIndex] = useState(initialCommentIndex >= 0 ? initialCommentIndex : 0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCommentIndex((currentIndex) => getRandomCommentIndex(currentIndex));
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleScrollClick = () => {
    const target = document.querySelector('.container');
    if (!target) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      target.scrollIntoView({ behavior: 'auto' });
      return;
    }

    const startY = window.scrollY;
    const rect = target.getBoundingClientRect();
    const targetY = rect.top + window.scrollY;
    const distance = targetY - startY;
    const duration = 680;
    let startTime = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleScrollKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleScrollClick();
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-inner">
          <img src={avatarImage} alt="Portrait of tete_1212" className="hero-avatar" />
          <div className="hero-text-group">
            <h1 className="hero-title">tete_1212</h1>
            <p key={comments[commentIndex]} className="hero-subtitle">
              {comments[commentIndex]}
            </p>
          </div>
        </div>
      </div>
      
      <div
        className="scroll-indicator"
        role="button"
        tabIndex={0}
        aria-label="Scroll to content"
        onClick={handleScrollClick}
        onKeyDown={handleScrollKeyDown}
      >
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
