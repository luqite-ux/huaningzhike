import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react'

const productLinks = [
  { label: 'Multi-arc Ion Plating',              href: '/products/hn-ma-001' },
  { label: 'Magnetron Sputtering',               href: '/products/hn-ms-002' },
  { label: 'Composite Arc & Sputtering',         href: '/products/hn-ma-ms-003' },
  { label: 'Electron Beam Evaporation',          href: '/products/hn-eb-004' },
  { label: 'Magnetron & E-Beam Composite',       href: '/products/hn-ms-eb-005' },
  { label: 'Lab Multi-arc R&D System',           href: '/products/hn-ma-r-006' },
  { label: 'Lab Magnetron Sputtering System',    href: '/products/hn-ms-r-007' },
  { label: 'Lab Composite R&D Platform',         href: '/products/hn-ma-ms-r-008' },
  { label: 'Lab E-Beam R&D System',              href: '/products/hn-eb-r-009' },
  { label: 'Magnetron & E-Beam Research Platform', href: '/products/hn-ms-eb-r-010' },
]

const solutionLinks = [
  { label: 'Optical Coatings',         href: '/solutions/optical-coatings' },
  { label: 'DLC & Wear-Resistant',     href: '/solutions/dlc-wear-coatings' },
  { label: 'Semiconductor Thin Films', href: '/solutions/semiconductor-thin-films' },
  { label: 'Research Platforms',       href: '/solutions/research-platforms' },
]

const companyLinks = [
  { label: 'About HUANING ZHIKE', href: '/about' },
  { label: 'Custom Systems',       href: '/customization' },
  { label: 'Sample Coating',       href: '/sample-coating' },
  { label: 'News',                 href: '/news' },
  { label: 'FAQ',                  href: '/faq' },
  { label: 'Contact',              href: '/contact' },
  { label: 'Privacy Policy',       href: '/privacy' },
]

export function SiteFooter() {
  return (
    <footer className="relative bg-[#f4f8ff] border-t border-[rgba(200,168,75,0.12)] overflow-hidden">
      {/* Decorative gradient top edge */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.4)] to-transparent" />

      {/* CTA band */}
      <div className="relative bg-gradient-to-r from-[#0A1830] via-[#0F2245] to-[#0A1830] py-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-white tracking-wide">
              Ready to discuss your coating process?
            </h2>
            <p className="mt-1.5 text-[#C8D5EA] text-sm leading-relaxed">
              Our engineers are available to review your application requirements and recommend the right system configuration.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-gold shrink-0 flex items-center gap-2 px-8 py-3.5 rounded text-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
          >
            Contact an Engineer
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-12">

          {/* Brand column */}
          <div>
            <Link href="/" aria-label="HUANING ZHIKE home">
              <Image
                src="/images/logo-transparent.png"
                alt="HUANING ZHIKE"
                width={200}
                height={48}
                className="h-14 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-[var(--steel)] text-sm leading-relaxed mb-6">
              Huaning Intelligent Technology (Hangzhou) Intelligent Equipment Manufacturing Co., Ltd. — engineering customized PVD vacuum coating systems for industrial, semiconductor, optical, and laboratory applications.
            </p>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[var(--gold)] shrink-0 mt-0.5" />
                <span className="text-[var(--steel)] text-sm leading-relaxed">
                  No. 16 Xiken Road, Building 1, Room 102, Xingqiao Subdistrict, Linping District, Hangzhou, China
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[var(--gold)] shrink-0" />
                <a
                  href="tel:+8613157107579"
                  className="text-[var(--steel)] text-sm hover:text-[var(--foreground)] transition-colors"
                >
                  +86 131 5710 7579
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-[var(--gold)] shrink-0" />
                <a
                  href="mailto:huaning@huaningzhike.cn"
                  className="text-[var(--steel)] text-sm hover:text-[var(--gold)] transition-colors break-all"
                >
                  huaning@huaningzhike.cn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={15} className="text-[var(--gold)] shrink-0" />
                <a
                  href="https://www.huaningzhike.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--steel)] text-sm hover:text-[var(--gold)] transition-colors"
                >
                  www.huaningzhike.com
                </a>
              </div>
            </address>
          </div>

          {/* Products column */}
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-[#755B10] mb-5">
              Equipment
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--steel)] text-sm hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions column */}
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-[#755B10] mb-5">
              Solutions
            </h3>
            <ul className="space-y-2.5 mb-8">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--steel)] text-sm hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-[#755B10] mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--steel)] text-sm hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick contact column */}
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-[#755B10] mb-5">
              Quick Inquiry
            </h3>
            <p className="text-[var(--steel)] text-sm leading-relaxed mb-5">
              Send us an inquiry for a specific product, process discussion, or sample coating request.
            </p>
            <div className="space-y-3">
              <Link
                href="/contact?type=quote"
                className="btn-gold w-full flex items-center justify-center gap-2 py-3 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact?type=process"
                className="btn-outline-gold w-full flex items-center justify-center gap-2 py-3 rounded text-sm !text-[#755B10] focus-visible:outline-2 focus-visible:outline-[#755B10]"
              >
                Discuss Your Process
              </Link>
              <Link
                href="/sample-coating"
                className="btn-outline-gold w-full flex items-center justify-center gap-2 py-3 rounded text-sm !text-[#755B10] focus-visible:outline-2 focus-visible:outline-[#755B10]"
              >
                Send Your Samples
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(200,168,75,0.08)] py-5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--steel)] text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Huaning Intelligent Technology (Hangzhou) Intelligent Equipment Manufacturing Co., Ltd. All rights reserved.
          </p>
          <Link href="/privacy" className="text-[var(--steel)] text-xs hover:text-[var(--foreground)] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
