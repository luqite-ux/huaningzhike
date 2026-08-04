import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { InquiryForm } from '@/components/inquiry-form'
import { withPageSocial } from '@/lib/site'

export const metadata: Metadata = withPageSocial({
  title: 'Contact Us',
  alternates: { canonical: '/contact' },
  description:
    'Contact the HUANING ZHIKE engineering team to request a quote, discuss your PVD process requirements, or inquire about sample coating services.',
}, '/contact')

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'No. 16 Xiken Road, Building 1, Room 102, Xingqiao Subdistrict, Linping District, Hangzhou, China',
    href: undefined,
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+86 131 5710 7579',
    href: 'tel:+8613157107579',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@huaningpvd.com',
    href: 'mailto:info@huaningpvd.com',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'huaningpvd.com',
    href: 'https://huaningpvd.com',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* ── Header ── */}
      <div className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#f4f8ff] to-[#eef5ff]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-40" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.25)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mt-4 mb-4 text-balance">
            Contact <span className="gold-gradient-text">HUANING ZHIKE</span>
          </h1>
          <p className="text-[var(--steel-light)] max-w-2xl text-lg leading-relaxed">
            Submit an inquiry below or contact us directly to discuss your equipment configuration and coating requirements.
          </p>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 pb-20">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 xl:gap-16">
          {/* ── Inquiry form ── */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-6">
              Send an Inquiry
            </h2>
            <div className="glass-card rounded-2xl gold-border-glow p-6 md:p-8">
              <InquiryForm />
            </div>
          </div>

          {/* ── Contact info sidebar ── */}
          <aside className="space-y-6">
            {/* Contact info card */}
            <div className="glass-card rounded-2xl p-6 border border-[rgba(200,168,75,0.15)]">
              <h2 className="font-heading text-lg font-bold text-[var(--foreground)] mb-5">
                Contact Information
              </h2>
              <address className="not-italic space-y-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg glass-card-blue flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-[var(--gold)]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-[var(--steel)] text-xs uppercase tracking-wide mb-0.5">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          className="text-[var(--steel-light)] text-sm hover:text-[var(--gold)] transition-colors leading-relaxed"
                          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[var(--steel-light)] text-sm leading-relaxed">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </address>
            </div>

            {/* Legal name */}
            <div className="glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.1)]">
              <p className="text-[var(--steel)] text-xs uppercase tracking-wide mb-1.5">Full Legal Name</p>
              <p className="text-[var(--steel-light)] text-sm leading-relaxed">
                Huaning Intelligent Technology (Hangzhou) Intelligent Equipment Manufacturing Co., Ltd.
              </p>
            </div>

            {/* Inquiry type guide */}
            <div className="glass-card rounded-xl p-5 border border-[rgba(200,168,75,0.1)]">
              <h3 className="font-heading font-semibold text-[var(--foreground)] text-sm mb-4">
                Inquiry Type Guide
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-[var(--gold)] font-medium">Request a Quote</span>
                  <p className="text-[var(--steel)] text-xs mt-0.5 leading-relaxed">Specific system model and configuration pricing inquiry</p>
                </li>
                <li>
                  <span className="text-[var(--gold)] font-medium">Discuss Your Process</span>
                  <p className="text-[var(--steel)] text-xs mt-0.5 leading-relaxed">Application requirements, deposition process selection, and system recommendation</p>
                </li>
                <li>
                  <span className="text-[var(--gold)] font-medium">Send Your Samples</span>
                  <p className="text-[var(--steel)] text-xs mt-0.5 leading-relaxed">Process trial request for your workpieces before equipment configuration</p>
                </li>
                <li>
                  <span className="text-[var(--gold)] font-medium">Product-Specific Inquiry</span>
                  <p className="text-[var(--steel)] text-xs mt-0.5 leading-relaxed">Questions about a specific model, options, or technical specifications</p>
                </li>
                <li>
                  <span className="text-[var(--gold)] font-medium">General Inquiry</span>
                  <p className="text-[var(--steel)] text-xs mt-0.5 leading-relaxed">Any other question not covered above</p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
