/* 
  GitHubリポジトリカード
  最近更新したリポジトリを最大5つ表示。各リポジトリの名前、簡単な説明、使用言語、そしてクリックするとGitHubページに飛べるリンク
*/
import { FaGithub } from 'react-icons/fa';

export default function GithubCard() {
  const githubUrl = "https://github.com/tomochapee12";
  
  return (
    <a href={githubUrl} className="widget link-card" target="_blank" rel="noopener noreferrer">
      <div className="icon" style={{ backgroundColor: '#24292e' }}>
        <FaGithub size={28} color="white" />
      </div>
      <div className="content">
        <p className="title">GitHub</p>
        <p className="subtitle">tomochapee12</p>
      </div>
      <button className="action-button" onClick={(e) => { e.preventDefault(); window.open(`${githubUrl}?tab=followers`); }}>
        Follow
      </button>
    </a>
  );
}