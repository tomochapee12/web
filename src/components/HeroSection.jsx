import React from 'react';
import './HeroSection.css';
import avatarImage from '../assets/icon-trans.png';

const ScrollDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 12L12 19L5 12" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const HeroSection = () => {
  const comments = [
    "ネコとネモは神",
    "このコメントもAPIで取得している（嘘）",
    "Welcome to my portfolio!",
    "バーキンはダイヤモンド会員",
  ];
  const randomComment = comments[Math.floor(Math.random() * comments.length)];

  const handleScrollClick = () => {
    const target = document.querySelector('.container');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
          <img src={avatarImage} alt="Portrait of tete_1212" className="hero-avatar" />
          <div className="hero-text-group">
            <h1 className="hero-title">tete_1212</h1>
            <p className="hero-subtitle">{randomComment}</p>
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