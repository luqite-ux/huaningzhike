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
import { DEFAULT_LOCALE, localizedText } from '@/lib/i18n'

type ArticleRow = Record<string, unknown>
function mapArticle(row: ArticleRow, locale = DEFAULT_LOCALE): NewsArticle {
  return {
    slug: String(row.slug ?? ''), title: localizedText(row.title_i18n, locale), summary: localizedText(row.excerpt_i18n, locale),
    body: localizedText(row.content_i18n, locale), publishedAt: String(row.published_at ?? row.created_at ?? ''),
    category: String(row.category ?? 'Company News'), coverImage: typeof row.featured_image === 'string' ? row.featured_image : undefined,
    coverImageAlt: localizedText(row.title_i18n, locale), metaDescription: localizedText(row.excerpt_i18n, locale),
    relatedProducts: Array.isArray((row.extra_data as Record<string, unknown> | null)?.relatedProducts) ? (row.extra_data as { relatedProducts: string[] }).relatedProducts : [],
  }
}

export async function getAllArticles(locale = DEFAULT_LOCALE): Promise<NewsArticle[]> {
  const supabase = createSupabaseClient()
  if (!supabase) return []
  const { data, error } = await supabase.from('articles').select('*').eq('tenant_id', tenantId).eq('is_published', true).order('published_at', { ascending: false })
  return error ? [] : (data ?? []).map((row) => mapArticle(row, locale))
}

/** Single article by slug.
 *  Replace with: `const { data } = await supabase.from('articles').select('*').eq('slug', slug).single()`
 */
export async function getArticleBySlug(slug: string, locale = DEFAULT_LOCALE): Promise<NewsArticle | null> {
  return (await getAllArticles(locale)).find((article) => article.slug === slug) ?? null
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
