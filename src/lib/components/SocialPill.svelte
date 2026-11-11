<script>
	let { text = '', link = '' } = $props();
</script>

<div
	class="rounded-4xl bg-white px-6 py-3 text-black transition-[border-radius] duration-300 ease-out hover:rounded-xl"
>
	<a class="google-sans-flex-wide text-2xl" href={link} rel="noopener noreferrer" target="_blank"
		>{text}</a
	>
</div>
