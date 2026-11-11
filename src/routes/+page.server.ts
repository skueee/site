export async function load({ fetch }) {
	const recentRepos = await getRepos({ fetch });
	return { repos: recentRepos };
}

async function getRepos({ fetch }) {
	const username: string = 'skueee';

	const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

	if (!response.ok) {
		throw new Error(`Failed to fetch repositories from GitHub: ${response.status}`);
	}

	const repos = await response.json();

	repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

	const recentRepos = repos.slice(0, 3).map((repo) => ({
		name: repo.name,
		description: repo.description || 'No description provided.',
		url: repo.html_url
	}));

	return recentRepos;
}
