// GitHubから最新リポジトリ5つを取得する非同期コンポーネント
interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

async function getRepos(): Promise<Repo[]> { 
  const username = "tomochapee12";
  const url = `https://api.github.com/users/${username}/repos?sort=pushed&per_page=5&type=owner`;

  try {
    const response = await fetch(url, { cache: 'no-store' }); // cache: 'no-store' に変更
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
    <div className="widget">
      <h3>Latest Repositories</h3>
      <ul>
          {repos.map((repo) => (
            <li key={repo.id} style={{ borderBottom: '1px solid var(--border-color)', padding: '0.5rem 0' }}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.9em', opacity: 0.7 }}>
                {repo.description || "No description."}
              </p>
            </li>
          ))}
        </ul>
    </div>
  );
}