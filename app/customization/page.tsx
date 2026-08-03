import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Settings2,
  Gauge,
  FlaskConical,
  Layers,
  Cpu,
  Wrench,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { withPageSocial } from '@/lib/site'

export const metadata: Metadata = withPageSocial({
  title: 'Custom PVD System Configuration',
  alternates: { canonical: '/customization' },
  description:
    'Every HUANING ZHIKE PVD vacuum coating system is engineered to your specification — chamber dimensions, deposition source combinations, process monitoring, automation, and workpiece fixtures are all configurable.',
}, '/customization')

const DIMENSIONS = [
  {
    icon: Settings2,
    title: 'Chamber Dimensions',
    items: [
      'Cylindrical or box chamber geometries',
      'Small laboratory scale to large production volumes',
      'Custom aspect ratios for long or wide substrates',
      'Multi-compartment configurations available',
    ],
  },
  {
    icon: Layers,
    title: 'Deposition Source Combinations',
    items: [
      'Multi-arc ion plating sources (configurable count and placement)',
      'Planar or cylindrical magnetron sputtering targets',
      'Electron beam evaporation hearths (multi-pocket)',
      'Dual-technology composite: arc + sputtering or sputtering + e-beam',
    ],
  },
  {
    icon: Gauge,
    title: 'Target & Cathode Configurations',
    items: [
      'Single-element, alloy, and compound targets',
      'Circular, rectangular, and race-track target geometries',
      'Rotating cylindrical targets for high utilization efficiency',
      'Multi-material cathode/hearth arrays for sequential or co-deposition',
    ],
  },
  {
    icon: Cpu,
    title: 'Process Control & Automation',
    items: [
      'PLC-based recipe management with parameter logging',
      'Touchscreen HMI with process visualization',
      'Closed-loop mass flow control for reactive gases',
      'Optional OES closed-loop reactive gas control',
      'Remote monitoring interface for process data access',
    ],
  },
  {
    icon: Wrench,
    title: 'Workpiece Fixtures & Motion',
    items: [
      'Single-axis rotation for cylindrical parts',
      'Planetary rotation/revolution for optical and uniform coating',
      'Multi-tier batch fixtures for high-volume small parts',
      'Custom jigging for complex or irregularly shaped components',
      'Heated stage for elevated-temperature depositions',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Process Monitoring Integration',
    items: [
      'In-situ quartz crystal microbalance (QCM) for film thickness',
      'Optical broadband monitoring for optical coating control',
      'Residual gas analyzer (RGA) port',
      'RHEED / analytical instrument CF-flange ports (research systems)',
      'Film stress and temperature measurement options',
    ],
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Requirements Analysis',
    desc: 'Our engineering team reviews your substrate geometry, coating specifications, production volume targets, facility constraints, and process integration needs.',
  },
  {
    step: '02',
    title: 'System Engineering',
    desc: 'We develop a detailed system configuration proposal — chamber design, source selection, pumping architecture, electrical system, and control layout — tailored to your specification.',
  },
  {
    step: '03',
    title: 'Sample Validation',
    desc: 'Where required, representative samples can be processed in our validated process laboratory to verify film properties before equipment manufacturing begins.',
  },
  {
    step: '04',
    title: 'Manufacturing & Assembly',
    desc: 'The system is manufactured and assembled in our 5,000 m² facility across six dedicated production lines, with quality checkpoints throughout the build process.',
  },
  {
    step: '05',
    title: 'Factory Acceptance Testing',
    desc: 'Completed systems undergo performance verification testing at our facility — vacuum level, pumping speed, deposition rate, and process parameter validation — before shipment.',
  },
  {
    step: '06',
    title: 'Installation & Technical Support',
    desc: 'Our technical team supports installation, commissioning, operator training, and process startup at your facility. Ongoing technical support is available after commissioning.',
  },
]

export default function CustomizationPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* ── Header ── */}
      <div className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#f4f8ff] to-[#eef5ff]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.25)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs items={[{ label: 'Custom Systems' }]} />
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,168,75,0.2)] bg-[rgba(200,168,75,0.04)] mb-5">
                <span className="text-[var(--gold)] text-xs font-medium tracking-widest uppercase">Custom Engineering</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] text-balance leading-tight mb-5">
                Configured to Your <span className="gold-gradient-text">Exact Process</span>
              </h1>
              <p className="text-[var(--steel-light)] text-lg leading-relaxed mb-8">
                Every HUANING ZHIKE system is engineered to specification. Chamber dimensions, deposition source combinations, target configurations, automation level, workpiece fixtures, and process monitoring are all defined in consultation with your engineering team to match your coating requirements and production environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?type=process" className="btn-gold px-7 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]">
                  Start a Project Discussion
                  <ArrowRight size={15} className="inline ml-2" aria-hidden="true" />
                </Link>
                <Link href="/sample-coating" className="btn-outline-gold px-7 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]">
                  Request Sample Coating
                </Link>
              </div>
            </div>

            {/* Equipment image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-8 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(27,85,196,0.2)_0%,transparent_70%)] blur-2xl" aria-hidden="true" />
              <div className="glass-card rounded-2xl gold-border-glow overflow-hidden">
                <div className="relative h-72 bg-gradient-to-br from-white to-[#eaf3ff]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/wsKWupUDPtfRtscrWX29W-rodxdRoCKrSCHPQYtnb20FaBoMDoYy.png"
                    alt="HUANING ZHIKE customized PVD coating system"
                    fill
                    sizes="50vw"
                    className="object-contain p-6"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Configurable dimensions ── */}
      <section aria-labelledby="config-heading" className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 id="config-heading" className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              Configurable System Dimensions
            </h2>
            <p className="text-[var(--steel-light)] max-w-2xl mx-auto leading-relaxed">
              All major subsystems can be specified at the point of order. The following dimensions are routinely configured to customer requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIMENSIONS.map((dim) => {
              const Icon = dim.icon
              return (
                <div
                  key={dim.title}
                  className="glass-card rounded-xl p-6 border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.25)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg glass-card-blue flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[var(--gold)]" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-[var(--foreground)] mb-3">{dim.title}</h3>
                  <ul className="space-y-2">
                    {dim.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <ChevronRight size={13} className="text-[var(--gold)] shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-[var(--steel-light)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider mx-auto max-w-[1400px] px-4 md:px-8" aria-hidden="true" />

      {/* ── Custom project process ── */}
      <section aria-labelledby="process-heading" className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 id="process-heading" className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] text-balance mb-4">
              Custom Project Process
            </h2>
            <p className="text-[var(--steel-light)] max-w-2xl mx-auto leading-relaxed">
              From requirements analysis through factory acceptance testing to installation support — a structured engineering process for every custom system project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="glass-card rounded-xl p-6 border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.25)] transition-colors"
              >
                <div className="font-heading font-bold text-3xl gold-gradient-text mb-3">{step.step}</div>
                <h3 className="font-heading font-semibold text-[var(--foreground)] mb-3">{step.title}</h3>
                <p className="text-[var(--steel-light)] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facility facts banner ── */}
      <section aria-labelledby="facility-heading" className="py-14 bg-[#f4f8ff]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="glass-card rounded-2xl p-8 md:p-12 gold-border-glow">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 id="facility-heading" className="font-heading text-2xl font-bold text-[var(--foreground)] mb-4">
                  Manufacturing Capabilities
                </h2>
                <p className="text-[var(--steel-light)] leading-relaxed mb-6">
                  HUANING ZHIKE integrates system engineering, vacuum component manufacturing, process validation, and factory acceptance testing in a single facility — enabling tight quality control throughout the custom system manufacturing process.
                </p>
                <ul className="space-y-2.5">
                  {[
                    '5,000 m² manufacturing facility',
                    '6 dedicated production lines',
                    'Class 10,000 R&D laboratory',
                    'Class 100,000 process validation workshop',
                    'Class 100,000 inspection room',
                    'In-house vacuum chamber fabrication and welding',
                  ].map((fact) => (
                    <li key={fact} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 size={14} className="text-[var(--gold)] shrink-0" aria-hidden="true" />
                      <span className="text-[var(--foreground)]">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-left">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '5,000', unit: 'm²', label: 'Facility' },
                    { value: '6', unit: '', label: 'Production Lines' },
                    { value: 'Class', unit: '10,000', label: 'R&D Lab' },
                    { value: '10', unit: '', label: 'System Configs' },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-card-blue rounded-xl p-5 text-center">
                      <div className="font-heading font-bold text-2xl gold-gradient-text">
                        {stat.value}
                        {stat.unit && <span className="text-base ml-1">{stat.unit}</span>}
                      </div>
                      <div className="text-[var(--steel)] text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inquiry CTA ── */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4 text-balance">
            Ready to Define Your System?
          </h2>
          <p className="text-[var(--steel-light)] max-w-xl mx-auto leading-relaxed mb-8">
            Contact our engineering team with your process requirements, substrate details, and production targets. We will prepare a detailed configuration proposal.
          </p>
          <Link
            href="/contact?type=process"
            className="btn-gold inline-flex items-center gap-2 px-9 py-4 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
