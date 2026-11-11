<script>
	let { children } = $props();
</script>

<main class="blog-post">
	{@render children()}
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&display=swap');

	.blog-post :global(h1) {
		font-family: 'Google Sans Flex', sans-serif;
		font-weight: 700;
		font-variation-settings:
			'wdth' 110,
			'ROND' 0;
		font-size: 2rem;
		padding-bottom: 0.5rem;
	}

	.blog-post :global(h2) {
		font-family: 'Google Sans Flex', sans-serif;
		font-weight: 600;
		font-variation-settings:
			'wdth' 110,
			'ROND' 0;
		font-size: 1.7rem;
		padding-bottom: 0.3rem;
	}

	.blog-post :global(h3) {
		font-family: 'Google Sans Flex', sans-serif;
		font-weight: 600;
		font-variation-settings:
			'wdth' 100,
			'ROND' 0;
		font-size: 1.3rem;
		padding-bottom: 0.8rem;
	}

	.blog-post :global(p) {
		padding-bottom: 0.8rem;
	}

	.blog-post :global(a) {
		color: #7698e3;
	}

	.blog-post :global(blockquote) {
		margin-left: 1.5rem;
		color: #a3a3a3;
	}

	.blog-post :global(ul) {
		list-style-type: disc;
		margin-left: 1.5rem;
		padding-bottom: 0.8rem;
	}

	.blog-post :global(ol) {
		list-style-type: decimal;
		margin-left: 1.5rem;
		padding-bottom: 0.8rem;
	}

	.blog-post :global(code) {
		font-family: 'Google Sans Code', monospace;
	}
</style>
