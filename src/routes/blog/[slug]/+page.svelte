<script>
    import { page } from "$app/state";

	let { data } = $props();
	const Content = data.content;

	const target = $derived(`https://skue.dev/blog/${page.params.slug}`);

	$effect(() => {
		const script = document.createElement('script');
		script.src = 'https://webmention.io/js/webmention-render.js';
		script.dataset.webmentionFor = target;
		document.body.appendChild(script);
		return () => script.remove();
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://webmention.io/assets/webmention-render.css" />
</svelte:head>

<article>
	<div class="mb-3 flex w-full flex-row items-end justify-between">
		<span class="google-sans-flex-title text-4xl">{data.meta.title}</span>
		<time class="google-sans-flex-bold text-xl">{data.meta.date}</time>
	</div>

	<hr class="py-3" />

	<Content />

	<div data-webmention-target={target}></div>
</article>

<style>
	article {
		max-width: 700px;
		margin: 2rem auto;
		padding: 0 1rem;
	}
</style>
