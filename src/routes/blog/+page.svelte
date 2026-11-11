<script>
	let { data } = $props();
</script>

<div class="flex flex-col items-center justify-center gap-10">
	<div class="flex flex-col items-center justify-center gap-5">
		<h1 class="google-sans-flex-special-title text-7xl">Blog</h1>
		<p class="google-sans-flex-bold text-2xl">My random ramblings about anything my brain wants</p>
		<a
			rel="noopener noreferer"
			target="_blank"
			href="/rss.xml"
			class="google-sans-flex-regular text-xl hover:underline">&lt;RSS feed /&gt;</a
		>
	</div>
	<ul class="flex w-full flex-col gap-5">
		{#each data.posts as post (post.slug)}
			<li
				class="w-full rounded-2xl border-2 p-3 transition-all duration-300 ease-out hover:bg-white hover:text-black"
			>
				<a class="flex flex-row items-center justify-between" href="/blog/{post.slug}">
					<div>
						<h1 class="google-sans-flex-bold text-3xl">{post.title}</h1>
						<p class="google-sans-flex-regular text-xl">{post.snippet}</p>
					</div>
					<p class="google-sans-flex-bold-round text-2xl">{post.date}</p>
				</a>
			</li>
		{/each}
	</ul>
</div>
