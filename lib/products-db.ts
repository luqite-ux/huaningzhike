import { createSupabaseClient, tenantId } from '@/lib/supabase'
import { products as fallbackProducts, type Product } from '@/lib/products'
import { DEFAULT_LOCALE, localizedList, localizedText } from '@/lib/i18n'

type Json = Record<string, unknown>
type ProductRow = {
  id: string | number; slug: string; model?: string | null; category?: string | null
  name_i18n?: Json | null; description_i18n?: Json | null; image_url?: string | null
  overview_i18n?: Json | null; features_i18n?: Json | null; applications_i18n?: Json | null; advantages_i18n?: Json | null
  specs?: unknown; features?: unknown; extra_data?: Json | null
}

const text = (value: unknown, fallback = '') => typeof value === 'string' && value.trim() ? value.trim() : fallback
const list = (value: unknown) => Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : []

export function mapProduct(row: ProductRow, locale = DEFAULT_LOCALE): Product {
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
    name: localizedText(nameI18n, locale, DEFAULT_LOCALE, fallback?.name ?? row.slug),
    category: text(row.category, fallback?.category ?? 'Industrial PVD Coating Equipment') as Product['category'],
    image,
    images: gallery.length ? [image, ...gallery.filter((url) => url !== image)] : (fallback?.images ?? [image]),
    summary: localizedText(descriptionI18n, locale, DEFAULT_LOCALE, fallback?.summary ?? ''),
    tagline: text(extra.tagline, fallback?.tagline ?? ''),
    principle: localizedText(row.overview_i18n, locale, DEFAULT_LOCALE, text(extra.principle, fallback?.principle ?? '')),
    advantages: localizedList(row.advantages_i18n, locale, DEFAULT_LOCALE,
      localizedList(row.features_i18n, locale, DEFAULT_LOCALE, list(row.features).length ? list(row.features) : (fallback?.advantages ?? []))),
    specifications: Array.isArray(row.specs)
      ? row.specs.filter((v): v is Product['specifications'][number] => !!v && typeof v === 'object' && 'label' in v && 'value' in v)
      : fallback?.specifications ?? [],
    optionalModules: list(extra.optionalModules),
    relatedSlugs: list(extra.relatedSlugs),
    applications: localizedList(row.applications_i18n, locale, DEFAULT_LOCALE,
      list(extra.applications).length ? list(extra.applications) : fallback?.applications ?? []) as Product['applications'],
    depositionProcess: text(extra.depositionProcess, fallback?.depositionProcess ?? 'Magnetron Sputtering') as Product['depositionProcess'],
  }
}

export async function fetchProductsData(locale = DEFAULT_LOCALE): Promise<Product[]> {
  const supabase = createSupabaseClient()
  if (!supabase) return fallbackProducts
  const { data, error } = await supabase.from('products').select('id,slug,model,category,name_i18n,description_i18n,overview_i18n,features_i18n,applications_i18n,advantages_i18n,image_url,specs,features,extra_data').eq('tenant_id', tenantId).eq('is_active', true).order('sort_order')
  if (error) throw new Error(`Unable to load tenant products: ${error.message}`)
  if (!data?.length) return []
  return data.map((row) => mapProduct(row, locale))
}

export async function fetchProductBySlug(slug: string, locale = DEFAULT_LOCALE): Promise<Product | null> {
  const products = await fetchProductsData(locale)
  return products.find((product) => product.slug === slug) ?? null
}
