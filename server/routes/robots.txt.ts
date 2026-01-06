import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
    const host = getRequestHost(event)
    const protocol = getRequestProtocol(event)
    const baseUrl = `${protocol}://${host}`

    const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`

    setHeader(event, 'Content-Type', 'text/plain')
    return robots
})
