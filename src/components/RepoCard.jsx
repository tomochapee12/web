import React from 'react';
import './RepoCard.css';

const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  default: '#6e7681',
};

const RepoCard = ({ name, description, language, url }) => {
  return (
    <a href={url} className="repo-card" target="_blank" rel="noopener noreferrer">
      <h4 className="repo-name">{name}</h4>
      <p className="repo-description">{description || 'No description provided.'}</p>
      
      {language && (
        <div className="repo-language">
          <span
            className="language-color-dot"
            style={{ backgroundColor: languageColors[language] || languageColors.default }}
          ></span>
          <span>{language}</span>
        </div>
      )}
    </a>
  );
};

export default RepoCard;