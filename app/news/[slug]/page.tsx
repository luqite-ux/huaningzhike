import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react'
import { getArticleBySlug, getAllArticleSlugs, getAllArticles } from '@/lib/news'
import { fetchProductBySlug } from '@/lib/products-db'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { JsonLd } from '@/components/seo/json-ld'
import { COMPANY_NAME, DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/site'

interface Props {
  params: Promise<{ slug: string }>
}

/* ── ISR — revalidate every 60 minutes ─────────────────────────────────────── */
export const revalidate = 60
export const dynamicParams = true

/* ── Static params (empty now; populated when articles exist) ─────────────── */
export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

/* ── Metadata boundary ──────────────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested news article could not be found.',
      robots: { index: false, follow: false },
    }
  }

  const description = article.metaDescription ?? article.summary
  return {
    title: article.title,
    description,
    alternates: { canonical: `${SITE_URL}/news/${slug}` },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/news/${slug}`,
      title: article.title,
      description,
      publishedTime: article.publishedAt,
      ...(article.coverImage
        ? { images: [{ url: article.coverImage, alt: article.coverImageAlt ?? article.title }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | HUANING ZHIKE`,
      description,
      images: [article.coverImage ?? DEFAULT_OG_IMAGE],
    },
  }
}

/* ── Page component ─────────────────────────────────────────────────────────── */
export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  // No article found — 404 gracefully
  if (!article) notFound()

  // Related products (resolved from slugs)
  const relatedProducts = await Promise.all(
    (article.relatedProducts ?? []).map((s) => fetchProductBySlug(s)),
  ).then((results) => results.filter(Boolean))

  // Recent articles for sidebar (excluding current)
  const recentArticles = (await getAllArticles())
    .filter((a) => a.slug !== slug)
    .slice(0, 4)

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-transparent">
      <JsonLd data={[
        {
          '@context': 'https://schema.org', '@type': 'NewsArticle',
          '@id': `${SITE_URL}/news/${article.slug}#article`,
          headline: article.title,
          description: article.metaDescription ?? article.summary,
          datePublished: article.publishedAt,
          image: [article.coverImage ?? `${SITE_URL}${DEFAULT_OG_IMAGE}`],
          mainEntityOfPage: `${SITE_URL}/news/${article.slug}`,
          author: { '@type': 'Organization', name: COMPANY_NAME },
          publisher: { '@type': 'Organization', name: COMPANY_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` } },
        },
        {
          '@context': 'https://schema.org', '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'News', item: `${SITE_URL}/news` },
            { '@type': 'ListItem', position: 3, name: article.title, item: `${SITE_URL}/news/${article.slug}` },
          ],
        },
      ]} />
      {/* ── Article header ── */}
      <div className="relative overflow-hidden pt-28 pb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#f4f8ff] to-[#eef5ff]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.2)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs
            items={[
              { label: 'News', href: '/news' },
              { label: article.title },
            ]}
          />
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-24">
        <div className="grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-12 xl:gap-16">

          {/* ── Article body ── */}
          <article aria-label={article.title}>
            {/* Cover image */}
            {article.coverImage && (
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 border border-[rgba(200,168,75,0.1)]">
                <Image
                  src={article.coverImage}
                  alt={article.coverImageAlt ?? article.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A]/40 to-transparent" aria-hidden="true" />
              </div>
            )}

            {/* Article meta */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--gold)] uppercase tracking-wide">
                  <Tag size={12} aria-hidden="true" />
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[var(--steel)]">
                  <Calendar size={12} aria-hidden="true" />
                  <time dateTime={article.publishedAt}>{formattedDate}</time>
                </span>
              </div>

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] text-balance leading-tight mb-5">
                {article.title}
              </h1>
              <p className="text-[var(--steel-light)] text-lg leading-relaxed text-pretty">
                {article.summary}
              </p>
            </header>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[rgba(200,168,75,0.3)] to-transparent mb-8" aria-hidden="true" />

            {/* Article body — rendered from stored HTML */}
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />

            {/* Back to news */}
            <div className="mt-12 pt-8 border-t border-[rgba(200,168,75,0.1)]">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)] rounded"
              >
                <ArrowLeft size={14} aria-hidden="true" />
                Back to News
              </Link>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {/* Related equipment */}
            {relatedProducts.length > 0 && (
              <div className="glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.12)]">
                <h2 className="font-heading font-semibold text-[var(--foreground)] text-sm mb-4 uppercase tracking-wide">
                  Related Equipment
                </h2>
                <ul className="space-y-3">
                  {relatedProducts.map((product) => product && (
                    <li key={product.slug}>
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex items-start gap-3 group text-sm text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)] rounded"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden glass-card-blue shrink-0">
                          <Image
                            src={product.images[0] ?? '/placeholder.svg?width=48&height=48'}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <div>
                          <span className="block font-medium text-xs text-[var(--steel)] mb-0.5">{product.model}</span>
                          <span className="leading-snug">{product.name}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recent articles */}
            {recentArticles.length > 0 && (
              <div className="glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.12)]">
                <h2 className="font-heading font-semibold text-[var(--foreground)] text-sm mb-4 uppercase tracking-wide">
                  More Articles
                </h2>
                <ul className="space-y-4">
                  {recentArticles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/news/${a.slug}`}
                        className="group focus-visible:outline-2 focus-visible:outline-[var(--gold)] rounded block"
                      >
                        <span className="text-xs text-[var(--gold)] uppercase tracking-wide">{a.category}</span>
                        <p className="text-sm text-[var(--steel-light)] group-hover:text-[var(--foreground)] transition-colors leading-snug mt-1">
                          {a.title}
                        </p>
                        <time className="text-xs text-[var(--steel)] mt-1 block" dateTime={a.publishedAt}>
                          {new Date(a.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </time>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="glass-card rounded-xl gold-border-glow p-5">
              <h3 className="font-heading font-semibold text-[var(--foreground)] text-sm mb-3">
                Discuss Your Requirements
              </h3>
              <p className="text-[var(--steel-light)] text-xs leading-relaxed mb-4">
                Our engineering team is available to discuss application requirements, system configurations, and process questions.
              </p>
              <Link
                href="/contact"
                className="btn-gold flex items-center justify-center gap-2 py-2.5 rounded text-xs w-full"
              >
                Contact Engineering
                <ArrowRight size={12} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
