<script>
	let { data } = $props();
	const Content = data.content;
</script>

<article>
	<div class="mb-3 flex w-full flex-row items-end justify-between">
		<span class="google-sans-flex-title text-4xl">{data.meta.title}</span>
		<time class="google-sans-flex-bold text-xl">{data.meta.date}</time>
	</div>

	<hr class="py-3" />

	<Content />
</article>

<style>
	article {
		max-width: 700px;
		margin: 2rem auto;
		padding: 0 1rem;
	}
</style>
