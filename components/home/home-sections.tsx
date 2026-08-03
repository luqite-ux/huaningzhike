'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Layers, Cpu, Aperture, FlaskConical, Settings2, CheckCircle2 } from 'lucide-react'
import { products } from '@/lib/products'

/* ─── Scroll-reveal hook ─────────────────────────────────────────────────── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ─── Section wrapper with reveal ───────────────────────────────────────── */
function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  )
}

/* ─── Section header ─────────────────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,168,75,0.2)] bg-[rgba(200,168,75,0.04)] mb-4">
        <span className="text-[var(--gold)] text-xs font-medium tracking-widest uppercase">{eyebrow}</span>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] text-balance leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--steel-light)] max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   1. PRODUCT LINE GATEWAYS
══════════════════════════════════════════════════════════════════════════ */
export function ProductLineGateways() {
  return (
    <section id="product-lines" aria-labelledby="product-lines-heading" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#f4f8ff] to-[#eef5ff]" aria-hidden="true" />
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        <RevealSection>
          <SectionHeader
            eyebrow="Equipment Platform"
            title={<>Two Product Lines, One Engineering Standard</>}
            subtitle="Whether you operate high-volume production lines or cutting-edge research laboratories, HUANING ZHIKE provides the right PVD system architecture."
          />
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              label: 'Industrial',
              title: 'Industrial PVD Coating Systems',
              desc: 'High-throughput vacuum coating platforms engineered for sustained batch production. Multi-arc, sputtering, electron beam, and composite configurations for tool & die, decorative hard coating, optical, and semiconductor production environments.',
              href: '/products?line=industrial',
              image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/As2wX5o00gI89Tbyu2N8p-epiZDHJWaVZB5Vj6qKZH03qvxl8p4L.png',
              models: ['HN-MA-001', 'HN-MS-002', 'HN-MA-MS-003', 'HN-EB-004', 'HN-MS-EB-005'],
            },
            {
              label: 'Laboratory',
              title: 'Lab R&D PVD Platforms',
              desc: 'Compact, configurable coating systems for university laboratories, research institutes, and industrial R&D centers. Identical deposition physics at research scale, with accessible chamber designs that promote rapid process iteration.',
              href: '/products?line=lab',
              image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/rSAgN2qxNFIQ9NB93uSHO-5cVa1ak9FMvEt90tBwru8a2xqt2sgy.png',
              models: ['HN-MA-R-006', 'HN-MS-R-007', 'HN-MA-MS-R-008', 'HN-EB-R-009', 'HN-MS-EB-R-010'],
            },
          ].map((line, i) => (
            <RevealSection key={line.label}>
              <Link
                href={line.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl gold-border-glow glass-card transition-all duration-300 hover:border-[rgba(200,168,75,0.4)] hover:shadow-[0_8px_48px_rgba(200,168,75,0.1)] focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                aria-label={`View ${line.title}`}
              >
                {/* Image area */}
                <div className="relative h-64 bg-gradient-to-br from-white to-[#eaf3ff] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,85,196,0.15)_0%,transparent_70%)]" aria-hidden="true" />
                  <Image
                    src={line.image}
                    alt={line.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text area */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="inline-block text-[var(--gold)] text-xs font-heading font-semibold tracking-widest uppercase mb-3 px-2.5 py-1 rounded border border-[rgba(200,168,75,0.2)]">
                    {line.label}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--foreground)] mb-3">{line.title}</h3>
                  <p className="text-[var(--steel-light)] text-sm leading-relaxed mb-5">{line.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {line.models.map((m) => (
                      <span key={m} className="text-xs px-2 py-0.5 rounded bg-[rgba(200,168,75,0.07)] text-[var(--gold)] border border-[rgba(200,168,75,0.12)] font-mono">
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--gold)] text-sm font-heading font-semibold uppercase tracking-wide group-hover:gap-2.5 transition-all">
                    View Systems
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   2. FEATURED EQUIPMENT CARDS
══════════════════════════════════════════════════════════════════════════ */
export function FeaturedEquipment() {
  return (
    <section aria-labelledby="featured-equipment-heading" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#f4f8ff]" aria-hidden="true" />
      <div className="absolute inset-0 tech-grid-bg opacity-40" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        <RevealSection>
          <SectionHeader
            eyebrow="Product Catalog"
            title={<>Ten Precision <span className="gold-gradient-text">PVD Systems</span></>}
            subtitle="From compact laboratory platforms to full-scale industrial production equipment — every HUANING ZHIKE system is configurable to your process requirements."
          />
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <RevealSection key={product.slug}>
              <article className="group glass-card rounded-xl overflow-hidden border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.3)] transition-all duration-300 hover:shadow-[0_4px_32px_rgba(200,168,75,0.08)] flex flex-col h-full">
                {/* Image */}
                <div className="relative h-44 bg-gradient-to-br from-white to-[#eaf3ff] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,85,196,0.12)_0%,transparent_70%)]" aria-hidden="true" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-heading font-semibold tracking-widest uppercase px-2 py-0.5 rounded ${
                      product.category === 'Industrial PVD Coating Equipment'
                        ? 'bg-[rgba(27,85,196,0.4)] text-[var(--steel-light)] border border-[rgba(27,85,196,0.3)]'
                        : 'bg-[rgba(200,168,75,0.15)] text-[var(--gold)] border border-[rgba(200,168,75,0.2)]'
                    }`}>
                      {product.category === 'Industrial PVD Coating Equipment' ? 'Industrial' : 'Lab R&D'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-4">
                  <div className="text-[var(--gold)] text-[11px] font-mono mb-1">{product.model}</div>
                  <h3 className="font-heading text-sm font-semibold text-[var(--foreground)] leading-tight mb-2">{product.name}</h3>
                  <p className="text-[var(--steel)] text-xs leading-relaxed mb-4 flex-1">{product.tagline}</p>

                  <div className="flex flex-col gap-2 mt-auto">
                    <Link
                      href={`/products/${product.slug}`}
                      className="btn-outline-gold flex items-center justify-center gap-1.5 py-2 rounded text-xs focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                    >
                      View System
                    </Link>
                    <Link
                      href={`/contact?type=quote&product=${product.model}`}
                      className="btn-gold flex items-center justify-center gap-1.5 py-2 rounded text-xs focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>

        <RevealSection>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="btn-outline-gold inline-flex items-center gap-2 px-8 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
            >
              View All Equipment &amp; Specifications
              <ArrowRight size={15} />
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   3. DEPOSITION TECHNOLOGY MATRIX
══════════════════════════════════════════════════════════════════════════ */
const TECHNOLOGIES = [
  {
    name: 'Multi-arc Ion Plating',
    abbrev: 'AIP',
    desc: 'Sustains arc discharges on metallic cathodes to generate highly ionized plasma. High deposition rate, excellent film adhesion, and superior coating density make this the dominant method for industrial hard coating and decorative PVD production.',
    properties: ['High ionization ratio (≥ 70%)', 'Dense, adherent films', 'High deposition rate', 'Compatible with TiN, TiAlN, CrN, DLC'],
    products: ['HN-MA-001', 'HN-MA-R-006'],
    color: 'from-[#1B55C4]/20 to-transparent',
    borderColor: 'border-[rgba(27,85,196,0.3)]',
    accentColor: 'text-[var(--blue-light)]',
  },
  {
    name: 'Magnetron Sputtering',
    abbrev: 'MS',
    desc: 'Plasma confined by crossed electric and magnetic fields enables high-rate sputtering of metallic, ceramic, and compound targets. DC, RF, and pulsed-DC power modes, and reactive atmosphere capability, support deposition of nitrides, oxides, and functional films.',
    properties: ['Excellent film uniformity', 'Low substrate thermal load', 'Wide target material range', 'DC / RF / Pulsed-DC modes'],
    products: ['HN-MS-002', 'HN-MS-R-007'],
    color: 'from-[#C8A84B]/10 to-transparent',
    borderColor: 'border-[rgba(200,168,75,0.25)]',
    accentColor: 'text-[var(--gold)]',
  },
  {
    name: 'Electron Beam Evaporation',
    abbrev: 'EBE',
    desc: 'A focused, magnetically deflected electron beam heats and evaporates source materials in a cooled copper hearth. Preferred for high-purity optical and semiconductor thin-film deposition of refractory metals and dielectric oxides.',
    properties: ['Ultra-high purity deposition', 'Multi-pocket rotating hearth', 'In-situ QCM rate control', 'Ion-assist (IAD) compatible'],
    products: ['HN-EB-004', 'HN-EB-R-009'],
    color: 'from-[#3A7AF5]/15 to-transparent',
    borderColor: 'border-[rgba(58,122,245,0.3)]',
    accentColor: 'text-[var(--blue-light)]',
  },
  {
    name: 'Integrated Composite Systems',
    abbrev: 'ICS',
    desc: 'Dual-technology chambers integrate two deposition methods — arc + sputtering or sputtering + e-beam — within a single vacuum enclosure. Sequential or simultaneous operation enables multilayer coating architectures, graded interfaces, and DLC composite structures without air breaks.',
    properties: ['Single-vacuum multi-process', 'Graded interlayer capability', 'Wider composition space', 'Full PLC recipe integration'],
    products: ['HN-MA-MS-003', 'HN-MS-EB-005', 'HN-MA-MS-R-008', 'HN-MS-EB-R-010'],
    color: 'from-[#8B6E1E]/15 to-transparent',
    borderColor: 'border-[rgba(200,168,75,0.25)]',
    accentColor: 'text-[var(--gold)]',
  },
]

export function DepositionTechnologyMatrix() {
  return (
    <section aria-labelledby="tech-matrix-heading" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fbff] to-[#edf4ff]" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        <RevealSection>
          <SectionHeader
            eyebrow="Deposition Technologies"
            title={<>Four Core PVD <span className="gold-gradient-text">Deposition Processes</span></>}
            subtitle="Each deposition method carries distinct physical mechanisms, process windows, and film property profiles. HUANING ZHIKE systems span the full range of industrial and research PVD techniques."
          />
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-5">
          {TECHNOLOGIES.map((tech) => (
            <RevealSection key={tech.abbrev}>
              <div className={`glass-card rounded-xl p-6 border ${tech.borderColor} hover:shadow-[0_4px_32px_rgba(200,168,75,0.07)] transition-all duration-300`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`font-mono text-xs font-semibold tracking-widest ${tech.accentColor} mb-1`}>{tech.abbrev}</div>
                    <h3 className="font-heading text-xl font-bold text-[var(--foreground)]">{tech.name}</h3>
                  </div>
                  <div className={`shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center border ${tech.borderColor}`}>
                    <span className={`font-heading font-bold text-sm ${tech.accentColor}`}>{tech.abbrev}</span>
                  </div>
                </div>
                <p className="text-[var(--steel-light)] text-sm leading-relaxed mb-5">{tech.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {tech.properties.map((prop) => (
                    <li key={prop} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={13} className={tech.accentColor} aria-hidden="true" />
                      <span className="text-[var(--foreground)]">{prop}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {tech.products.map((model) => (
                    <span key={model} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[rgba(200,168,75,0.06)] text-[var(--gold)] border border-[rgba(200,168,75,0.12)]">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   4. SOLUTION PATHWAYS
══════════════════════════════════════════════════════════════════════════ */
const SOLUTIONS = [
  {
    slug: 'optical-coatings',
    icon: Aperture,
    title: 'Optical Coatings',
    desc: 'AR, HR, bandpass, beamsplitter, and specialty filter coatings across UV, visible, and infrared spectra. E-beam evaporation and magnetron sputtering platforms with optical monitoring.',
    tags: ['Anti-Reflection', 'High-Reflection Mirrors', 'Bandpass Filters', 'ITO/TCO'],
    image: 'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-eb-004/01.jpg',
  },
  {
    slug: 'dlc-wear-coatings',
    icon: Layers,
    title: 'DLC & Wear-Resistant Coatings',
    desc: 'TiN, TiAlN, CrN, AlTiN, and DLC coatings for cutting tools, forming dies, medical devices, and tribological components. High-throughput arc and composite platforms.',
    tags: ['Cutting Tools', 'DLC Films', 'Die & Mold', 'Automotive'],
    image: 'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ma-001/01.png',
  },
  {
    slug: 'semiconductor-thin-films',
    icon: Cpu,
    title: 'Semiconductor Thin Films',
    desc: 'Metal contacts, barrier layers, transparent conductors, piezoelectric, and high-k dielectric films for device fabrication, MEMS, and power electronics research.',
    tags: ['Metal Contacts', 'TCO Films', 'Piezoelectric', 'Gate Oxides'],
    image: 'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-002/01.png',
  },
  {
    slug: 'research-platforms',
    icon: FlaskConical,
    title: 'Research Platforms',
    desc: 'Fully configurable laboratory PVD systems for universities, research institutes, and advanced materials R&D. CF-flange compatible chambers with analytical instrument integration.',
    tags: ['Materials Science', 'Process Development', 'University Labs', 'Scale-up Studies'],
    image: 'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-r-007/01.png',
  },
]

export function SolutionPathways() {
  return (
    <section aria-labelledby="solutions-heading" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#f4f8ff]" aria-hidden="true" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.25)] to-transparent" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        <RevealSection>
          <SectionHeader
            eyebrow="Application Solutions"
            title={<>Coating Solutions for <span className="gold-gradient-text">Every Discipline</span></>}
            subtitle="HUANING ZHIKE systems and process knowledge span the key application domains of industrial PVD coating."
          />
        </RevealSection>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {SOLUTIONS.map((sol) => {
            const Icon = sol.icon
            return (
              <RevealSection key={sol.slug}>
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="group glass-card rounded-xl overflow-hidden border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.3)] transition-all duration-300 flex flex-col focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                  aria-label={`View ${sol.title} solutions`}
                >
                  <div className="relative h-48 bg-white overflow-hidden border-b border-[#e5edf7]">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 p-2 shadow-sm ring-1 ring-[#dbe6f3]">
                      <Icon size={20} className="text-[var(--gold)]" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-heading text-base font-bold text-[var(--foreground)] mb-2">{sol.title}</h3>
                    <p className="text-[var(--steel)] text-xs leading-relaxed mb-4 flex-1">{sol.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {sol.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(200,168,75,0.06)] text-[var(--steel-light)] border border-[rgba(200,168,75,0.1)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[var(--gold)] text-xs font-heading font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                      Explore Solution <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </RevealSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   5. FACILITY FACTS
══════════════════════════════════════════════════════════════════════════ */
const FACILITY_FACTS = [
  { value: '5,000 m²', label: 'Manufacturing Facility', detail: 'Modern production campus in Hangzhou, China' },
  { value: '6',        label: 'Production Lines',      detail: 'Dedicated assembly, wiring, and commissioning lines' },
  { value: 'Class 10,000', label: 'R&D Laboratory',   detail: 'ISO Class 7 cleanroom for process development' },
  { value: 'Class 100,000', label: 'Process Validation Workshop', detail: 'ISO Class 8 environment for coating trials and validation' },
  { value: 'Class 100,000', label: 'Inspection Room',  detail: 'Controlled environment for equipment acceptance testing' },
]

export function FacilityFacts() {
  return (
    <section aria-labelledby="facility-heading" className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f9ff] via-[#fffdf7] to-[#eef5ff]" aria-hidden="true" />
      <div className="absolute inset-0 tech-grid-bg opacity-30" aria-hidden="true" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.2)] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.2)] to-transparent" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        <RevealSection>
          <div className="text-center mb-10">
            <h2 id="facility-heading" className="font-heading text-2xl md:text-3xl font-bold text-[var(--foreground)] text-balance">
              Supported by <span className="gold-gradient-text">Purpose-Built Infrastructure</span>
            </h2>
            <p className="mt-3 text-[var(--steel-light)] max-w-xl mx-auto text-sm">
              HUANING ZHIKE integrates system engineering, precision manufacturing, process validation, and equipment testing under one roof.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {FACILITY_FACTS.map((fact) => (
            <RevealSection key={fact.label}>
              <div className="glass-card rounded-xl p-5 text-center gold-border-glow">
                <div className="font-heading text-xl md:text-2xl font-bold gold-gradient-text mb-1">{fact.value}</div>
                <div className="text-[var(--foreground)] text-sm font-semibold font-heading mb-1">{fact.label}</div>
                <div className="text-[var(--steel)] text-xs leading-relaxed">{fact.detail}</div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   6. CUSTOM PROJECT PROCESS
══════════════════════════════════════════════════════════════════════════ */
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Requirements Analysis',
    desc: 'Our engineers review your substrate geometry, coating specification, production volumes, and facility constraints to define system requirements.',
    icon: Settings2,
  },
  {
    step: '02',
    title: 'System Engineering',
    desc: 'Chamber dimensions, deposition source configuration, target layout, pumping stack, controls architecture, and options are specified and documented.',
    icon: Cpu,
  },
  {
    step: '03',
    title: 'Sample Validation',
    desc: 'When applicable, representative workpieces are coated in our Class 10,000 R&D laboratory to validate the process before system build.',
    icon: FlaskConical,
  },
  {
    step: '04',
    title: 'Manufacturing & Assembly',
    desc: 'Vacuum chambers, mechanical assemblies, electrical systems, and control panels are fabricated and assembled across our six dedicated production lines.',
    icon: Settings2,
  },
  {
    step: '05',
    title: 'Factory Acceptance Testing',
    desc: 'Completed systems undergo full vacuum performance, electrical safety, process parameter, and recipe verification in our controlled inspection facility.',
    icon: CheckCircle2,
  },
  {
    step: '06',
    title: 'Installation & Technical Support',
    desc: 'On-site installation, commissioning, operator training, and ongoing process support are provided by our technical team.',
    icon: Layers,
  },
]

export function CustomProjectProcess() {
  return (
    <section aria-labelledby="process-heading" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-transparent" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        <RevealSection>
          <SectionHeader
            eyebrow="How We Work"
            title={<>From Requirement to <span className="gold-gradient-text">Running System</span></>}
            subtitle="Every HUANING ZHIKE system follows a structured engineering process from first contact through to on-site commissioning and process support."
          />
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <RevealSection key={step.step}>
                <div className="glass-card rounded-xl p-6 border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.25)] transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[rgba(200,168,75,0.15)] to-[rgba(200,168,75,0.05)] border border-[rgba(200,168,75,0.2)] flex items-center justify-center">
                      <Icon size={18} className="text-[var(--gold)]" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-3xl font-bold text-[var(--foreground)]/10">{step.step}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-[var(--foreground)] mb-2">{step.title}</h3>
                  <p className="text-[var(--steel)] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </RevealSection>
            )
          })}
        </div>

        <RevealSection>
          <div className="mt-12 text-center">
            <Link
              href="/customization"
              className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
            >
              Learn About Custom Systems
              <ArrowRight size={15} />
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   7. INQUIRY CTA SECTION
══════════════════════════════════════════════════════════════════════════ */
export function InquiryCtaSection() {
  return (
    <section aria-labelledby="inquiry-cta-heading" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#edf5ff] via-[#fffdf7] to-[#e8f2ff]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(200,168,75,0.07)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.4)] to-transparent" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 text-center">
        <RevealSection>
          <h2 id="inquiry-cta-heading" className="font-heading text-3xl md:text-4xl xl:text-5xl font-bold text-balance text-[var(--foreground)] mb-5">
            Ready to Specify Your <span className="gold-gradient-text">PVD System?</span>
          </h2>
          <p className="text-[var(--steel-light)] max-w-2xl mx-auto leading-relaxed mb-10">
            Contact our engineering team with your application, substrate, coating specification, and production requirements. We will respond with equipment recommendations and a preliminary system proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=quote"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact?type=process"
              className="btn-outline-gold inline-flex items-center gap-2 px-8 py-4 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
            >
              Discuss Your Process
            </Link>
            <Link
              href="/sample-coating"
              className="btn-outline-gold inline-flex items-center gap-2 px-8 py-4 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
            >
              Send Your Samples
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
