'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { type Product, type ProductCategory } from '@/lib/products'

const PRODUCT_LINES: Array<{ label: string; value: ProductCategory | '' }> = [
  { label: 'All Systems', value: '' },
  { label: 'Industrial', value: 'Industrial PVD Coating Equipment' },
  { label: 'Laboratory', value: 'Lab R&D PVD Coating Equipment' },
]

export function ProductCatalog({ defaultLine, products }: { defaultLine?: string; products: Product[] }) {
  const [category, setCategory] = useState<ProductCategory | ''>(
    defaultLine === 'industrial'
      ? 'Industrial PVD Coating Equipment'
      : defaultLine === 'lab'
      ? 'Lab R&D PVD Coating Equipment'
      : '',
  )

  const filtered = useMemo(() => {
    return category ? products.filter((product) => product.category === category) : products
  }, [category, products])

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex flex-wrap gap-2" role="group" aria-label="Product line">
          {PRODUCT_LINES.map((line) => {
            const active = category === line.value
            return (
              <button
                key={line.label}
                type="button"
                onClick={() => setCategory(line.value)}
                aria-pressed={active}
                className={`rounded-full border px-5 py-2.5 text-sm font-heading font-semibold tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-[var(--gold)] ${
                  active
                    ? 'border-[var(--gold)] bg-[var(--gold)] text-[#08152A] shadow-[0_6px_20px_rgba(200,168,75,0.22)]'
                    : 'border-[#B9C9DF] bg-white text-[#27466D] hover:border-[var(--gold)] hover:text-[#0B1E3D]'
                }`}
              >
                {line.label}
              </button>
            )
          })}
        </div>

        <p className="text-[#496789] text-sm">
          Showing <span className="text-[#0B1E3D] font-semibold">{filtered.length}</span> of {products.length} systems
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group glass-card rounded-xl overflow-hidden border border-[rgba(200,168,75,0.1)] hover:border-[rgba(200,168,75,0.3)] transition-all duration-300 hover:shadow-[0_4px_32px_rgba(200,168,75,0.08)] flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-white to-[#eaf3ff] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,85,196,0.12)_0%,transparent_70%)]" aria-hidden="true" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-heading font-semibold tracking-widest uppercase px-2 py-0.5 rounded ${
            product.category === 'Industrial PVD Coating Equipment'
              ? 'bg-[rgba(27,85,196,0.5)] text-[var(--steel-light)] border border-[rgba(27,85,196,0.4)]'
              : 'bg-[rgba(200,168,75,0.2)] text-[var(--gold)] border border-[rgba(200,168,75,0.3)]'
          }`}>
            {product.category === 'Industrial PVD Coating Equipment' ? 'Industrial' : 'Lab R&D'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        <div className="text-[var(--gold)] text-xs font-mono mb-1">{product.model}</div>
        <h3 className="font-heading text-sm font-bold text-[var(--foreground)] leading-tight mb-2">{product.name}</h3>
        <div className="text-[var(--steel-light)] text-xs mb-1">
          <span className="font-medium text-[var(--steel)]">Process:</span> {product.depositionProcess}
        </div>
        <p className="text-[var(--steel)] text-xs leading-relaxed mb-4 flex-1">{product.tagline}</p>

        {/* Application tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.applications.slice(0, 2).map((app) => (
            <span key={app} className="text-[10px] px-1.5 py-0.5 rounded bg-[rgba(200,168,75,0.05)] text-[var(--steel)] border border-[rgba(200,168,75,0.1)]">
              {app}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <Link
            href={`/products/${product.slug}`}
            className="btn-outline-gold flex items-center justify-center gap-1.5 py-2.5 rounded text-xs focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
          >
            View System
            <ArrowRight size={13} />
          </Link>
          <Link
            href={`/contact?type=quote&product=${encodeURIComponent(product.model)}`}
            className="btn-gold flex items-center justify-center gap-1.5 py-2.5 rounded text-xs focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </article>
  )
}
