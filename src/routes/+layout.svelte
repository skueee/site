<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import '../app.css';
	import Header from '#lib/components/Header.svelte';

	let { children }: LayoutProps = $props();
</script>

<link rel="webmention" href="https://webmention.io/skue.dev/webmention" />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="h-card hidden">
	<a class="p-name u-url" href="https://skue.dev">Robin Brams</a>
	<p class="p-given-name">Robin</p>
	<p class="p-family-name">Brams</p>
	<p class="p-nickname">skue</p>
	<a class="u-email" href="mailto:me@skue.dev"></a>
	<data class="p-country-name" value="Belgium"></data>
	<p class="dt-bday">--02-17</p>
</div>

<div>
	<Header />
	<main class="px-10 py-10 lg:px-25 xl:px-80">
		{@render children()}
	</main>
	<footer>
		<div class="flex flex-col items-center justify-center gap-2 py-10">
			<p class="google-sans-flex-wide text-xl">Made with &lt;3 by skue</p>
			<p class="google-sans-flex-regular">
				<a
					class="hover:underline"
					rel="noopener noreferer"
					target="_blank"
					href="https://github.com/skueee/site/">Source</a
				>
				|
				<a
					class="hover:underline"
					rel="noopener noreferer"
					target="_blank"
					href="mailto:me@skue.dev">Contact</a
				>
			</p>
		</div>
	</footer>
</div>
