import { getPosts } from '#lib/posts';

export const prerender = true;

const website = 'https://skue.dev';
const feedTitle = "skue's blog";
const feedDescription = 'I post whatever my brain tells me to';

export async function GET() {
	const { posts } = await getPosts();
	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${feedTitle}</title>
    <link>${website}</link>
    <description>${feedDescription}</description>
    <atom:link href="${website}/rss" rel="self" type="application/rss+xml"/>
    ${posts
			.map(
				(post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${website}/blog/${post.slug}</link>
      <guid isPermaLink="true">${website}/blog/${post.slug}.md</guid>
      <description><![CDATA[${post.snippet || ''}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
			)
			.join('')}
  </channel>
  </rss>`;

	return new Response(xml.trim(), {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
}
