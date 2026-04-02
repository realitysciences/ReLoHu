import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/intake', '/payment-success', '/founding-cohort'],
    },
    sitemap: 'https://relohu.com/sitemap.xml',
  }
}
