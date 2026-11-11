<script>
    import { page } from '$app/state';
</script>

<div class="flex flex-col items-center justify-center h-full">
    <h1 class="google-sans-flex-special-title text-9xl">{page.status}</h1>
    <p class="google-sans-flex-bold-extra text-4xl">{page.error.message}</p>
</div>
