import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you requested could not be found.',
  robots: { index: false, follow: false },
}

const QUICK_LINKS = [
  { label: 'Browse All Equipment',   href: '/products' },
  { label: 'Solution Pathways',      href: '/solutions' },
  { label: 'Custom Configuration',   href: '/customization' },
  { label: 'Sample Coating Service', href: '/sample-coating' },
  { label: 'About HUANING ZHIKE',    href: '/about' },
  { label: 'Contact & Inquiries',    href: '/contact' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      {/* ── Background artwork ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #C8A84B 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #1B55C4 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/images/logo.png"
              alt="HUANING ZHIKE"
              width={240}
              height={72}
              className="h-14 w-auto object-contain mx-auto"
              priority
            />
          </div>

          {/* 404 display */}
          <div className="relative inline-block mb-6">
            <span
              className="font-heading font-bold text-[10rem] md:text-[14rem] leading-none select-none"
              style={{
                background: 'linear-gradient(135deg, rgba(200,168,75,0.15) 0%, rgba(27,85,196,0.08) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              aria-hidden="true"
            >
              404
            </span>
          </div>

          <div className="mb-3">
            <Search size={28} className="text-[var(--gold)] mx-auto mb-4 opacity-70" aria-hidden="true" />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4 text-balance">
            Page Not Found
          </h1>
          <p className="text-[var(--steel-light)] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            The page you requested does not exist or may have been moved. Use the links below to find what you need, or contact us directly.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link
              href="/"
              className="btn-gold px-8 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
            >
              Return to Homepage
              <ArrowRight size={14} className="inline ml-2" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline-gold px-8 py-3.5 rounded text-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick links grid */}
          <div className="glass-card rounded-2xl border border-[rgba(200,168,75,0.12)] p-6 md:p-8">
            <h2 className="font-heading font-semibold text-[var(--foreground)] text-sm uppercase tracking-widest mb-6">
              You may be looking for
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-sm text-[var(--steel-light)] hover:text-[var(--foreground)] hover:bg-[rgba(200,168,75,0.05)] transition-colors group border border-transparent hover:border-[rgba(200,168,75,0.12)] focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                  >
                    {label}
                    <ArrowRight
                      size={13}
                      aria-hidden="true"
                      className="text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
