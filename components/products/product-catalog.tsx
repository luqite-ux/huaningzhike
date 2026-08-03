'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Filter, X, ArrowRight } from 'lucide-react'
import {
  type Product,
  type ProductCategory,
  type DepositionProcess,
  type ApplicationArea,
} from '@/lib/products'

const CATEGORIES: ProductCategory[] = [
  'Industrial PVD Coating Equipment',
  'Lab R&D PVD Coating Equipment',
]

const DEPOSITION_PROCESSES: DepositionProcess[] = [
  'Multi-arc Ion Plating',
  'Magnetron Sputtering',
  'Multi-arc & Magnetron Sputtering',
  'Electron Beam Evaporation',
  'Magnetron & Electron Beam',
]

const APPLICATIONS: ApplicationArea[] = [
  'Hard Decorative Coatings',
  'Wear-resistant & DLC Coatings',
  'Optical Thin Films',
  'Semiconductor Thin Films',
  'Research & Development',
  'Tool & Die Coatings',
]

interface FiltersState {
  search: string
  category: ProductCategory | ''
  process: DepositionProcess | ''
  application: ApplicationArea | ''
}

export function ProductCatalog({ defaultLine, products }: { defaultLine?: string; products: Product[] }) {
  const [filters, setFilters] = useState<FiltersState>({
    search: '',
    category: defaultLine === 'industrial'
      ? 'Industrial PVD Coating Equipment'
      : defaultLine === 'lab'
      ? 'Lab R&D PVD Coating Equipment'
      : '',
    process: '',
    application: '',
  })
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.search) {
        const q = filters.search.toLowerCase()
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.model.toLowerCase().includes(q) &&
          !p.tagline.toLowerCase().includes(q) &&
          !p.depositionProcess.toLowerCase().includes(q)
        ) return false
      }
      if (filters.category && p.category !== filters.category) return false
      if (filters.process && p.depositionProcess !== filters.process) return false
      if (filters.application && !p.applications.includes(filters.application as ApplicationArea)) return false
      return true
    })
  }, [filters])

  const activeFilterCount = [filters.category, filters.process, filters.application].filter(Boolean).length

  const clearFilters = () =>
    setFilters({ search: '', category: '', process: '', application: '' })

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      {/* Search and filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--steel)]" aria-hidden="true" />
          <input
            type="search"
            value={filters.search}
            onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
            placeholder="Search by name, model, or process…"
            aria-label="Search equipment"
            className="form-input pl-10 pr-4 py-2.5 w-full"
          />
        </div>

        <button
          type="button"
          onClick={() => setFiltersOpen(!filtersOpen)}
          aria-expanded={filtersOpen}
          aria-controls="filter-panel"
          className="btn-outline-gold flex items-center gap-2 px-4 py-2.5 rounded text-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
        >
          <Filter size={15} aria-hidden="true" />
          Filters
          {activeFilterCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--gold)] text-[var(--navy)] text-[10px] font-bold">
              {activeFilterCount}
            </span>
          )}
        </button>

        {(activeFilterCount > 0 || filters.search) && (
          <button
            type="button"
            onClick={clearFilters}
            className="flex items-center gap-1.5 px-3 py-2.5 text-sm text-[var(--steel)] hover:text-[var(--foreground)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
          >
            <X size={14} aria-hidden="true" /> Clear
          </button>
        )}
      </div>

      {/* Filter panel */}
      {filtersOpen && (
        <div
          id="filter-panel"
          className="glass-card rounded-xl p-5 mb-8 grid sm:grid-cols-3 gap-5 border border-[rgba(200,168,75,0.15)] animate-fade-in"
          role="group"
          aria-label="Filter equipment"
        >
          {/* Category */}
          <div>
            <label className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-2">
              Product Line
            </label>
            <div className="space-y-1.5">
              {CATEGORIES.map((cat) => (
                <label key={cat} className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={filters.category === cat}
                    onChange={() =>
                      setFilters((f) => ({
                        ...f,
                        category: f.category === cat ? '' : cat,
                      }))
                    }
                    className="accent-[var(--gold)]"
                  />
                  <span className="text-sm text-[var(--steel-light)] group-hover:text-[var(--foreground)] transition-colors">
                    {cat === 'Industrial PVD Coating Equipment' ? 'Industrial' : 'Lab R&D'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <label className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-2">
              Deposition Process
            </label>
            <div className="space-y-1.5">
              {DEPOSITION_PROCESSES.map((proc) => (
                <label key={proc} className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="radio"
                    name="process"
                    value={proc}
                    checked={filters.process === proc}
                    onChange={() =>
                      setFilters((f) => ({
                        ...f,
                        process: f.process === proc ? '' : (proc as DepositionProcess),
                      }))
                    }
                    className="accent-[var(--gold)]"
                  />
                  <span className="text-sm text-[var(--steel-light)] group-hover:text-[var(--foreground)] transition-colors">
                    {proc}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Application */}
          <div>
            <label className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-2">
              Application
            </label>
            <div className="space-y-1.5">
              {APPLICATIONS.map((app) => (
                <label key={app} className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="radio"
                    name="application"
                    value={app}
                    checked={filters.application === app}
                    onChange={() =>
                      setFilters((f) => ({
                        ...f,
                        application: f.application === app ? '' : (app as ApplicationArea),
                      }))
                    }
                    className="accent-[var(--gold)]"
                  />
                  <span className="text-sm text-[var(--steel-light)] group-hover:text-[var(--foreground)] transition-colors">
                    {app}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-[var(--steel)] text-sm">
          Showing <span className="text-[var(--foreground)] font-semibold">{filtered.length}</span> of {products.length} systems
        </p>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="glass-card rounded-xl p-12 text-center">
          <div className="text-[var(--steel)] mb-3">No equipment matched your filters.</div>
          <button
            type="button"
            onClick={clearFilters}
            className="btn-outline-gold px-5 py-2 rounded text-sm"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
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
