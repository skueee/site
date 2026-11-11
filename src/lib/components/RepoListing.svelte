<script>
    let { name = '', description = '', url = '' } = $props()
</script>

<a href={url} rel="noopener noreferer" target="_blank" class="w-full flex flex-col rounded-2xl border-2 py-2 px-5 transition-all ease-out duration-150 hover:rounded-[4rem] hover:bg-white hover:text-black">
    <h1 class="google-sans-flex-bold text-2xl">{name}</h1>
    <p class="google-sans-flex-regular text-xl">{description}</p>
</a>
