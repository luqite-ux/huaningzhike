import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { withPageSocial } from '@/lib/site'

export const metadata: Metadata = withPageSocial({
  title: 'About HUANING ZHIKE',
  alternates: { canonical: '/about' },
  description:
    'HUANING ZHIKE — Huaning Intelligent Technology (Hangzhou) Intelligent Equipment Manufacturing Co., Ltd. Customized PVD vacuum coating equipment and process solutions for industrial and research applications.',
}, '/about')

const CAPABILITIES = [
  {
    title: 'System Engineering',
    desc: 'End-to-end engineering of vacuum coating systems — from application requirements analysis through chamber design, source selection, pumping architecture, process control, and system integration.',
  },
  {
    title: 'Vacuum Equipment Manufacturing',
    desc: 'In-house fabrication of stainless-steel and aluminium vacuum chambers, deposition sources, substrate fixtures, and mechanical subsystems across six dedicated production lines.',
  },
  {
    title: 'Process Development & Validation',
    desc: 'A Class 100,000 process validation workshop and Class 10,000 R&D laboratory support coating process development, sample processing, and system performance validation before delivery.',
  },
  {
    title: 'Factory Acceptance Testing',
    desc: 'Every system undergoes structured factory acceptance testing — vacuum level, pumping speed, deposition rate, process parameter verification — in our Class 100,000 inspection room before shipment.',
  },
  {
    title: 'Installation & Technical Support',
    desc: 'On-site installation, commissioning, operator training, and post-delivery technical support ensure customers reach stable, reproducible process performance.',
  },
  {
    title: 'Custom Configuration',
    desc: 'All system parameters — chamber dimensions, source count and geometry, target materials, automation level, monitoring instruments, and workpiece fixtures — are configurable to customer specification.',
  },
]

const FACILITY_FACTS = [
  { value: '5,000 m²', label: 'Manufacturing Facility' },
  { value: '6', label: 'Production Lines' },
  { value: 'Class 10,000', label: 'R&D Laboratory' },
  { value: 'Class 100,000', label: 'Process Validation Workshop' },
  { value: 'Class 100,000', label: 'Inspection Room' },
  { value: '10', label: 'System Model Configurations' },
]

const MARKETS = [
  'Industrial cutting tool and wear coating manufacturers',
  'Decorative hard coating service providers',
  'Optical component and photonics manufacturers',
  'Semiconductor device research and pilot production',
  'University thin-film physics research groups',
  'National laboratories and materials science institutes',
  'Medical device surface treatment providers',
  'Automotive and precision engineering industries',
]

