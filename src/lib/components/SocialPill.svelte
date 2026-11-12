<script>
	let { text = '', link = '' } = $props();
</script>

<a
	class="rounded-4xl bg-white px-6 py-3 text-black transition-[border-radius] duration-300 ease-out hover:rounded-xl"
	href={link}
	rel="noopener noreferrer me"
	target="_blank"
>
	<p class="google-sans-flex-wide text-2xl">{text}</p>
</a>
