'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Phone } from 'lucide-react'

interface SolutionInquiryCtaProps {
  solutionTitle: string
}

export function SolutionInquiryCta({ solutionTitle }: SolutionInquiryCtaProps) {
  return (
    <div className="glass-card rounded-xl border border-[rgba(200,168,75,0.2)] overflow-hidden">
      {/* Gold top bar */}
      <div className="h-1 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)]" />
      <div className="p-5">
        <h3 className="font-heading text-sm font-bold text-[var(--foreground)] mb-2">
          Discuss Your {solutionTitle} Requirements
        </h3>
        <p className="text-[var(--steel)] text-xs leading-relaxed mb-5">
          Our engineers can review your substrate type, target film, and capacity requirements to recommend the right system configuration and process approach.
        </p>

        <div className="space-y-2.5 mb-5">
          <Link
            href={`/contact?type=process`}
            className="btn-gold w-full flex items-center justify-center gap-2 py-3 rounded text-xs focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
          >
            Discuss Your Process
            <ArrowRight size={13} />
          </Link>
          <Link
            href={`/contact?type=quote`}
            className="btn-outline-gold w-full flex items-center justify-center gap-2 py-3 rounded text-xs focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
          >
            Request a Quote
          </Link>
        </div>

        <div className="pt-4 border-t border-[rgba(200,168,75,0.1)] space-y-2.5">
          <a
            href="mailto:info@huaningpvd.com"
            className="flex items-center gap-2.5 text-xs text-[var(--steel)] hover:text-[var(--gold)] transition-colors"
          >
            <Mail size={13} className="text-[var(--gold)] shrink-0" />
            info@huaningpvd.com
          </a>
          <a
            href="tel:+8613157107579"
            className="flex items-center gap-2.5 text-xs text-[var(--steel)] hover:text-[var(--gold)] transition-colors"
          >
            <Phone size={13} className="text-[var(--gold)] shrink-0" />
            +86 131 5710 7579
          </a>
        </div>
      </div>
    </div>
  )
}
