<script lang="ts">
	import Link from "$lib/components/Link.svelte";
	import Title from "$lib/components/Title.svelte";
	import type { LinkType } from "$lib/types";

	let links: LinkType[] = [
		{ url: "https://github.com/mrdoge515", blank: true, name: "Github" },
		{ url: "/projects", blank: false, name: "Projects" },
	];

	let linksStyle: string = "";

	setTimeout(() => {
		linksStyle = "opacity: 1;";
	}, 2700);
</script>

<svelte:head>
	<title>mrdoge.cc</title>
	<meta
		name="description"
		content="mrdoge's personal website"
	/>
</svelte:head>

<main>
	<Title
		text="mrdoge.cc"
		typewriterSpeed="{300}"
	/>
	<div style="{linksStyle}">
		{#each links as link}
			<Link
				url="{link.url}"
				blank="{link.blank}">{link.name}</Link
			>
		{/each}
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
		max-width: 30%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 2em;
		opacity: 0;
		transition: opacity ease-in-out 0.5s;
	}

	@media (prefers-color-scheme: dark) {
		main {
			background-color: #24273a;
		}
	}
</style>
