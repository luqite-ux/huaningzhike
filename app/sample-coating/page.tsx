import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, CheckCircle2, ChevronRight, Mail, Phone } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { InquiryForm } from '@/components/inquiry-form'
import { withPageSocial } from '@/lib/site'

export const metadata: Metadata = withPageSocial({
  title: 'Sample Coating Service',
  alternates: { canonical: '/sample-coating' },
  description:
    'Send your workpieces to HUANING ZHIKE for process trials before your final equipment configuration decision. Evaluate film properties on your actual substrates and geometries.',
}, '/sample-coating')

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Submit an Inquiry',
    desc: 'Complete the inquiry form below with your substrate material, geometry, desired coating type, and evaluation objectives. Our team will review your requirements.',
  },
  {
    step: '02',
    title: 'Engineering Review',
    desc: 'Our engineers assess whether your substrate and coating targets are compatible with our current validated processes and identify any pre-processing requirements.',
  },
  {
    step: '03',
    title: 'Ship Your Workpieces',
    desc: 'Send cleaned and properly packaged workpieces to our Hangzhou facility. We provide shipping guidance after your inquiry is confirmed.',
  },
  {
    step: '04',
    title: 'Process Trial',
    desc: 'We process your samples in our Class 100,000 process validation workshop using the deposition method and parameters matched to your stated requirements.',
  },
  {
    step: '05',
    title: 'Results & Discussion',
    desc: 'Coated samples are returned with a process report. Our team discusses the results, film properties, and implications for equipment selection and configuration.',
  },
]

const SUBSTRATE_TYPES = [
  'Cemented carbide cutting tools and inserts',
  'High-speed steel (HSS) tooling',
  'Stamping and forming dies',
  'Optical glass, fused silica, and crystal substrates',
  'Metal alloy components (stainless, titanium, aluminium)',
  'Silicon wafers and semiconductor substrates',
  'Custom research substrates — contact us to discuss',
]

export default function SampleCoatingPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* ── Header ── */}
      <div className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#f4f8ff] to-[#eef5ff]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.25)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs items={[{ label: 'Sample Coating' }]} />
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,168,75,0.2)] bg-[rgba(200,168,75,0.04)] mb-5">
                <span className="text-[var(--gold)] text-xs font-medium tracking-widest uppercase">Process Validation</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] text-balance leading-tight mb-5">
                Test Your Process Before <span className="gold-gradient-text">Final Configuration</span>
              </h1>
              <p className="text-[var(--steel-light)] text-lg leading-relaxed mb-4">
                Customers may send workpieces to our facility for PVD process trials before committing to a final equipment configuration. Evaluating film properties on your actual substrates and part geometries is a valuable step in defining the right system for your application.
              </p>
              <p className="text-[var(--steel-light)] leading-relaxed mb-8">
                Submit an inquiry below with your substrate, geometry, and coating objectives, and our engineering team will assess whether a sample coating trial is appropriate for your situation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#inquiry"
                  className="btn-gold px-7 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
                >
                  Submit a Sample Request
                  <ArrowRight size={15} className="inline ml-2" aria-hidden="true" />
                </a>
                <Link href="/contact" className="btn-outline-gold px-7 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]">
                  Contact Us First
                </Link>
              </div>
            </div>

            {/* Equipment image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-8 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(27,85,196,0.2)_0%,transparent_70%)] blur-2xl" aria-hidden="true" />
              <div className="glass-card rounded-2xl gold-border-glow overflow-hidden">
                <div className="relative h-72 bg-gradient-to-br from-white to-[#eaf3ff]">
                  <Image
                    src="https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-r-007/01.png"
                    alt="HUANING ZHIKE laboratory PVD system for process trials"
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

      {/* ── How it works ── */}
      <section aria-labelledby="how-heading" className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 id="how-heading" className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              How Sample Coating Works
            </h2>
            <p className="text-[var(--steel-light)] max-w-2xl mx-auto leading-relaxed">
              The process is straightforward. Submit your requirements, ship your parts, and receive coated samples with process documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {HOW_IT_WORKS.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.25)] transition-colors h-full">
                  <div className="font-heading font-bold text-2xl gold-gradient-text mb-3">{s.step}</div>
                  <h3 className="font-heading font-semibold text-[var(--foreground)] mb-2 text-sm">{s.title}</h3>
                  <p className="text-[var(--steel)] text-xs leading-relaxed">{s.desc}</p>
                </div>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[var(--gold)]">
                    <ChevronRight size={16} aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compatible substrates ── */}
      <section aria-labelledby="substrates-heading" className="py-14 bg-[#f4f8ff]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="substrates-heading" className="font-heading text-2xl font-bold text-[var(--foreground)] mb-5">
                Example Compatible Substrate Types
              </h2>
              <p className="text-[var(--steel-light)] leading-relaxed mb-6">
                The following substrate types represent commonly processed sample categories. Contact our team to discuss your specific material and geometry — we can advise on process compatibility before you ship.
              </p>
              <ul className="space-y-3">
                {SUBSTRATE_TYPES.map((sub) => (
                  <li key={sub} className="flex items-start gap-3">
                    <Package size={15} className="text-[var(--gold)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[var(--steel-light)] text-sm">{sub}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-5">
                What to Include in Your Request
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  'Substrate material and surface finish specification',
                  'Part geometry dimensions and batch quantity',
                  'Target coating type (e.g. TiAlN, DLC, SiO₂/TiO₂ AR stack)',
                  'Key film properties to be evaluated (hardness, adhesion, optical, etc.)',
                  'Any substrate temperature constraints',
                  'Intended end application and performance targets',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-[var(--gold)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[var(--steel-light)] text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Direct contact */}
              <div className="glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.15)]">
                <h3 className="font-heading font-semibold text-[var(--foreground)] mb-3">Direct Contact</h3>
                <div className="space-y-2.5">
                  <a href="mailto:info@huaningpvd.com" className="flex items-center gap-2.5 text-sm text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors">
                    <Mail size={14} className="text-[var(--gold)]" aria-hidden="true" />
                    info@huaningpvd.com
                  </a>
                  <a href="tel:+8613157107579" className="flex items-center gap-2.5 text-sm text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors">
                    <Phone size={14} className="text-[var(--gold)]" aria-hidden="true" />
                    +86 131 5710 7579
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inquiry form ── */}
      <section id="inquiry" aria-labelledby="inquiry-heading" className="py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 id="inquiry-heading" className="font-heading text-3xl font-bold text-[var(--foreground)] mb-4">
              Submit a Sample Coating Request
            </h2>
            <p className="text-[var(--steel-light)] leading-relaxed">
              Use the form below to describe your substrate, coating requirements, and evaluation objectives. Our team will respond to confirm whether a sample trial is appropriate.
            </p>
          </div>

          <div className="glass-card rounded-2xl gold-border-glow p-6 md:p-10">
            <InquiryForm defaultInquiryType="Send Your Samples" />
          </div>
        </div>
      </section>
    </div>
  )
}
