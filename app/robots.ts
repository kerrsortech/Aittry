import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stylr.ai'

    return {
        rules: [
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'OAI-SearchBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/'],
            },
        ],
        host: baseUrl,
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
