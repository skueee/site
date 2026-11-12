import { getPosts } from '#lib/posts';

export const prerender = true;

export async function GET({ setHeaders }) {
  const website = 'https://skue.dev';

  const staticPages = [
    '',
    '/blog',
    '/guestbook',
    '/corners',
    '/rss.xml'
  ]

  const { posts } = await getPosts()

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
      <url>
        <loc>${website}${page}</loc>
        <changefreq>weekly</changefreq>
      </url>
    `
      )
      .join('')}
    ${posts
      .map(
        (post) => `
      <url>
        <loc>${website}/blog/${post.slug}</loc>
        <changefreq>yearly</changefreq>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml'
    }
  })
}
