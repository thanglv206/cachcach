import { defineCachedEventHandler } from '#imports'

export default defineCachedEventHandler(async (event) => {
    setResponseHeader(event, 'Cache-Control', 'public, max-age=86400, stale-while-revalidate=60')
    // 1️⃣ Fetch Google Sheet for categories
    const SHEET_ID = '1silJoiLhR-assSusygKbuzxYWSUZ3uabBc58Cqf_ErE'
    const SHEET_NAME = 'Categories'

    const sheetUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`

    try {
        const sheetRes = await fetch(sheetUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
        })

        const sheetText = await sheetRes.text()
        const sheetJson = JSON.parse(sheetText.substring(47).slice(0, -2))

        const categories = sheetJson.table.rows.slice(1).map((r: any) => ({
            slug: r.c[0]?.v,
            title: r.c[1]?.v,
        }))

        return {
            data: categories,
        }
    } catch (error: any) {
        console.error('Error fetching blog categories:', error)
        return {
            data: [],
            error: 'Failed to fetch categories',
        }
    }
}, {
    maxAge: 60 * 60 * 24, // 1 day
    name: 'blogCategories',
})
