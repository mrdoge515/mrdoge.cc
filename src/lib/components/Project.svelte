<script lang="ts">
  import "@fontsource/material-symbols-outlined";
  import { onMount } from "svelte";
  import { getGithubRepo } from "$lib/githubApiWrapper";
  import type { GithubApiGetRepoType } from "$lib/types";
  import { cleanDate } from "$lib/utils";
  import Link from "./Link.svelte";

  export let borderColor: string;
  export let repoFullName: string;

  let data: GithubApiGetRepoType = {} as GithubApiGetRepoType;

  onMount(async () => {
    data = await getGithubRepo(repoFullName);
  });
</script>

<main style="--borderColor: {borderColor}">
  <h1>
    <a href={data.html_url} target="_blank" rel="noopener">{data.name}</a>
  </h1>
  <p id="dateBar">
    <span id="createdAt"
      ><span class="material-symbols-outlined">add_circle</span>
      {cleanDate(data.created_at)}</span
    >
    <span
      ><span class="material-symbols-outlined">upgrade</span>{cleanDate(
        data.pushed_at
      )}</span
    >
  </p>
  <p id="description">{data.description}</p>
</main>

<style>
  .material-symbols-outlined {
    font-family: "Material Symbols Outlined";
    font-weight: normal;
    font-style: normal;
    font-size: 1em;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
  }

  main {
    background-color: #e6e9ef; /* Latte - Mantle */
    border: solid 2px var(--borderColor);
    border-radius: 10px;
    padding: 1em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    color: #4c4f69; /* Latte - Text */
    text-decoration: none;
    transition: color ease-in-out 0.5s;
    font-size: 1.5em;
  }
  a:hover {
    color: #8839ef; /* Latte - Mauve */
  }

  #dateBar {
    margin-top: 0;
  }
  #dateBar span {
    color: #6c6f85; /* Latte - Subtext0 */
    vertical-align: bottom;
  }
  #createdAt {
    margin-right: 0.5em;
  }

  #description {
    color: #5c5f77; /* Latte - Subtext1 */
  }

  @media (prefers-color-scheme: dark) {
    main {
      background-color: #363a4f; /* Macchiato - Surface0 */
    }

    a {
      color: #cad3f5; /* Macchiato - Text */
    }
    a:hover {
      color: #c6a0f6; /* Macchiato - Mauve */
    }

    #dateBar span {
      color: #a5adcb; /* Macchiato - Subtext0 */
    }

    #description {
      color: #b8c0e0; /* Macchiato - Subtext1 */
    }
  }
</style>