const EQUIPMENT_IMAGES = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/As2wX5o00gI89Tbyu2N8p-epiZDHJWaVZB5Vj6qKZH03qvxl8p4L.png',
    alt: 'HUANING ZHIKE industrial magnetron sputtering system',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/5TbgUxh1IgKXhMxYkuANk-8rvIJhCZWXDnamL5VbWlb5j73DWs1U.png',
    alt: 'HUANING ZHIKE large-chamber industrial system',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/rSAgN2qxNFIQ9NB93uSHO-5cVa1ak9FMvEt90tBwru8a2xqt2sgy.png',
    alt: 'HUANING ZHIKE laboratory research PVD platform',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* ── Header ── */}
      <div className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030B16] via-[#070F1F] to-[#050E1A]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.25)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center mt-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,168,75,0.2)] bg-[rgba(200,168,75,0.04)] mb-5">
                <span className="text-[var(--gold)] text-xs font-medium tracking-widest uppercase">About HUANING ZHIKE</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] text-balance leading-tight mb-5">
                PVD Vacuum Coating Equipment &amp; <span className="gold-gradient-text">Process Solutions</span>
              </h1>
              <p className="text-[var(--steel-light)] text-lg leading-relaxed mb-5">
                HUANING ZHIKE — operated by Huaning Intelligent Technology (Hangzhou) Intelligent Equipment Manufacturing Co., Ltd. — is a PVD vacuum coating equipment company that integrates system engineering, vacuum equipment manufacturing, process validation, and factory acceptance testing under one roof.
              </p>
              <p className="text-[var(--steel-light)] leading-relaxed">
                Our product range spans ten system configurations across industrial production and laboratory R&D segments — covering multi-arc ion plating, magnetron sputtering, electron beam evaporation, and composite dual-technology platforms. Every system is configurable to customer specification, with chamber dimensions, deposition sources, process monitoring, and automation defined to match the application and production environment.
              </p>
            </div>

            <div>
              <Image
                src="/images/logo.png"
                alt="HUANING ZHIKE — Huaning Intelligent Technology"
                width={400}
                height={120}
                className="w-full max-w-sm mx-auto h-auto object-contain"
                priority
              />
              <address className="not-italic mt-8 glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.15)] space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-[var(--gold)] shrink-0 mt-0.5" />
                  <p className="text-[var(--steel-light)] text-sm leading-relaxed">
                    No. 16 Xiken Road, Building 1, Room 102,<br />
                    Xingqiao Subdistrict, Linping District,<br />
                    Hangzhou, China
                  </p>
                </div>
                <a href="tel:+8613157107579" className="flex items-center gap-3 text-sm text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors">
                  <Phone size={15} className="text-[var(--gold)]" />
                  +86 131 5710 7579
                </a>
                <a href="mailto:huaning@huaningzhike.cn" className="flex items-center gap-3 text-sm text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors break-all">
                  <Mail size={15} className="text-[var(--gold)]" />
                  huaning@huaningzhike.cn
                </a>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* ── Facility facts ── */}
      <section aria-labelledby="facility-heading" className="py-14 bg-[#030B16]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 id="facility-heading" className="sr-only">Facility and manufacturing facts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {FACILITY_FACTS.map((fact) => (
              <div key={fact.label} className="glass-card rounded-xl p-5 text-center border border-[rgba(200,168,75,0.1)]">
                <div className="font-heading font-bold text-lg md:text-xl gold-gradient-text leading-tight">{fact.value}</div>
                <div className="text-[var(--steel)] text-xs mt-1.5 leading-tight">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core capabilities ── */}
      <section aria-labelledby="capabilities-heading" className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 id="capabilities-heading" className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Integrated Engineering &amp; Manufacturing
            </h2>
            <p className="text-[var(--steel-light)] max-w-2xl mx-auto leading-relaxed">
              HUANING ZHIKE brings together all phases of the PVD equipment development cycle — from requirements analysis and system engineering through manufacturing, process validation, and customer support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="glass-card rounded-xl p-6 border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.25)] transition-colors">
                <CheckCircle2 size={20} className="text-[var(--gold)] mb-4" aria-hidden="true" />
                <h3 className="font-heading font-semibold text-[var(--foreground)] mb-3">{cap.title}</h3>
                <p className="text-[var(--steel-light)] text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment showcase ── */}
      <section aria-labelledby="equipment-heading" className="py-14 bg-[#030B16]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 id="equipment-heading" className="font-heading text-3xl font-bold text-[var(--foreground)] mb-4">
              System Portfolio
            </h2>
            <p className="text-[var(--steel-light)] max-w-xl mx-auto leading-relaxed">
              Ten system configurations spanning industrial production and laboratory R&D — each configurable to your specific process requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {EQUIPMENT_IMAGES.map((img) => (
              <div key={img.alt} className="glass-card rounded-xl overflow-hidden border border-[rgba(200,168,75,0.1)]">
                <div className="relative h-52 bg-gradient-to-br from-[#0A1830] to-[#050E1A]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/products" className="btn-outline-gold inline-flex items-center gap-2 px-8 py-3.5 rounded text-sm">
              View All Systems
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Markets served ── */}
      <section aria-labelledby="markets-heading" className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="markets-heading" className="font-heading text-3xl font-bold text-[var(--foreground)] mb-5">
                Markets &amp; Customer Segments
              </h2>
              <p className="text-[var(--steel-light)] leading-relaxed mb-8">
                HUANING ZHIKE systems serve customers across industrial production, applied research, and advanced device fabrication disciplines — wherever precise, configurable PVD deposition capability is required.
              </p>
              <ul className="space-y-3">
                {MARKETS.map((market) => (
                  <li key={market} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-[var(--gold)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[var(--steel-light)] text-sm">{market}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl gold-border-glow p-8">
              <h3 className="font-heading text-xl font-bold text-[var(--foreground)] mb-4">
                Discuss Your Requirements
              </h3>
              <p className="text-[var(--steel-light)] leading-relaxed mb-6">
                Contact our engineering team to discuss your application, production targets, and equipment requirements. We provide detailed system configuration proposals based on your specifications.
              </p>
              <div className="space-y-3">
                <Link href="/contact?type=quote" className="btn-gold w-full flex items-center justify-center gap-2 py-3 rounded text-sm">
                  Request a Quote
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <Link href="/contact?type=process" className="btn-outline-gold w-full flex items-center justify-center gap-2 py-3 rounded text-sm">
                  Discuss Your Process
                </Link>
                <Link href="/customization" className="btn-outline-gold w-full flex items-center justify-center gap-2 py-3 rounded text-sm">
                  Custom System Configuration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
