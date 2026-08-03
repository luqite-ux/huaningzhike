'use client'

import { useState, useId } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/app/faq/page'

interface FaqAccordionProps {
  categories: string[]
  items: FaqItem[]
}

export function FaqAccordion({ categories, items }: FaqAccordionProps) {
  const uid = useId()
  const [openKey, setOpenKey] = useState<string | null>(null)

  const toggle = (key: string) =>
    setOpenKey((prev) => (prev === key ? null : key))

  return (
    <>
      {categories.map((cat) => {
        const catItems = items.filter((item) => item.category === cat)
        const catSlug = cat.replace(/[^a-z0-9]/gi, '-').toLowerCase()
        const catId = `cat-${catSlug}`

        return (
          <section key={cat} id={catId} aria-labelledby={`${catId}-heading`} className="scroll-mt-28">
            <h2
              id={`${catId}-heading`}
              className="font-heading text-lg font-semibold text-[var(--gold)] uppercase tracking-wider mb-4 pb-3 border-b border-[rgba(200,168,75,0.15)]"
            >
              {cat}
            </h2>

            <div className="space-y-2">
              {catItems.map((item, i) => {
                const key = `${uid}-${catSlug}-${i}`
                const isOpen = openKey === key
                const panelId = `${key}-panel`
                const triggerId = `${key}-trigger`

                return (
                  <div
                    key={item.question}
                    className={`glass-card rounded-xl border transition-colors duration-200 ${
                      isOpen
                        ? 'border-[rgba(200,168,75,0.3)]'
                        : 'border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.2)]'
                    }`}
                  >
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(key)}
                      className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-[var(--gold)] focus-visible:rounded-xl"
                    >
                      <span
                        className={`font-medium text-sm md:text-[0.9375rem] leading-snug transition-colors ${
                          isOpen ? 'text-[var(--gold)]' : 'text-[var(--foreground)]'
                        }`}
                      >
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 mt-0.5 text-[var(--steel)] transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[var(--gold)]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div
                            className="h-px bg-gradient-to-r from-[rgba(200,168,75,0.2)] to-transparent mb-4"
                            aria-hidden="true"
                          />
                          <p className="text-[var(--steel-light)] text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </>
  )
}
