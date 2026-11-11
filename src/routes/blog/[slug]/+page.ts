import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`/src/posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (err) {
		error(404, 'Article not found');
	}
}
