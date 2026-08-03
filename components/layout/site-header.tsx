'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Products', href: '/products' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Optical Coatings',          href: '/solutions/optical-coatings' },
      { label: 'DLC & Wear-Resistant',       href: '/solutions/dlc-wear-coatings' },
      { label: 'Semiconductor Thin Films',   href: '/solutions/semiconductor-thin-films' },
      { label: 'Research Platforms',         href: '/solutions/research-platforms' },
    ],
  },
  { label: 'Customization', href: '/customization' },
  { label: 'Sample Coating', href: '/sample-coating' },
  { label: 'About',         href: '/about' },
  { label: 'News',          href: '/news' },
  { label: 'FAQ',           href: '/faq' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [scrolled,   setScrolled]     = useState(false)
  const [openDrop,   setOpenDrop]     = useState<string | null>(null)
  const pathname  = usePathname()
  const dropRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpenDrop(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDrop(null)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-transparent/95 backdrop-blur-md border-b border-[rgba(200,168,75,0.15)] shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
            : 'bg-gradient-to-b from-[#050E1A]/80 to-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="HUANING ZHIKE — home">
            <Image
              src="/images/logo.png"
              alt="HUANING ZHIKE logo"
              width={200}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1"
            ref={dropRef}
          >
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDrop(openDrop === item.label ? null : item.label)
                    }
                    aria-expanded={openDrop === item.label}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded focus-visible:outline-2 focus-visible:outline-[var(--gold)] ${
                      isActive(item.href)
                        ? 'text-[var(--gold)]'
                        : 'text-[var(--steel-light)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDrop === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openDrop === item.label && (
                    <div
                      role="menu"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 glass-card rounded-lg overflow-hidden shadow-xl animate-fade-in"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={`block px-4 py-3 text-sm transition-colors ${
                            pathname === child.href
                              ? 'bg-[rgba(200,168,75,0.12)] text-[var(--gold)]'
                              : 'text-[var(--steel-light)] hover:bg-[rgba(200,168,75,0.07)] hover:text-[var(--foreground)]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded focus-visible:outline-2 focus-visible:outline-[var(--gold)] ${
                    isActive(item.href)
                      ? 'text-[var(--gold)]'
                      : 'text-[var(--steel-light)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-gold px-5 py-2.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
            >
              Request a Quote
            </Link>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="lg:hidden p-2 text-[var(--steel-light)] hover:text-[var(--foreground)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-transparent/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute inset-y-0 right-0 w-72 bg-[#0B1E3D] border-l border-[rgba(200,168,75,0.12)] flex flex-col transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 py-5 border-b border-[rgba(200,168,75,0.1)]">
            <Image
              src="/images/logo.png"
              alt="HUANING ZHIKE"
              width={160}
              height={38}
              className="h-9 w-auto object-contain"
            />
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-[var(--steel)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
            >
              <X size={20} />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto py-4 px-3">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDrop(openDrop === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-[var(--steel-light)] hover:text-[var(--foreground)] rounded transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDrop === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDrop === item.label && (
                    <div className="ml-3 border-l border-[rgba(200,168,75,0.1)] pl-3 mb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2.5 px-2 text-sm text-[var(--steel)] hover:text-[var(--gold)] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-3 text-sm font-medium rounded transition-colors ${
                    isActive(item.href)
                      ? 'text-[var(--gold)]'
                      : 'text-[var(--steel-light)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="p-4 border-t border-[rgba(200,168,75,0.1)]">
            <Link
              href="/contact"
              className="btn-gold w-full flex items-center justify-center py-3 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
