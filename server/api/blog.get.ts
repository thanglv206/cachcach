import { defineCachedEventHandler, getQuery, createError } from '#imports'

export default defineCachedEventHandler(async (event) => {
    setResponseHeader(event, 'Cache-Control', 'public, max-age=86400, stale-while-revalidate=60')
    const { slug } = getQuery(event)

    if (!slug) {
        throw createError({ statusCode: 400, statusMessage: 'Missing slug' })
    }

    // 1️⃣ Fetch Google Sheet for metadata
    const SHEET_ID = '1silJoiLhR-assSusygKbuzxYWSUZ3uabBc58Cqf_ErE'
    const SHEET_NAME = 'Blogs'

    const sheetUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`

    try {
        const sheetRes = await fetch(sheetUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
        })

        const sheetText = await sheetRes.text()
        const sheetJson = JSON.parse(sheetText.substring(47).slice(0, -2))

        const rows = sheetJson.table.rows.map((r: any) => ({
            slug: r.c[0]?.v,
            title: r.c[1]?.v,
            category: r.c[2]?.v,
            categoryName: r.c[3]?.v,
            tag: r.c[3]?.v?.split(',')[0]?.trim() || 'TIN TỨC',
            docId: r.c[4]?.v,
            thumbnail: r.c[5]?.v,
            image: r.c[5]?.v,
            description: r.c[6]?.v,
            summary: r.c[6]?.v,
            published: r.c[7]?.v,
            date: r.c[8]?.f || r.c[8]?.v,
        }))

        const post = rows.find((p: any) => p.slug === slug && p.published)

        if (!post) {
            throw createError({ statusCode: 404, statusMessage: 'Post not found' })
        }

        // 2️⃣ Fetch Google Docs content as HTML
        const docUrl = `https://docs.google.com/document/d/${post.docId}/export?format=html`

        const docRes = await fetch(docUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
        })

        if (!docRes.ok) {
            console.error(`Failed to fetch doc: ${docRes.status} ${docRes.statusText}`)
            throw createError({ statusCode: 500, statusMessage: 'Cannot fetch doc content' })
        }

        let html = await docRes.text()

        // Optional: Clean up Google Docs HTML wrapper
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
        if (bodyMatch) {
            html = bodyMatch[1]
        }

        return {
            ...post,
            content: html,
        }
    } catch (error: any) {
        if (error.statusCode) throw error
        console.error('Error fetching blog detail:', error)
        throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' })
    }
}, {
    maxAge: 60 * 60 * 24, // 1 day
    name: 'blogDetail',
    getKey: (event) => {
        const query = getQuery(event)
        return `blog-detail-${query.slug}`
    }
})
