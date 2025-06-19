import Hero from "@/components/Hero";
import LatestRepos from "@/components/LatestRepos";
import SocialLinks from "@/components/SocialLinks";
import OsuCard from "@/components/OsuCard";
import CurrentTime from "@/components/CurrentTime";
import VisitorCounter from "@/components/VisitorCounter";
import Slideshow from "@/components/Slideshow";

export default function HomePage() {
  return (
    <>
      {/* 1. 最初に表示されるヒーローセクション */}
      <Hero />

      {/* 2. スクロール後に表示されるコンテンツグリッド */}
      <div className="widgets-grid">
        <LatestRepos />
        <SocialLinks />
        <OsuCard />
        <CurrentTime />
        <VisitorCounter />
        <Slideshow />
        {/* 必要であれば、さらにウィジェットを追加できます */}
      </div>
    </>
  );
}