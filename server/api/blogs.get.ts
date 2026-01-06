import { defineCachedEventHandler, getQuery } from '#imports'

export default defineCachedEventHandler(async (event) => {
    const query = getQuery(event)

    const page = Number(query.page || 1)
    const limit = Number(query.limit || 10)
    const category = query.category

    // Replace with your actual Google Sheet ID
    const SHEET_ID = '1PEiuj_ut0A3tcYAPhC8MrsXGJ280jzymlCotrDBnPVI' // Use a placeholder or provided ID
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Blogs`

    try {
        const res = await fetch(url)
        const text = await res.text()

        // Google Sheets JSON response starts with '/* O_o */\ngoogle.visualization.Query.setResponse(' and ends with ');'
        const jsonStr = text.substring(47).slice(0, -2)
        const json = JSON.parse(jsonStr)

        let posts = json.table.rows
            .filter((r: any) => r.c[6]?.v === true) // Assuming column 7 is 'published' boolean
            .map((r: any) => ({
                slug: r.c[0]?.v,
                title: r.c[1]?.v,
                category: r.c[2]?.v,
                docId: r.c[3]?.v,
                thumbnail: r.c[4]?.v,
                description: r.c[5]?.v,
                // Map common properties for UI consistency
                id: r.c[0]?.v, // Use slug as id
                tag: r.c[2]?.v, // Use category as tag
                summary: r.c[5]?.v,
                image: r.c[4]?.v,
                date: r.c[7]?.f // Google Sheets might not have date, or we map it if available
            }))

        if (category && category !== 'all') {
            posts = posts.filter((p: any) => p.category === category)
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
})
