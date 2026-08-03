import type { Metadata } from 'next'
import Link from 'next/link'
import { Rss, ArrowRight, BookOpen } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { getAllArticles } from '@/lib/news'
import { withPageSocial } from '@/lib/site'

export const metadata: Metadata = withPageSocial({
  title: 'News & Updates',
  alternates: { canonical: '/news' },
  description:
    'Latest product releases, technical insights, and company updates from HUANING ZHIKE — PVD vacuum coating equipment and process solutions.',
}, '/news')

export const revalidate = 60

const CATEGORIES = [
  'Product Update',
  'Technical Insight',
  'Application Note',
  'Company News',
]

export default async function NewsPage() {
  const articles = await getAllArticles()
  const hasArticles = articles.length > 0

  return (
    <div className="min-h-screen bg-transparent">
      {/* ── Page header ── */}
      <div className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#f4f8ff] to-[#eef5ff]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" aria-hidden="true" />
        <div
          className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #1B55C4 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.25)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs items={[{ label: 'News & Updates' }]} />

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end mt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,168,75,0.2)] bg-[rgba(200,168,75,0.04)] mb-5">
                <Rss size={12} className="text-[var(--gold)]" aria-hidden="true" />
                <span className="text-[var(--gold)] text-xs font-medium tracking-widest uppercase">
                  Latest from HUANING ZHIKE
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] text-balance leading-tight mb-5">
                News &amp; <span className="gold-gradient-text">Updates</span>
              </h1>
              <p className="text-[var(--steel-light)] max-w-2xl text-lg leading-relaxed">
                Product releases, technical insights, application notes, and company updates from the HUANING ZHIKE engineering team.
              </p>
            </div>

            {hasArticles && (
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1.5 rounded-full text-xs text-[var(--steel-light)] border border-[rgba(200,168,75,0.12)] glass-card cursor-default"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 pb-24">
        {hasArticles ? (
          /* ── Article grid (ready for real data) ── */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="glass-card rounded-2xl border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.3)] transition-colors group overflow-hidden focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
              >
                {article.coverImage && (
                  <div className="relative h-48 bg-[#f4f8ff] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.coverImage}
                      alt={article.coverImageAlt ?? article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050E1A]/60 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-[var(--gold)] uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-[var(--steel)] text-xs">
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </span>
                  </div>
                  <h2 className="font-heading font-semibold text-[var(--foreground)] leading-snug mb-3 group-hover:text-[var(--gold)] transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-[var(--steel-light)] text-sm leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-[var(--gold)] font-medium">
                    Read article
                    <ArrowRight size={12} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* ── Intentional empty state — no fake articles ── */
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div className="glass-card rounded-2xl border border-[rgba(200,168,75,0.12)] p-14 md:p-20 text-center">
              <div className="w-16 h-16 rounded-2xl glass-card-blue flex items-center justify-center mx-auto mb-6">
                <BookOpen size={28} className="text-[var(--gold)]" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-4">
                Articles Coming Soon
              </h2>
              <p className="text-[var(--steel-light)] max-w-lg mx-auto leading-relaxed mb-8">
                We are preparing technical articles, product update announcements, and application notes. Check back here for the latest content, or contact us directly with your questions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-gold px-7 py-3 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
                >
                  Contact Us
                  <ArrowRight size={14} className="inline ml-2" aria-hidden="true" />
                </Link>
                <Link
                  href="/products"
                  className="btn-outline-gold px-7 py-3 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                >
                  Browse Equipment
                </Link>
              </div>
            </div>

            {/* ── Sidebar with suggested links ── */}
            <aside className="space-y-5">
              <div className="glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.12)]">
                <h3 className="font-heading font-semibold text-[var(--foreground)] text-sm mb-4">
                  Explore the Website
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: 'Browse all equipment', href: '/products' },
                    { label: 'Solution pathways', href: '/solutions' },
                    { label: 'Custom system configuration', href: '/customization' },
                    { label: 'Sample coating service', href: '/sample-coating' },
                    { label: 'About HUANING ZHIKE', href: '/about' },
                    { label: 'Frequently asked questions', href: '/faq' },
                  ].map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="flex items-center justify-between text-sm text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors py-1 group"
                      >
                        {label}
                        <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.12)]">
                <h3 className="font-heading font-semibold text-[var(--foreground)] text-sm mb-3">
                  Topic Areas
                </h3>
                <p className="text-[var(--steel-light)] text-xs leading-relaxed mb-4">
                  When articles are published, they will cover topics including:
                </p>
                <ul className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <li key={cat} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] opacity-60 shrink-0" aria-hidden="true" />
                      <span className="text-[var(--steel-light)] text-xs">{cat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
