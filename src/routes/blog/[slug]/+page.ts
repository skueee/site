import { error } from '@sveltejs/kit';

const posts = import.meta.glob('/src/posts/*.md');

export async function load({ params }) {
	const loader = posts[`/src/posts/${params.slug}.md`];

	if (!loader) {
		error(404, 'Article not found');
	}

	const post = await loader();

	return {
		content: post.default,
		meta: post.metadata
	};
}
