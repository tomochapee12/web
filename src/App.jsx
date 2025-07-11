import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import RepoList from './components/RepoList';
import BlogCard from './components/BlogCard';
import GitHubCard from './components/GitHubCard';
import DiscordCard from './components/DiscordCard';
import OsuCard from './components/OsuCard';
import VisitorsCard from './components/VisitorsCard';
import ClockCard from './components/ClockCard';
import SlideshowCard from './components/SlideshowCard';
import AnnictCard from './components/AnnictCard';

function App() {
  return (
    <>
      <HeroSection />
      <div className="container">
        <main className="main-content">
          <div className="column column-1">
            <RepoList />
            <AnnictCard />
          </div>
          <div className="column column-2">
            <BlogCard />
            <OsuCard />
            <ClockCard />
          </div>
          <div className="column column-3">
            <GitHubCard />
            <DiscordCard />
            <VisitorsCard />
            <SlideshowCard />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;