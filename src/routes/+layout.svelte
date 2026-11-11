<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import "../app.css";
	import Header from '#lib/components/Header.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div>
    <Header/>
    <main class="py-10 px-90">
        {@render children()}
    </main>
    <footer>
        <div class="flex flex-col items-center justify-center py-10 gap-2">
            <p class="google-sans-flex-wide text-xl">Made with &lt;3 by skue</p>
            <p class="google-sans-flex-regular">
                <a class="hover:underline" rel="noopener noreferer" target="_blank" href="https://github.com/skueee/site/">Source</a> | <a class="hover:underline" rel="noopener noreferer" target="_blank" href="">Contact</a>
            </p>
        </div>
    </footer>
</div>
