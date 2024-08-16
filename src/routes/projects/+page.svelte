<script lang="ts">
  import Project from "$lib/components/Project.svelte";
  import type { RepoType } from "$lib/types";

  let repos: RepoType[] = [
    { id: 1, fullName: "mrdoge515/mrdoge.cc", borderColor: "#40a02b" },
    { id: 2, fullName: "mrdoge515/dotfiles", borderColor: "#dd7878" },
  ];

  let current = {} as RepoType;

  function previous() {
    current = repos[current.id - 1];
  }
  function next() {
    current = repos[current.id + 1];
  }

  current = repos[0];
</script>

<main>
  <Project repoFullName={current.fullName} borderColor={current.borderColor} />
  <div>
    <button on:click={() => previous()}>Previous</button>
    <a href="/">Main page</a>
    <button on:click={() => next()}>Next</button>
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    min-height: 100dvh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #eff1f5;
  }

  @media (prefers-color-scheme: dark) {
    main {
      background-color: #24273a;
    }
  }
</style>
