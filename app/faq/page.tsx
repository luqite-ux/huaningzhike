import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { FaqAccordion } from '@/components/faq/faq-accordion'
import { withPageSocial } from '@/lib/site'

export const metadata: Metadata = withPageSocial({
  title: 'Frequently Asked Questions',
  alternates: { canonical: '/faq' },
  description:
    'Answers to common questions about HUANING ZHIKE PVD vacuum coating equipment — system selection, customization, deposition processes, sample coating, delivery, and support.',
}, '/faq')

export interface FaqItem {
  question: string
  answer: string
  category: string
}

export const FAQ_ITEMS: FaqItem[] = [
  // ── Equipment & System Selection ──
  {
    category: 'Equipment & System Selection',
    question: 'What is the difference between industrial production systems and laboratory R&D platforms?',
    answer:
      'Industrial production systems (HN-MA-001 through HN-MS-EB-005) are designed for volume coating of workpieces across multiple production batches. They feature larger vacuum chambers, higher-capacity pumping systems, multi-target configurations, and automation capabilities suited to continuous production environments. Laboratory R&D platforms (HN-MA-R-006 through HN-MS-EB-R-010) are bench-scale or compact floor-standing units optimized for process development, parameter exploration, small-batch coating, and university or institutional research. Chamber dimensions and throughput are sized for flexibility rather than volume.',
  },
  {
    category: 'Equipment & System Selection',
    question: 'Which deposition process should I choose for my application?',
    answer:
      'Multi-arc ion plating (cathodic arc) produces dense, highly adherent coatings and is well suited for tool coatings (TiN, TiAlN, CrN), decorative hard coatings, and wear-resistant films. Magnetron sputtering offers precise stoichiometry control, smoother morphology, and good uniformity, making it the preferred choice for optical thin films, semiconductor layers, and precision coatings on heat-sensitive substrates. Electron beam evaporation is used for high-purity optical films, thick dielectric layers, and materials that are difficult to sputter. Composite platforms combine two technologies — for example, multi-arc for adhesion layers and magnetron sputtering for functional overlayers — in a single pumpdown. Contact our engineering team to discuss which process path best fits your substrate, coating material, and performance requirements.',
  },
  {
    category: 'Equipment & System Selection',
    question: 'Can a single system deposit multiple different coating materials?',
    answer:
      'Yes. Multi-target configurations allow different materials to be loaded simultaneously. Composite systems with both arc sources and sputtering cathodes can deposit metallic adhesion layers, nitride functional layers, and oxide capping layers in a single pumpdown cycle. Target material combinations and the number of sources are defined at the time of system configuration.',
  },
  {
    category: 'Equipment & System Selection',
    question: 'What substrate materials can be coated on HUANING ZHIKE systems?',
    answer:
      'The systems are compatible with metal substrates (HSS, cemented carbide, tool steel, stainless steel, titanium, aluminium), glass and optical substrates, ceramics, silicon wafers, and various polymer films depending on process temperature. Substrate suitability depends on the specific deposition process and coating material. Discuss your substrate type and thermal constraints with our engineering team to confirm compatibility.',
  },

  // ── Customization ──
  {
    category: 'Customization',
    question: 'Can system chamber dimensions be customized?',
    answer:
      'Yes. Chamber diameter, height, and volume are configurable to match workpiece geometry and batch loading requirements. Provide the dimensions and weight of your largest workpiece, expected batch quantity, and any fixturing constraints, and our engineering team will propose a suitable chamber configuration.',
  },
  {
    category: 'Customization',
    question: 'What deposition source configurations can be specified?',
    answer:
      'Source count, source type (cathodic arc, planar magnetron, cylindrical magnetron, e-beam hearth), source placement geometry, target dimensions, and magnetron field configuration are all specifiable. Composite systems can combine arc and sputtering sources in the same chamber. The number and placement of sources affects coating uniformity, deposition rate, and the range of materials accessible.',
  },
  {
    category: 'Customization',
    question: 'What control and automation options are available?',
    answer:
      'Systems can be configured with manual parameter control, semi-automated recipe-driven operation, or fully automated closed-loop process control with real-time monitoring of vacuum level, process gas flow, substrate bias, power delivery, and substrate temperature. PLC-based control with HMI touchscreen interfaces and recipe storage is available. Discuss your production environment and operator requirements with our team to determine the appropriate automation level.',
  },
  {
    category: 'Customization',
    question: 'Can substrate fixture designs be customized?',
    answer:
      'Yes. Workpiece fixtures — including planetary rotation systems, barrel fixtures, flat substrate holders, and specialized jigs for optical or semiconductor components — are designed to match workpiece geometry and coating uniformity requirements. Fixturing is engineered as part of the overall system configuration, and fixture designs can be revised during the sample validation phase.',
  },

  // ── Sample Coating ──
  {
    category: 'Sample Coating',
    question: 'What is the sample coating service?',
    answer:
      'Before finalizing a system configuration, customers may send representative workpieces to HUANING ZHIKE for process trials in our Class 100,000 process validation workshop. Trial coating runs are conducted to validate the deposition process, coating adhesion, film properties, and fixture approach using your actual substrates. Results from the trial inform the final system configuration and process recipe.',
  },
  {
    category: 'Sample Coating',
    question: 'How do I request a sample coating trial?',
    answer:
      'Submit an inquiry through the Sample Coating page or contact us directly by email or phone. Describe your workpiece material and geometry, the coating material or process you are evaluating, and the performance targets you want to assess. Our process team will confirm the feasibility and arrange sample receipt.',
  },
  {
    category: 'Sample Coating',
    question: 'How many workpieces should I send for a trial?',
    answer:
      'The required quantity depends on the coating process, workpiece geometry, and the number of parameter conditions you want to evaluate. Our process team will advise on the appropriate sample count after reviewing your inquiry. As a general guide, sending a small batch that is representative of your actual production workpieces gives the most meaningful trial results.',
  },

  // ── Technical Specifications ──
  {
    category: 'Technical Specifications',
    question: 'What vacuum base pressure can the systems achieve?',
    answer:
      'Base vacuum pressure depends on chamber volume, pumping system configuration, and chamber cleanliness. Standard configurations are designed to reach base pressures in the range of 5×10⁻⁴ Pa or better before deposition. High-vacuum configurations using turbomolecular pumps can achieve 10⁻⁵ Pa or lower. Specify your required base pressure when discussing system configuration.',
  },
  {
    category: 'Technical Specifications',
    question: 'What coating thicknesses can the systems deposit?',
    answer:
      'Typical hard coating thicknesses range from 1 μm to 10 μm for wear and decorative applications. Optical thin film stacks are commonly deposited in the 0.05 μm to 5 μm range per layer. Thicker deposits are achievable with adjusted run times and source power. Specific deposition rate capabilities depend on target material, source configuration, and process parameters, and should be discussed with our engineering team for your particular application.',
  },
  {
    category: 'Technical Specifications',
    question: 'What process gases can be introduced?',
    answer:
      'Standard reactive gas lines support nitrogen (N₂), argon (Ar), oxygen (O₂), and acetylene (C₂H₂). Additional gas species for specialized processes — such as methane (CH₄), hydrogen (H₂), or silane mixtures — can be accommodated by specifying additional mass flow controller lines during system configuration. Gas inlet and mass flow controller configuration is part of the system customization.',
  },

  // ── Delivery, Support & Process ──
  {
    category: 'Delivery, Installation & Support',
    question: 'What does the delivery and commissioning process involve?',
    answer:
      'Every system undergoes factory acceptance testing at our facility before shipment. Factory acceptance testing includes vacuum performance verification, pumping speed measurement, deposition source function checks, process parameter verification, and electrical safety inspection. Following delivery, our team provides on-site installation, system commissioning, and operator training to ensure the system reaches stable process performance in your facility.',
  },
  {
    category: 'Delivery, Installation & Support',
    question: 'Is technical support available after delivery?',
    answer:
      'Yes. Post-delivery technical support is provided for equipment operation, process troubleshooting, maintenance guidance, and spare parts supply. Contact our team by phone or email for post-delivery support requests.',
  },
  {
    category: 'Delivery, Installation & Support',
    question: 'How do I get a price quotation?',
    answer:
      'System pricing depends on chamber size, source configuration, automation level, monitoring instruments, and optional modules — all of which are defined during the requirements discussion. Submit a Request a Quote inquiry through our Contact page or the product page for the system configuration you are interested in. Provide as much detail as possible about your application, substrate geometry, desired coating, and production capacity so our engineering team can prepare an accurate configuration proposal.',
  },
]

