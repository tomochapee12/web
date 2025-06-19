
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