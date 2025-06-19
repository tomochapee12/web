// GitHubから最新リポジトリ5つを取得する非同期コンポーネント
async function getRepos() {
  const username = "tomochapee12";
  const url = `https://api.github.com/users/${username}/repos?sort=pushed&per_page=5&type=owner`;

  try {
    // revalidate: 1時間ごとにデータを再取得
    const response = await fetch(url, { next: { revalidate: 3600 } });
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
      {repos.length > 0 ? (
        <ul>
          {repos.map((repo: any) => (
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
      ) : (
        <p>Could not load repositories.</p>
      )}
    </div>
  );
}