<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import type { RepoType } from '$lib/types';
	import { onMount } from 'svelte';

	let repos: RepoType[] = [
		{ id: 1, fullName: 'mrdoge515/mrdoge.cc', borderColor: '#40a02b' },
		{ id: 2, fullName: 'mrdoge515/dotfiles', borderColor: '#dd7878' }
	];

	let currentIndex: number = 0;

	function previous(): void {
		if (currentIndex > 0) {
			currentIndex -= 1;
		}
	}

	function next(): void {
		if (currentIndex < repos.length - 1) {
			currentIndex += 1;
		}
	}

	$: current = repos[currentIndex];

	onMount(() => {
		currentIndex = 0;
	});
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

	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1em;
		margin-top: 1em;
	}
	div button,
	a {
		background-color: transparent;
		border: none;
		color: #5c5f77; /* Latte - Subtext1 */
		text-decoration: none;
	}

	@media (prefers-color-scheme: dark) {
		main {
			background-color: #24273a;
		}
		div button,
		a {
			color: #b5bfe2; /* Macchiato -  #b5bfe2	*/
		}
	}
</style>
