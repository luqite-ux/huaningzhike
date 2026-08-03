/**
 * News article data layer.
 *
 * Currently no articles are published. The types and helper functions are
 * defined here so the /news and /news/[slug] routes are ready to accept real
 * Supabase data without structural changes.
 *
 * When articles are ready, replace the empty arrays and stub functions below
 * with real database queries.
 */

export interface NewsArticle {
  slug: string
  title: string
  summary: string
  /** ISO 8601 date string, e.g. "2025-06-01" */
  publishedAt: string
  /** Category label shown in the listing and detail */
  category: string
  /** Relative or absolute URL to the cover image */
  coverImage?: string
  coverImageAlt?: string
  /** Rich article body — HTML string or array of content blocks */
  body: string
  /** Related product slugs for the sidebar */
  relatedProducts?: string[]
  /** SEO meta description override (falls back to summary) */
  metaDescription?: string
}

/** All published articles, newest first.
 *  Replace with: `const { data } = await supabase.from('articles').select('*').order('published_at', { ascending: false })`
 */
import { createSupabaseClient, tenantId } from '@/lib/supabase'

type ArticleRow = Record<string, unknown>
const localized = (value: unknown) => value && typeof value === 'object' ? String((value as Record<string, unknown>).en ?? '') : ''
function mapArticle(row: ArticleRow): NewsArticle {
  return {
    slug: String(row.slug ?? ''), title: localized(row.title_i18n), summary: localized(row.excerpt_i18n),
    body: localized(row.content_i18n), publishedAt: String(row.published_at ?? row.created_at ?? ''),
    category: String(row.category ?? 'Company News'), coverImage: typeof row.featured_image === 'string' ? row.featured_image : undefined,
    coverImageAlt: localized(row.title_i18n), metaDescription: localized(row.excerpt_i18n),
    relatedProducts: Array.isArray((row.extra_data as Record<string, unknown> | null)?.relatedProducts) ? (row.extra_data as { relatedProducts: string[] }).relatedProducts : [],
  }
}

export async function getAllArticles(): Promise<NewsArticle[]> {
  const supabase = createSupabaseClient()
  if (!supabase) return []
  const { data, error } = await supabase.from('articles').select('*').eq('tenant_id', tenantId).eq('is_published', true).order('published_at', { ascending: false })
  return error ? [] : (data ?? []).map(mapArticle)
}

/** Single article by slug.
 *  Replace with: `const { data } = await supabase.from('articles').select('*').eq('slug', slug).single()`
 */
export async function getArticleBySlug(slug: string): Promise<NewsArticle | null> {
  return (await getAllArticles()).find((article) => article.slug === slug) ?? null
}

/** All slugs for generateStaticParams.
 *  Replace with: `const { data } = await supabase.from('articles').select('slug')`
 */
export async function getAllArticleSlugs(): Promise<string[]> {
  return (await getAllArticles()).map((article) => article.slug)
}

export type ArticleCategory =
  | 'Product Update'
  | 'Technical Insight'
  | 'Application Note'
  | 'Company News'
  | 'Industry'
