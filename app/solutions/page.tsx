import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Aperture, Layers, Cpu, FlaskConical } from 'lucide-react'
import { solutions } from '@/lib/solutions'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { withPageSocial } from '@/lib/site'

export const metadata: Metadata = withPageSocial({
  title: 'Coating Solutions',
  alternates: { canonical: '/solutions' },
  description:
    'HUANING ZHIKE PVD coating solutions for optical thin films, DLC and wear-resistant coatings, semiconductor device fabrication, and laboratory research platforms.',
}, '/solutions')

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Aperture,
  Layers,
  Cpu,
  FlaskConical,
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#050E1A]">
      {/* Page header */}
      <div className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030B16] via-[#070F1F] to-[#050E1A]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.25)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs items={[{ label: 'Solutions' }]} />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mt-4 mb-4 text-balance">
            Coating <span className="gold-gradient-text">Solutions</span>
          </h1>
          <p className="text-[var(--steel-light)] max-w-2xl text-lg leading-relaxed">
            HUANING ZHIKE PVD systems and process knowledge address the full range of industrial and research thin-film disciplines — from high-volume hard coating production to precision optical stacks and advanced semiconductor films.
          </p>
        </div>
      </div>

      {/* Solutions grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => {
            const Icon = ICONS[solution.icon] ?? FlaskConical
            return (
              <article
                key={solution.slug}
                className="group glass-card rounded-2xl overflow-hidden border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.3)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(200,168,75,0.08)] flex flex-col"
              >
                {/* Hero image */}
                <div className="relative h-60 bg-gradient-to-br from-[#0A1830] to-[#050E1A] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,85,196,0.18)_0%,transparent_70%)]" aria-hidden="true" />
                  <Image
                    src={solution.heroImage}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830]/60 to-transparent pointer-events-none" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-7">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-lg glass-card-blue flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[var(--gold)]" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl font-bold text-[var(--foreground)]">{solution.title}</h2>
                      <p className="text-[var(--steel)] text-sm mt-0.5">{solution.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[var(--steel-light)] text-sm leading-relaxed mb-5 flex-1">
                    {solution.description}
                  </p>

                  {/* Key applications preview */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {solution.applications.slice(0, 4).map((app) => (
                      <span
                        key={app.name}
                        className="text-[10px] font-medium uppercase tracking-wide px-2 py-1 rounded bg-[rgba(200,168,75,0.06)] text-[var(--steel)] border border-[rgba(200,168,75,0.1)]"
                      >
                        {app.name}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="btn-outline-gold flex items-center justify-center gap-2 py-3 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                    aria-label={`Explore ${solution.title} solution`}
                  >
                    Explore Solution
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* Inquiry CTA */}
        <div className="mt-20 glass-card rounded-2xl gold-border-glow p-8 md:p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4 text-balance">
            Need a Solution Tailored to Your Process?
          </h2>
          <p className="text-[var(--steel-light)] max-w-xl mx-auto leading-relaxed mb-8">
            Our engineering team can review your substrate, coating requirements, and production targets to recommend the right system architecture and deposition process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?type=process" className="btn-gold px-8 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]">
              Discuss Your Process
            </Link>
            <Link href="/products" className="btn-outline-gold px-8 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]">
              Browse Equipment
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
