import { createSupabaseClient, tenantId } from '@/lib/supabase'
import { products as fallbackProducts, type Product } from '@/lib/products'

type Json = Record<string, unknown>
type ProductRow = {
  id: string | number; slug: string; model?: string | null; category?: string | null
  name_i18n?: Json | null; description_i18n?: Json | null; image_url?: string | null
  specs?: unknown; features?: unknown; extra_data?: Json | null
}

const text = (value: unknown, fallback = '') => typeof value === 'string' && value.trim() ? value.trim() : fallback
const list = (value: unknown) => Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : []

export function mapProduct(row: ProductRow): Product {
  const fallback = fallbackProducts.find((p) => p.slug === row.slug)
  const extra = row.extra_data ?? {}
  const nameI18n = row.name_i18n ?? {}
  const descriptionI18n = row.description_i18n ?? {}
  const gallery = list(extra.gallery ?? extra.images)
  const image = text(row.image_url, fallback?.image ?? '/placeholder.svg')
  return {
    ...(fallback ?? fallbackProducts[0]),
    id: typeof row.id === 'number' ? row.id : fallback?.id ?? 0,
    slug: row.slug,
    model: text(row.model, fallback?.model ?? row.slug.toUpperCase()),
    name: text(nameI18n.en, fallback?.name ?? row.slug),
    category: text(row.category, fallback?.category ?? 'Industrial PVD Coating Equipment') as Product['category'],
    image,
    images: gallery.length ? [image, ...gallery.filter((url) => url !== image)] : (fallback?.images ?? [image]),
    summary: text(descriptionI18n.en, fallback?.summary ?? ''),
    tagline: text(extra.tagline, fallback?.tagline ?? ''),
    principle: text(extra.principle, fallback?.principle ?? ''),
    advantages: list(row.features).length ? list(row.features) : (fallback?.advantages ?? []),
    specifications: Array.isArray(row.specs)
      ? row.specs.filter((v): v is Product['specifications'][number] => !!v && typeof v === 'object' && 'label' in v && 'value' in v)
      : fallback?.specifications ?? [],
    optionalModules: list(extra.optionalModules),
    relatedSlugs: list(extra.relatedSlugs),
    applications: (list(extra.applications).length ? list(extra.applications) : fallback?.applications ?? []) as Product['applications'],
    depositionProcess: text(extra.depositionProcess, fallback?.depositionProcess ?? 'Magnetron Sputtering') as Product['depositionProcess'],
  }
}

export async function fetchProductsData(): Promise<Product[]> {
  const supabase = createSupabaseClient()
  if (!supabase) return fallbackProducts
  const { data, error } = await supabase.from('products').select('id,slug,model,category,name_i18n,description_i18n,image_url,specs,features,extra_data').eq('tenant_id', tenantId).eq('is_active', true).order('sort_order')
  if (error || !data?.length) return fallbackProducts
  return data.map(mapProduct)
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const products = await fetchProductsData()
  return products.find((product) => product.slug === slug) ?? null
}
