export type LinkType = {
  url: string;
  blank: boolean;
  name: string;
};

export type GithubApiGetRepoType = {
  name: string;
  html_url: string | null;
  description: string | null;
  topics: string[];
  created_at: Date | null;
  pushed_at: Date | null;
  ok: boolean;
};

export type RepoType = {
  id: number;
  fullName: string;
  borderColor: string;
};
