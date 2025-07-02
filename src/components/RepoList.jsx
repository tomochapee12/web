import React, { useState, useEffect } from 'react';
import RepoCard from './RepoCard';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      const username = "tomochapee12";
      const url = `https://api.github.com/users/${username}/repos?sort=pushed&per_page=5&type=owner`;

      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch GitHub repos:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="repo-card-placeholder"></div>
    ));
  }

  if (error) {
    return <div className="error-message">Failed to load repositories.</div>;
  }

  return (
    <>
      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          language={repo.language}
          url={repo.html_url}
        />
      ))}
    </>
  );
};

export default RepoList;