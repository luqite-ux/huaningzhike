import type { MetadataRoute } from 'next'
import { getAllProducts } from '@/lib/products'
import { getAllSolutions } from '@/lib/solutions'
import { getAllArticles } from '@/lib/news'
import { SITE_URL } from '@/lib/site'

const BASE_URL = SITE_URL
const CONTENT_UPDATED_AT = '2026-08-03'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const contentUpdatedAt = new Date(CONTENT_UPDATED_AT)

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                     lastModified: contentUpdatedAt, changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${BASE_URL}/products`,        lastModified: contentUpdatedAt, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${BASE_URL}/solutions`,       lastModified: contentUpdatedAt, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${BASE_URL}/customization`,   lastModified: contentUpdatedAt, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/sample-coating`,  lastModified: contentUpdatedAt, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE_URL}/about`,           lastModified: contentUpdatedAt, changeFrequency: 'yearly',   priority: 0.7 },
    { url: `${BASE_URL}/contact`,         lastModified: contentUpdatedAt, changeFrequency: 'yearly',   priority: 0.8 },
    { url: `${BASE_URL}/news`,            lastModified: contentUpdatedAt, changeFrequency: 'weekly',   priority: 0.6 },
    { url: `${BASE_URL}/faq`,             lastModified: contentUpdatedAt, changeFrequency: 'monthly',  priority: 0.6 },
    { url: `${BASE_URL}/privacy`,         lastModified: contentUpdatedAt, changeFrequency: 'yearly',   priority: 0.3 },
  ]

  // Product routes
  const products = getAllProducts()
  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: contentUpdatedAt,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  // Solution routes
  const solutions = getAllSolutions()
  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE_URL}/solutions/${s.slug}`,
    lastModified: contentUpdatedAt,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // News article routes (empty now; auto-populated when articles exist)
  const articles = await getAllArticles()
  const newsRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/news/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes, ...solutionRoutes, ...newsRoutes]
}
