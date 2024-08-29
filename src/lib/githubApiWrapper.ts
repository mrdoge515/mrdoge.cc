import type { GithubApiGetRepoType } from "./types";

export async function getGithubRepo(repoFullName: string): Promise<GithubApiGetRepoType> {
	let url = "https://api.github.com/repos/" + repoFullName;
	let data: GithubApiGetRepoType = {} as GithubApiGetRepoType;

	try {
		const response = await fetch(url, {
			headers: {
				"Accept": "application/vnd.github+json",
				"X-GitHub-Api-Version": "2022-11-28",
			},
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();

		data = json;
		data.ok = true;
		data.created_at = new Date(json.created_at);
		data.pushed_at = new Date(json.pushed_at);
	} catch (error) {
		data.ok = false;
		console.log(error);
	}

	return data;
}
