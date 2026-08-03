import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, Aperture, Layers, Cpu, FlaskConical } from 'lucide-react'
import { solutions, getSolutionBySlug } from '@/lib/solutions'
import { getProductBySlug } from '@/lib/products'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { SITE_URL } from '@/lib/site'

export const revalidate = 3600

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) return { title: 'Solution Not Found' }
  return {
    title: solution.title,
    description: solution.description.slice(0, 160),
    alternates: { canonical: `${SITE_URL}/solutions/${solution.slug}` },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}/solutions/${solution.slug}`,
      title: `${solution.title} | HUANING ZHIKE`,
      description: solution.description.slice(0, 160),
      images: [{ url: solution.heroImage, alt: solution.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${solution.title} | HUANING ZHIKE`,
      description: solution.description.slice(0, 160),
      images: [solution.heroImage],
    },
  }
}

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Aperture,
  Layers,
  Cpu,
  FlaskConical,
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) notFound()

  const Icon = ICONS[solution.icon] ?? FlaskConical
  const recommendedProducts = solution.recommendedEquipment
    .map((s) => getProductBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProductBySlug>>[]

  return (
    <div className="min-h-screen bg-transparent">
      {/* ── Hero banner ── */}
      <div className="relative overflow-hidden pt-28 pb-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030B16] via-[#070F1F] to-[#050E1A]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 pb-14">
          <Breadcrumbs
            items={[
              { label: 'Solutions', href: '/solutions' },
              { label: solution.title },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-10 items-center mt-6">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl glass-card-blue flex items-center justify-center">
                  <Icon size={24} className="text-[var(--gold)]" aria-hidden="true" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,168,75,0.2)] bg-[rgba(200,168,75,0.04)]">
                  <span className="text-[var(--gold)] text-xs font-medium tracking-widest uppercase">Solution</span>
                </div>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] text-balance leading-tight mb-4">
                {solution.title}
              </h1>
              <p className="text-[var(--steel-light)] text-xl leading-relaxed mb-6">{solution.subtitle}</p>
              <p className="text-[var(--steel-light)] leading-relaxed">{solution.description}</p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/contact?type=process"
                  className="btn-gold px-7 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
                >
                  Discuss Your Process
                  <ArrowRight size={15} className="inline ml-2" aria-hidden="true" />
                </Link>
                <Link
                  href="/products"
                  className="btn-outline-gold px-7 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                >
                  Browse Equipment
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="absolute inset-8 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(27,85,196,0.2)_0%,transparent_70%)] blur-2xl" aria-hidden="true" />
              <div className="relative glass-card rounded-2xl gold-border-glow overflow-hidden">
                <div className="relative h-72 md:h-80 bg-gradient-to-br from-[#0A1830] to-[#050E1A]">
                  <Image
                    src={solution.heroImage}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-6"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.25)] to-transparent" aria-hidden="true" />
      </div>

      {/* ── Main body ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-14">
          {/* ── Left (2/3 width) ── */}
          <div className="lg:col-span-2 space-y-14">
            {/* Overview */}
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="font-heading text-2xl font-bold text-[var(--foreground)] mb-5">
                Overview
              </h2>
              <p className="text-[var(--steel-light)] leading-relaxed text-lg">{solution.overview}</p>
            </section>

            {/* Application areas */}
            <section aria-labelledby="applications-heading">
              <h2 id="applications-heading" className="font-heading text-2xl font-bold text-[var(--foreground)] mb-6">
                Application Areas
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {solution.applications.map((app) => (
                  <div
                    key={app.name}
                    className="glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.25)] transition-colors"
                  >
                    <h3 className="font-heading font-semibold text-[var(--foreground)] mb-2">{app.name}</h3>
                    <p className="text-[var(--steel)] text-sm leading-relaxed">{app.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Deposition methods */}
            <section aria-labelledby="methods-heading">
              <h2 id="methods-heading" className="font-heading text-2xl font-bold text-[var(--foreground)] mb-6">
                Applicable Deposition Methods
              </h2>
              <ul className="space-y-4">
                {solution.depositionMethods.map((method) => (
                  <li key={method} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[var(--gold)] shrink-0 mt-1" aria-hidden="true" />
                    <p className="text-[var(--steel-light)] leading-relaxed">{method}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key process considerations */}
            <section aria-labelledby="considerations-heading">
              <h2 id="considerations-heading" className="font-heading text-2xl font-bold text-[var(--foreground)] mb-6">
                Key Process Considerations
              </h2>
              <div className="glass-card rounded-xl p-6 border border-[rgba(27,85,196,0.2)]">
                <ul className="space-y-3">
                  {solution.keyConsiderations.map((kc) => (
                    <li key={kc} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0 mt-2" aria-hidden="true" />
                      <p className="text-[var(--steel-light)] leading-relaxed text-sm">{kc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* ── Right (1/3) ── */}
          <aside className="space-y-8">
            {/* Recommended equipment */}
            <div className="glass-card rounded-2xl gold-border-glow p-6">
              <h2 className="font-heading text-lg font-bold text-[var(--foreground)] mb-5">
                Recommended Systems
              </h2>
              <div className="space-y-3">
                {recommendedProducts.map((prod) => (
                  <Link
                    key={prod.slug}
                    href={`/products/${prod.slug}`}
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-[rgba(200,168,75,0.06)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                  >
                    <div className="relative w-16 h-12 rounded bg-[#0A1830] shrink-0 overflow-hidden">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="64px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[var(--gold)] font-mono text-[11px]">{prod.model}</div>
                      <div className="text-[var(--foreground)] text-xs font-semibold leading-tight truncate">{prod.name}</div>
                    </div>
                    <ArrowRight size={13} className="text-[var(--steel)] group-hover:text-[var(--gold)] transition-colors shrink-0 ml-auto" aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <Link
                href="/products"
                className="mt-4 btn-outline-gold w-full flex items-center justify-center gap-2 py-2.5 rounded text-sm"
              >
                All Equipment
              </Link>
            </div>

            {/* CTA */}
            <div className="glass-card rounded-xl p-6 border border-[rgba(200,168,75,0.15)]">
              <h3 className="font-heading font-bold text-[var(--foreground)] mb-2">Have a specific coating challenge?</h3>
              <p className="text-[var(--steel)] text-sm leading-relaxed mb-4">
                Describe your substrate, coating target, and production scale for a technical recommendation.
              </p>
              <Link href="/contact?type=process" className="btn-gold w-full flex items-center justify-center gap-2 py-3 rounded text-sm">
                Contact an Engineer
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Customization pointer */}
            <div className="glass-card rounded-xl p-6 border border-[rgba(27,85,196,0.2)]">
              <h3 className="font-heading font-bold text-[var(--foreground)] mb-2">Custom System Configuration</h3>
              <p className="text-[var(--steel)] text-sm leading-relaxed mb-4">
                All HUANING ZHIKE systems are configurable — chamber dimensions, source count, process monitoring, and automation can be specified to match your requirements.
              </p>
              <Link href="/customization" className="btn-outline-gold w-full flex items-center justify-center gap-2 py-3 rounded text-sm">
                Learn About Customization
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
