import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/', '/login', '/preview'],
      },
    ],
    sitemap: 'https://www.huaningzhike.com/sitemap.xml',
    host: 'https://www.huaningzhike.com',
  }
}
