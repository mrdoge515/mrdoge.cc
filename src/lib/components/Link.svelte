<script lang="ts">
	export let url: string;
	export let blank: boolean;
</script>

{#if blank}
	<a href={url} target="_blank" rel="noopener"><slot /></a>
{:else}
	<a href={url}><slot /></a>
{/if}

<style>
	a {
		font-size: 2em;
		color: #6c6f85;
		transition-property: color text-decoration-color;
		transition: ease-in-out 0.5s;
	}
	a:hover {
		color: #8839ef;
	}

	@media (prefers-color-scheme: dark) {
		a {
			color: #a5adcb;
		}
		a:hover {
			color: #c6a0f6;
		}
	}
</style>
