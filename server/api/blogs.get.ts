import { defineCachedEventHandler, getQuery } from '#imports'

export default defineCachedEventHandler(async (event) => {
    setResponseHeader(event, 'Cache-Control', 'public, max-age=86400, stale-while-revalidate=60')
    const query = getQuery(event)

    const page = Number(query.page || 1)
    const limit = Number(query.limit || 10)
    const category = query.category

    // Replace with your actual Google Sheet ID
    const SHEET_ID = '1silJoiLhR-assSusygKbuzxYWSUZ3uabBc58Cqf_ErE' // Use a placeholder or provided ID
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Blogs`

    try {
        const res = await fetch(url)
        const text = await res.text()

        // Google Sheets JSON response starts with '/* O_o */\ngoogle.visualization.Query.setResponse(' and ends with ');'
        const jsonStr = text.substring(47).slice(0, -2)
        const json = JSON.parse(jsonStr)

        let posts = json.table.rows
            .filter((r: any) => r.c[7]?.v === true) // Assuming column 7 is 'published' boolean
            .map((r: any) => ({
                slug: r.c[0]?.v,
                title: r.c[1]?.v,
                category: r.c[2]?.v,
                categoryName: r.c[3]?.v,
                tag: r.c[3]?.v?.split(',')[0]?.trim() || 'TIN TỨC', // Use first category name as tag
                docId: r.c[4]?.v,
                thumbnail: r.c[5]?.v,
                image: r.c[5]?.v,
                description: r.c[6]?.v,
                summary: r.c[6]?.v,
                published: r.c[7]?.v,
                date: r.c[8]?.f || r.c[8]?.v,
            }))

        if (category && category !== 'all') {
            posts = posts.filter((p: any) => {
                const categories = p.category?.split(',').map((c: string) => c.trim()) || []
                return categories.includes(category)
            })
        }

        const total = posts.length
        const start = (page - 1) * limit
        const end = start + limit

        return {
            data: posts.slice(start, end),
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        }
    } catch (error) {
        console.error('Error fetching blogs:', error)
        return {
            data: [],
            pagination: {
                page: 1,
                limit: 10,
                total: 0,
                totalPages: 0,
            },
            error: 'Failed to fetch blogs'
        }
    }
}, {
    maxAge: 60 * 60 * 24, // 1 day
    name: 'blogList',
    getKey: (event) => {
        const query = getQuery(event)
        return `blog-list-${query.category || 'all'}-${query.page || 1}`
    }
})
