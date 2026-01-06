import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
    const host = getRequestHost(event)
    const protocol = getRequestProtocol(event)
    const baseUrl = `${protocol}://${host}`

    const staticRoutes = [
        '/',
        '/game',
        '/game/drinking-card',
        '/game/drinking-card/18-plus',
        '/game/drinking-card/film-of-life',
        '/game/drinking-card/warm-up',
        '/game/truth-or-dare',
        '/game/truth-or-dare/18-plus',
        '/game/truth-or-dare/fun',
        '/game/choose-goblet',
        '/game/unlucky-box',
        '/blog',
        '/contact',
        '/privacy-policy',
        '/term-of-use',
    ]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
            .map((route) => {
                return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
            })
            .join('\n')}
</urlset>`

    setHeader(event, 'Content-Type', 'application/xml')
    return sitemap
})
