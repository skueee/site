<script>
    let { data } = $props();
</script>

<div class="flex flex-col justify-center items-center gap-10">
    <div class="flex flex-col justify-center items-center gap-5">
        <h1 class="google-sans-flex-special-title text-7xl">Blog</h1>
        <p class="google-sans-flex-bold text-2xl">My random ramblings about anything my brain wants</p>
    </div>
    <ul class="w-full flex flex-col gap-5">
        {#each data.posts as post}
            <li class="w-full border-2 rounded-2xl p-3 transition-all duration-300 ease-out hover:bg-white hover:text-black">
                <a class="flex flex-row justify-between items-center" href="/blog/{post.slug}">
                    <div>
                        <h1 class="text-3xl google-sans-flex-bold">{post.title}</h1>
                        <p class="text-xl google-sans-flex-regular">{post.snippet}</p>
                    </div>
                    <p class="google-sans-flex-bold-round text-2xl">{post.date}</p>
                </a>
            </li>
        {/each}
    </ul>
</div>
