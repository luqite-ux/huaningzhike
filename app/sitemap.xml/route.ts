import { getAllArticles } from '@/lib/news'
import { getAllProducts } from '@/lib/products'
import { SITE_URL } from '@/lib/site'
import { getAllSolutions } from '@/lib/solutions'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type SitemapEntry = {
  url: string
  lastModified: Date
  changeFrequency: 'monthly' | 'weekly' | 'yearly'
  priority: number
}

const CONTENT_UPDATED_AT = new Date('2026-08-03')

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function validDate(value: string) {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? CONTENT_UPDATED_AT : date
}

function renderSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((entry) => `<url>
<loc>${escapeXml(entry.url)}</loc>
<lastmod>${entry.lastModified.toISOString()}</lastmod>
<changefreq>${entry.changeFrequency}</changefreq>
<priority>${entry.priority}</priority>
</url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

export async function GET() {
  const staticRoutes: SitemapEntry[] = [
    { url: SITE_URL, lastModified: CONTENT_UPDATED_AT, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/products`, lastModified: CONTENT_UPDATED_AT, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/solutions`, lastModified: CONTENT_UPDATED_AT, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/customization`, lastModified: CONTENT_UPDATED_AT, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/sample-coating`, lastModified: CONTENT_UPDATED_AT, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: CONTENT_UPDATED_AT, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: CONTENT_UPDATED_AT, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE_URL}/news`, lastModified: CONTENT_UPDATED_AT, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/faq`, lastModified: CONTENT_UPDATED_AT, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: CONTENT_UPDATED_AT, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const productRoutes: SitemapEntry[] = getAllProducts().map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: CONTENT_UPDATED_AT,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const solutionRoutes: SitemapEntry[] = getAllSolutions().map((solution) => ({
    url: `${SITE_URL}/solutions/${solution.slug}`,
    lastModified: CONTENT_UPDATED_AT,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const articles = await getAllArticles()
  const articleRoutes: SitemapEntry[] = articles.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: validDate(article.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return new Response(renderSitemap([
    ...staticRoutes,
    ...productRoutes,
    ...solutionRoutes,
    ...articleRoutes,
  ]), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  })
}
