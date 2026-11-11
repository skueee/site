<script>
	import { page } from '$app/state';

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

<article class="h-entry">
	<div class="mb-3 flex w-full flex-row items-end justify-between">
		<span class="p-name google-sans-flex-title text-4xl">{data.meta.title}</span>
		<time class="dt-published google-sans-flex-bold text-xl" datetime={data.meta.date}
			>{data.meta.date}</time
		>
	</div>

	<p class="p-summary hidden">{data.meta.snippet}</p>
	<a class="u-url hidden" href={target}/>
	<a rel="author hideen" class="p-author h-card" href="https://skue.dev/">skue</a>

	<hr class="py-3" />

	<div class="e-content">
		<Content />
	</div>

	<div data-webmention-target={target}></div>
</article>

<style>
	article {
		max-width: 700px;
		margin: 2rem auto;
		padding: 0 1rem;
	}
</style>