export default function FaqPage() {
  const categories = Array.from(new Set(FAQ_ITEMS.map((item) => item.category)))

  return (
    <div className="min-h-screen bg-[#050E1A]">
      {/* ── Page header ── */}
      <div className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030B16] via-[#070F1F] to-[#050E1A]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" aria-hidden="true" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #C8A84B 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.25)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,168,75,0.2)] bg-[rgba(200,168,75,0.04)] mb-5">
              <span className="text-[var(--gold)] text-xs font-medium tracking-widest uppercase">
                Frequently Asked Questions
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] text-balance leading-tight mb-5">
              Questions &amp; <span className="gold-gradient-text">Answers</span>
            </h1>
            <p className="text-[var(--steel-light)] text-lg leading-relaxed">
              Common questions about system selection, customization options, deposition processes, sample coating, and post-delivery support. If your question is not answered here, contact our engineering team directly.
            </p>
          </div>
        </div>
      </div>

      {/* ── FAQ content ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 pb-20">
        <div className="grid lg:grid-cols-[220px_1fr] gap-10 xl:gap-16 items-start">

          {/* ── Category nav (sticky desktop) ── */}
          <aside className="hidden lg:block sticky top-28">
            <nav aria-label="FAQ categories">
              <p className="text-[var(--steel)] text-xs uppercase tracking-widest mb-3">Categories</p>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      href={`#cat-${cat.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`}
                      className="block text-sm text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors py-1 leading-snug focus-visible:outline-2 focus-visible:outline-[var(--gold)] rounded"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.12)]">
              <p className="text-[var(--steel-light)] text-sm leading-relaxed mb-4">
                Still have questions? Our engineering team is ready to help with specific application and configuration questions.
              </p>
              <Link
                href="/contact"
                className="btn-gold flex items-center justify-center gap-2 py-2.5 rounded text-xs w-full"
              >
                Contact Engineering
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </aside>

          {/* ── Accordion sections ── */}
          <div className="space-y-10">
            <FaqAccordion categories={categories} items={FAQ_ITEMS} />

            {/* ── Still need help ── */}
            <div className="glass-card rounded-2xl gold-border-glow p-8 md:p-10 text-center">
              <h2 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-4">
                Still Need Help?
              </h2>
              <p className="text-[var(--steel-light)] max-w-lg mx-auto leading-relaxed mb-8">
                Our engineering team is available to answer specific application questions, discuss system configurations, or arrange a technical consultation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-gold px-8 py-3 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
                >
                  Contact Our Team
                  <ArrowRight size={14} className="inline ml-2" aria-hidden="true" />
                </Link>
                <Link
                  href="/sample-coating"
                  className="btn-outline-gold px-8 py-3 rounded text-sm"
                >
                  Sample Coating Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
