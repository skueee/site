<script>
    let { text = '', link = '' } = $props();
</script>

<div class="bg-white text-black py-3 px-6 transition-[border-radius] duration-300 ease-out rounded-4xl hover:rounded-xl">
    <a class="google-sans-flex-wide text-2xl" href={link} rel="noopener noreferrer" target="_blank">{text}</a>
</div>
