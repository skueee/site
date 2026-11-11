<script>
	let { name = '', description = '', url = '' } = $props();
</script>

<a
	href={url}
	rel="noopener noreferer"
	target="_blank"
	class="flex w-full flex-col rounded-2xl border-2 px-5 py-2 transition-all duration-150 ease-out hover:rounded-[4rem] hover:bg-white hover:text-black"
>
	<h1 class="google-sans-flex-bold text-2xl">{name}</h1>
	<p class="google-sans-flex-regular text-xl">{description}</p>
</a>
