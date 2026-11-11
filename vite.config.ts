import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter, bundledLanguages } from 'shiki';

const highlighter = await createHighlighter({
	themes: ['github-dark'],
	langs: Object.keys(bundledLanguages)
});

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter(),
			extensions: ['.svelte', '.md'],
			preprocess: [
				vitePreprocess(),
				mdsvex({
					extensions: ['.md'],
					highlight: {
						highlighter: (code, lang) => `
            <div class="code-block">
             ${highlighter.codeToHtml(code, { lang: lang || 'text', theme: 'github-dark' })}
            </div>`
					}
				})
			]
		}),
		mdsvex({
			smartypants: {
				dashes: 'oldschool'
			}
		})
	],
	server: {
		fs: { allow: ['..'] }
	}
});
