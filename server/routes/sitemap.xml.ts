import { defineCachedEventHandler, setHeader } from '#imports'

export default defineCachedEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const host = getRequestHost(event)
    const protocol = getRequestProtocol(event)
    const baseUrl = config.public.siteUrl || `${protocol}://${host}`

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
        '/game/spin-bottle',
        '/blog',
        '/contact',
        '/privacy-policy',
        '/term-of-use',
    ]

    let dynamicRoutes: string[] = []

    try {
        const SHEET_ID = '1silJoiLhR-assSusygKbuzxYWSUZ3uabBc58Cqf_ErE'
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Blogs`

        const res = await fetch(url)
        const text = await res.text()
        const jsonStr = text.substring(47).slice(0, -2)
        const json = JSON.parse(jsonStr)

        dynamicRoutes = json.table.rows
            .filter((r: any) => r.c[7]?.v === true) // published
            .map((r: any) => `/blog/${r.c[0]?.v}`) // slug
    } catch (error) {
        console.error('Error fetching blogs for sitemap:', error)
    }

    const allRoutes = [...staticRoutes, ...dynamicRoutes]

    const urls = allRoutes
        .map((route) => {
            const isHome = route === '/'
            const priority = isHome ? '1.0' : (route.startsWith('/game/') || route.startsWith('/blog/') ? '0.7' : '0.8')
            return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${priority}</priority>
  </url>`
        })
        .join('\n')

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

    setHeader(event, 'Content-Type', 'application/xml')
    setHeader(event, 'Cache-Control', 'public, max-age=86400, stale-while-revalidate=60')
    return sitemap
}, {
    maxAge: 60 * 60 * 24, // 1 day
    name: 'sitemap',
})
