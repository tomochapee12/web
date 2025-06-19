// GitHubから最新リポジトリ5つを取得する非同期コンポーネント
const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  C: '#555555',
  'C++': '#f34b7d',
  default: '#6e7681',
};
interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

async function getRepos(): Promise<Repo[]> { 
  const username = "tomochapee12";
  const url = `https://api.github.com/users/${username}/repos?sort=pushed&per_page=5&type=owner`;

  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
      return [];
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return [];
  }
}

export default async function LatestRepos() {
  const repos = await getRepos();

  return (
    <>
      {repos.map((repo) => (
        <a href={repo.html_url} key={repo.id} className="widget repo-card" target="_blank" rel="noopener noreferrer">
          <h4>{repo.name}</h4>
          <p className="description">{repo.description || 'No description provided.'}</p>
          <div className="language">
            {repo.language && (
              <>
                <span className="language-color-dot" style={{ backgroundColor: languageColors[repo.language] || languageColors.default }}></span>
                <span>{repo.language}</span>
              </>
            )}
          </div>
        </a>
      ))}
    </>
  );
}