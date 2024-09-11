<script lang="ts">
	import "@fontsource/ubuntu-mono";
	import Link from "$lib/components/Link.svelte";
</script>

<main>
	<h1>Oopsie :3</h1>
	<Link
		url="{'/'}"
		blank="{false}">Go back</Link
	>
</main>

<style>
	main {
		min-height: 100vh;
		min-height: 100dvh;
		background-color: #eff1f5; /* Latte - Base */
		color: #4c4f69; /* Latte - Text */

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-family: "Ubuntu Mono", monospace;
		font-size: 4em;
	}

	@media (prefers-color-scheme: dark) {
		main {
			background-color: #24273a; /* Macchiato - Base */
			color: #cad3f5; /* Macchiato - Text */
		}
	}
</style>
