import React, { useEffect } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import RepoList from './components/RepoList';
import DiscordCard from './components/DiscordCard';
import OsuCard from './components/OsuCard';
import VisitorsCard from './components/VisitorsCard';
import ClockCard from './components/ClockCard';
import SlideshowCard from './components/SlideshowCard';
import AnnictCard from './components/AnnictCard';
import UsesCard from './components/UsesCard';
import HomelabStatusCard from './components/HomelabStatusCard';

const useActivityMasonry = () => {
  useEffect(() => {
    const grid = document.querySelector('.activity-section .card-grid');
    if (!grid || typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const slots = Array.from(grid.querySelectorAll('.card-slot'));
    let frameId = 0;

    const layout = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const baseStyle = window.getComputedStyle(grid);
        const columnCount = baseStyle.gridTemplateColumns.split(' ').filter(Boolean).length;

        if (columnCount <= 1) {
          grid.classList.remove('masonry-ready');
          slots.forEach(slot => {
            slot.style.gridRowEnd = '';
          });
          return;
        }

        grid.classList.add('masonry-ready');
        const style = window.getComputedStyle(grid);
        const rowHeight = parseFloat(style.gridAutoRows);
        const rowGap = parseFloat(style.rowGap);

        if (!Number.isFinite(rowHeight) || !Number.isFinite(rowGap) || rowHeight <= 0) {
          return;
        }

        slots.forEach(slot => {
          const height = slot.getBoundingClientRect().height;
          const span = Math.ceil((height + rowGap) / (rowHeight + rowGap));
          slot.style.gridRowEnd = `span ${span}`;
        });
      });
    };

    const observer = new ResizeObserver(layout);
    slots.forEach(slot => observer.observe(slot));
    window.addEventListener('resize', layout);
    layout();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('resize', layout);
      grid.classList.remove('masonry-ready');
      slots.forEach(slot => {
        slot.style.gridRowEnd = '';
      });
    };
  }, []);
};

function App() {
  useActivityMasonry();

  return (
    <>
      <HeroSection />
      <div className="container">
        <main className="main-content content-flow">
          <section className="card-section activity-section" aria-label="Activity and links">
            <div className="card-grid">
              <div className="card-slot span-2">
                <DiscordCard />
              </div>
              <div className="card-slot">
                <UsesCard />
              </div>
              <div className="card-slot">
                <AnnictCard />
              </div>
              <div className="card-slot span-2">
                <OsuCard />
              </div>
              <div className="card-slot">
                <VisitorsCard />
              </div>
              <div className="card-slot">
                <ClockCard />
              </div>
              <div className="card-slot span-2">
                <SlideshowCard />
              </div>
            </div>
          </section>

          <section className="card-section repo-section" aria-label="Latest repositories">
            <div className="section-heading">
              <p className="section-kicker">Recently Updated</p>
              <h2>Repositories</h2>
            </div>
            <div className="card-grid repo-grid">
              <RepoList />
            </div>
          </section>

          <section className="card-section lower-section" aria-label="Homelab status">
            <div className="card-grid">
              <div className="card-slot span-2">
                <HomelabStatusCard />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
