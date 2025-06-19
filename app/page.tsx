'use client'
import { useEffect } from 'react';
export const runtime = 'edge';

import Hero from "@/components/Hero";
import LatestRepos from "@/components/LatestRepos";
import SocialLinks from "@/components/SocialLinks";
import OsuCard from "@/components/OsuCard";
import CurrentTime from "@/components/CurrentTime";
import VisitorCounter from "@/components/VisitorCounter";
import Slideshow from "@/components/Slideshow";
import GithubCard from '@/components/GithubCard';
import BlogCard from '@/components/BlogCard';
import DiscordCard from '@/components/DiscordCard';


export default function HomePage() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.getElementById('hero-container');
      if (hero) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        // マウス位置に応じて-1から1の範囲で値を計算
        const moveX = (clientX / innerWidth - 0.5) * 2;
        const moveY = (clientY / innerHeight - 0.5) * 2;
        
        // 背景画像を少しだけ動かす
        hero.style.setProperty('--move-x', `${moveX * -5}px`);
        hero.style.setProperty('--move-y', `${moveY * -5}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 1. 最初に表示されるヒーローセクション */}
      <Hero />

      {/* 2. スクロール後に表示されるコンテンツグリッド */}
      <div className="widgets-grid">
        <div className="main-column">
          <GithubCard />
          <DiscordCard />
          <BlogCard />
          <OsuCard />
          <CurrentTime />
          <VisitorCounter />
          <Slideshow />
        </div>
        <div className="repo-column">
          <LatestRepos />
        </div>
      </div>
    </>
  );
}