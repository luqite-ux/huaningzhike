import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Settings2,
  Beaker,
  Layers,
  Info,
} from 'lucide-react'
import { products as fallbackProducts } from '@/lib/products'
import { fetchProductBySlug, fetchProductsData } from '@/lib/products-db'
import { ProductGallery } from '@/components/products/product-gallery'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { InquiryForm } from '@/components/inquiry-form'
import { JsonLd } from '@/components/seo/json-ld'
import { COMPANY_NAME, SITE_URL } from '@/lib/site'

/* ─── ISR ────────────────────────────────────────────────────────────────────── */
export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  return fallbackProducts.map((p) => ({ slug: p.slug }))
}

/* ─── Metadata ───────────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await fetchProductBySlug(slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.model} — ${product.name}`,
    description: product.summary.slice(0, 160),
    alternates: { canonical: `${SITE_URL}/products/${product.slug}` },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}/products/${product.slug}`,
      title: `${product.model} — ${product.name} | HUANING ZHIKE`,
      description: product.summary.slice(0, 160),
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.model} - ${product.name} | HUANING ZHIKE`,
      description: product.summary.slice(0, 160),
      images: [product.image],
    },
  }
}

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await fetchProductBySlug(slug)
  if (!product) notFound()

  const allProducts = await fetchProductsData()
  const related = product.relatedSlugs.map((relatedSlug) => allProducts.find((item) => item.slug === relatedSlug)).filter(Boolean) as typeof allProducts

  return (
    <div className="min-h-screen bg-transparent">
      <JsonLd data={[
        {
          '@context': 'https://schema.org', '@type': 'Product',
          '@id': `${SITE_URL}/products/${product.slug}#product`,
          name: product.name, model: product.model, description: product.summary,
          image: product.images, category: product.category,
          brand: { '@type': 'Brand', name: 'HUANING ZHIKE' },
          manufacturer: { '@type': 'Organization', name: COMPANY_NAME },
          additionalProperty: product.specifications.map((spec) => ({
            '@type': 'PropertyValue', name: spec.label, value: spec.value,
          })),
        },
        {
          '@context': 'https://schema.org', '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Equipment', item: `${SITE_URL}/products` },
            { '@type': 'ListItem', position: 3, name: product.name, item: `${SITE_URL}/products/${product.slug}` },
          ],
        },
      ]} />
      {/* ── Page header band ── */}
      <div className="relative overflow-hidden pt-28 pb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#f4f8ff] to-[#eef5ff]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.2)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs
            items={[
              { label: 'Equipment', href: '/products' },
              { label: product.model },
            ]}
          />
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span
              className={`text-xs font-heading font-semibold tracking-widest uppercase px-3 py-1 rounded border ${
                product.category === 'Industrial PVD Coating Equipment'
                  ? 'bg-[rgba(27,85,196,0.3)] text-[var(--steel-light)] border-[rgba(27,85,196,0.4)]'
                  : 'bg-[rgba(200,168,75,0.15)] text-[var(--gold)] border-[rgba(200,168,75,0.25)]'
              }`}
            >
              {product.category === 'Industrial PVD Coating Equipment' ? 'Industrial' : 'Lab R&D'}
            </span>
            <ChevronRight size={14} className="text-[var(--steel)]" aria-hidden="true" />
            <span className="text-[var(--steel)] text-sm">{product.depositionProcess}</span>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-16">
          {/* ── Left: Gallery + details ── */}
          <div className="min-w-0">
            {/* Gallery */}
            <ProductGallery images={product.images} productName={product.name} />

            {/* Model / Name */}
            <div className="mt-8 mb-6">
              <div className="text-[var(--gold)] font-mono text-sm mb-2">{product.model}</div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] text-balance leading-tight">
                {product.name}
              </h1>
              <p className="mt-3 text-[var(--steel-light)] text-lg italic leading-relaxed">{product.tagline}</p>
            </div>

            <div className="section-divider mb-8" aria-hidden="true" />

            {/* Summary */}
            <section aria-labelledby="summary-heading" className="mb-10">
              <h2 id="summary-heading" className="font-heading text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                <Info size={18} className="text-[var(--gold)]" aria-hidden="true" />
                System Overview
              </h2>
              <p className="text-[var(--steel-light)] leading-relaxed">{product.summary}</p>
            </section>

            {/* Working Principle */}
            <section aria-labelledby="principle-heading" className="mb-10">
              <h2 id="principle-heading" className="font-heading text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                <Beaker size={18} className="text-[var(--gold)]" aria-hidden="true" />
                Working Principle
              </h2>
              <div className="glass-card rounded-xl p-6 border border-[rgba(27,85,196,0.2)]">
                <p className="text-[var(--steel-light)] leading-relaxed">{product.principle}</p>
              </div>
            </section>

            {/* Core Advantages */}
            <section aria-labelledby="advantages-heading" className="mb-10">
              <h2 id="advantages-heading" className="font-heading text-xl font-bold text-[var(--foreground)] mb-5 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[var(--gold)]" aria-hidden="true" />
                Core Advantages
              </h2>
              <ul className="space-y-3">
                {product.advantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-[var(--gold)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[var(--steel-light)] leading-relaxed">{adv}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Specifications */}
            <section aria-labelledby="specs-heading" className="mb-10">
              <h2 id="specs-heading" className="font-heading text-xl font-bold text-[var(--foreground)] mb-5 flex items-center gap-2">
                <Layers size={18} className="text-[var(--gold)]" aria-hidden="true" />
                Technical Specifications
              </h2>
              <div className="glass-card rounded-xl overflow-hidden border border-[rgba(200,168,75,0.12)]">
                <table className="w-full text-sm" aria-label={`${product.model} technical specifications`}>
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={`${i % 2 === 0 ? 'bg-[rgba(200,168,75,0.03)]' : ''} border-b border-[rgba(200,168,75,0.07)] last:border-0`}
                      >
                        <th
                          scope="row"
                          className="px-5 py-3.5 text-left text-[var(--steel-light)] font-medium w-2/5"
                        >
                          {spec.label}
                        </th>
                        <td className="px-5 py-3.5 text-[var(--foreground)] font-mono text-xs">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-[var(--steel)] italic">
                Specifications are representative. Final system parameters are defined during configuration. Contact our engineering team for detailed documentation.
              </p>
            </section>

            {/* Applications */}
            <section aria-labelledby="applications-heading" className="mb-10">
              <h2 id="applications-heading" className="font-heading text-xl font-bold text-[var(--foreground)] mb-5 flex items-center gap-2">
                <Settings2 size={18} className="text-[var(--gold)]" aria-hidden="true" />
                Supported Applications
              </h2>
              <div className="flex flex-wrap gap-3">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="px-4 py-2 rounded-lg glass-card border border-[rgba(200,168,75,0.15)] text-sm text-[var(--steel-light)]"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </section>

            {/* Optional Modules */}
            {product.optionalModules.length > 0 && (
              <section aria-labelledby="modules-heading" className="mb-10">
                <h2 id="modules-heading" className="font-heading text-xl font-bold text-[var(--foreground)] mb-5">
                  Optional Modules &amp; Upgrades
                </h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {product.optionalModules.map((mod) => (
                    <li key={mod} className="flex items-start gap-2.5 text-sm text-[var(--steel-light)]">
                      <ChevronRight size={14} className="text-[var(--gold)] shrink-0 mt-0.5" aria-hidden="true" />
                      {mod}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Related Systems */}
            {related.length > 0 && (
              <section aria-labelledby="related-heading" className="mb-10">
                <h2 id="related-heading" className="font-heading text-xl font-bold text-[var(--foreground)] mb-6">
                  Related Systems
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/products/${rel.slug}`}
                      className="group glass-card rounded-xl overflow-hidden border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.3)] transition-all duration-200 hover:shadow-[0_4px_24px_rgba(200,168,75,0.08)] focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                    >
                      <div className="relative h-36 bg-gradient-to-br from-white to-[#eaf3ff]">
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-[var(--gold)] font-mono text-[11px] mb-1">{rel.model}</div>
                        <p className="text-[var(--foreground)] text-sm font-semibold font-heading leading-tight">{rel.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── Right: Sticky inquiry panel ── */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="glass-card rounded-2xl gold-border-glow p-6">
              <h2 className="font-heading text-xl font-bold text-[var(--foreground)] mb-1">
                Inquire About This System
              </h2>
              <p className="text-[var(--steel)] text-sm mb-6">
                Tell us about your process requirements and we will respond with a detailed system configuration proposal.
              </p>

              {/* Quick action links */}
              <div className="flex flex-col gap-2.5 mb-6">
                <Link
                  href={`/contact?type=quote&product=${encodeURIComponent(product.model)}`}
                  className="btn-gold flex items-center justify-center gap-2 py-3 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
                >
                  Request a Quote
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href={`/contact?type=process&product=${encodeURIComponent(product.model)}`}
                  className="btn-outline-gold flex items-center justify-center gap-2 py-3 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                >
                  Discuss Your Process
                </Link>
              </div>

              <div className="section-divider mb-6" aria-hidden="true" />

              {/* Mini inquiry form */}
              <InquiryForm
                defaultInquiryType="Product-Specific Inquiry"
                defaultProductModel={`${product.model} — ${product.name}`}
                compact
              />
            </div>

            {/* System quick facts */}
            <div className="mt-6 glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.12)]">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-[var(--gold)] mb-4">
                System Facts
              </h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-[var(--steel)] text-sm">Model</dt>
                  <dd className="text-[var(--foreground)] text-sm font-mono">{product.model}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--steel)] text-sm">Category</dt>
                  <dd className="text-[var(--foreground)] text-sm text-right">
                    {product.category === 'Industrial PVD Coating Equipment' ? 'Industrial' : 'Lab R&D'}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--steel)] text-sm">Process</dt>
                  <dd className="text-[var(--foreground)] text-sm text-right">{product.depositionProcess}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
