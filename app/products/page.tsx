import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/products/product-catalog'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { withPageSocial } from '@/lib/site'
import { fetchProductsData } from '@/lib/products-db'

export const revalidate = 60

export const metadata: Metadata = withPageSocial({
  title: 'PVD Coating Equipment Catalog',
  alternates: { canonical: '/products' },
  description:
    'Browse HUANING ZHIKE\'s complete catalog of industrial and laboratory PVD vacuum coating systems — multi-arc ion plating, magnetron sputtering, electron beam evaporation, and composite platforms.',
}, '/products')

interface ProductsPageProps {
  searchParams: Promise<{ line?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { line } = await searchParams
  const products = await fetchProductsData()

  return (
    <div className="min-h-screen bg-transparent">
      {/* Page header */}
      <div className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030B16] via-[#070F1F] to-[#050E1A]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-50" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.25)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs items={[{ label: 'Equipment' }]} />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4 text-balance">
            PVD Vacuum Coating <span className="gold-gradient-text">Equipment</span>
          </h1>
          <p className="text-[var(--steel-light)] max-w-2xl text-lg leading-relaxed">
            Ten system configurations spanning industrial production and laboratory R&D — customizable chamber dimensions, deposition sources, and process capabilities to match your specific application.
          </p>
        </div>
      </div>

      <ProductCatalog defaultLine={line} products={products} />
    </div>
  )
}
