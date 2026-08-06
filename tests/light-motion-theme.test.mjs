import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { VERIFIED_PRODUCT_SPECS } from '../lib/verified-product-specs.ts'

const root = path.resolve(import.meta.dirname, '..')
const css = fs.readFileSync(path.join(root, 'app/globals.css'), 'utf8')
const hero = fs.readFileSync(path.join(root, 'components/home/hero-section.tsx'), 'utf8')
const homeSections = fs.readFileSync(path.join(root, 'components/home/home-sections.tsx'), 'utf8')
const layout = fs.readFileSync(path.join(root, 'app/layout.tsx'), 'utf8')
const header = fs.readFileSync(path.join(root, 'components/layout/site-header.tsx'), 'utf8')
const solutions = fs.readFileSync(path.join(root, 'lib/solutions.ts'), 'utf8')
const products = fs.readFileSync(path.join(root, 'lib/products.ts'), 'utf8')
const productCatalog = fs.readFileSync(path.join(root, 'components/products/product-catalog.tsx'), 'utf8')
const footer = fs.readFileSync(path.join(root, 'components/layout/site-footer.tsx'), 'utf8')
const productsDb = fs.readFileSync(path.join(root, 'lib/products-db.ts'), 'utf8')
const verifiedSpecs = fs.readFileSync(path.join(root, 'lib/verified-product-specs.ts'), 'utf8')
const inquiryForm = fs.readFileSync(path.join(root, 'components/inquiry-form.tsx'), 'utf8')
const rootLayout = fs.readFileSync(path.join(root, 'app/layout.tsx'), 'utf8')
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8')
const pages = fs.readdirSync(path.join(root, 'app'), { recursive: true })
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => fs.readFileSync(path.join(root, 'app', file), 'utf8'))
  .join('\n')

test('public theme uses a light canvas and no former dark page root', () => {
  assert.match(css, /--background:\s*#F[0-9A-F]{5}/i)
  assert.doesNotMatch(pages, /bg-\[#050E1A\]/)
})

test('homepage sections do not restore the former dark canvas', () => {
  assert.doesNotMatch(homeSections, /(?:bg|from|via|to)-\[#(?:030B16|050E1A|070F1F|0A1530)\]/i)
})

test('brand assets use the transparent customer logo and HN favicon', () => {
  assert.match(layout, /\/favicon\.png/)
  assert.doesNotMatch(layout, /\/icon\.svg/)
  assert.match(header, /\/images\/logo-transparent\.png/)
  assert.ok(fs.existsSync(path.join(root, 'public/favicon.png')))
  assert.ok(fs.existsSync(path.join(root, 'public/images/logo-transparent.png')))
})

test('solution cards use clean customer R2 images without dark wash overlays', () => {
  assert.match(homeSections, /pub-c7a22068052144a5805830c30d280128\.r2\.dev/)
  assert.doesNotMatch(homeSections, /from-\[#0B1E3D\]\/80/)
})

test('multi-arc and magnetron products use different customer-supplied views', () => {
  assert.match(homeSections, /products\/hn-ma-001\/customer-update-2026-08\/01\.webp/)
  assert.match(homeSections, /products\/hn-ms-002\/01\.png/)
  assert.match(solutions, /MA001:\s+'[^']+\/hn-ma-001\/customer-update-2026-08\/01\.webp'/)
  assert.match(solutions, /MS002:\s+'[^']+\/hn-ms-002\/01\.png'/)
  assert.match(products, /MA001:\s+'[^']+\/hn-ma-001\/customer-update-2026-08\/01\.webp'/)
  assert.match(products, /MS002:\s+'[^']+\/hn-ms-002\/01\.png'/)
})

test('homepage exposes rich motion with an accessible reduced-motion fallback', () => {
  const motionLayers = hero.match(/animate-(?:float|orbit|drift|light|gradient|pulse)/g) ?? []
  assert.ok(motionLayers.length >= 6, `expected at least 6 motion layers, found ${motionLayers.length}`)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
})

test('deposition technology cards align by row on desktop without forcing mobile height', () => {
  assert.match(homeSections, /grid md:grid-cols-2 md:items-stretch gap-5/)
  assert.match(homeSections, /<RevealSection key=\{tech\.abbrev\} className="md:h-full">/)
  assert.match(homeSections, /glass-card[^"\n]*md:h-full md:flex md:flex-col/)
  assert.match(homeSections, /<ul className="space-y-1\.5 mb-5 md:flex-1">/)
  assert.doesNotMatch(homeSections, /(?:^|\s)h-full(?:\s|$)/m)
})

test('catalog uses compact product-line tabs instead of search and advanced filters', () => {
  assert.doesNotMatch(productCatalog, /Search by name|aria-label="Search equipment"|>\s*Filters\s*</)
  assert.match(productCatalog, /All Systems/)
  assert.match(productCatalog, /Industrial/)
  assert.match(productCatalog, /Laboratory/)
})

test('dark footer CTA explicitly resets its foreground colors', () => {
  assert.match(footer, /<h2 className="[^"]*text-white[^"]*">[\s\S]{0,80}Ready to discuss your coating process\?/)
  assert.match(footer, /<p className="[^"]*text-\[#C8D5EA\][^"]*">[\s\S]{0,120}Our engineers are available/)
})

test('light footer uses accessible dark accents instead of low-contrast gold text', () => {
  assert.doesNotMatch(footer, /<h3 className="[^"]*text-\[var\(--gold\)\]/)
  assert.match(footer, /text-\[#755B10\]/)
})

test('public copy avoids unverified response times, hours, and inflated product claims', () => {
  assert.doesNotMatch(pages, /responds within one business day|Business Hours/i)
  assert.doesNotMatch(inquiryForm, /respond within one business day/i)
  assert.doesNotMatch(products, /preferred platform|unparalleled flexibility|leading universities/i)
})

test('site metadata contains no v0 branding and provides a favicon fallback', () => {
  assert.doesNotMatch(rootLayout, /generator:\s*['"]v0\.app['"]/i)
  assert.equal(fs.existsSync(path.join(root, 'app/favicon.ico/route.ts')), true)
})

test('sitemap renders database-backed product and article routes at request time', () => {
  assert.match(sitemap, /export\s+const\s+revalidate\s*=\s*0/)
  assert.match(sitemap, /export\s+const\s+dynamic\s*=\s*['"]force-dynamic['"]/)
  assert.match(sitemap, /getAllArticles\s*\(/)
  assert.match(sitemap, /Cache-Control['"]?\s*:\s*['"]no-store/)
})


test('customer-facing pages and product fallback use tenant R2 images instead of v0 blobs', () => {
  assert.doesNotMatch(`${pages}\n${homeSections}\n${products}\n${hero}`, /hebbkx1anhila5yf|blob\.vercel-storage/)
})

test('configured Supabase product failures are not silently masked by fallback data', () => {
  assert.match(productsDb, /if \(error\) throw new Error/)
  assert.doesNotMatch(productsDb, /if \(error \|\| !data\?\.length\) return fallbackProducts/)
})

test('all fallback products use the Excel-verified specification map', () => {
  const mappedProducts = products.match(/specifications: VERIFIED_PRODUCT_SPECS\['hn-[^']+'\]/g) ?? []
  assert.equal(mappedProducts.length, 10)
  assert.doesNotMatch(`${products}\n${pages}`, /Up to 60 A|0 – 1000 V|Up to 10 kW typical|RHEED/)
  assert.equal((products.match(/optionalModules: \[\]/g) ?? []).length, 10)
  assert.match(verifiedSpecs, /φ800–1800 mm/)
  assert.match(verifiedSpecs, /ultimate pressure up to 5 × 10⁻⁴ Pa/)
})

test('customer-confirmed product names and thin-film capabilities stay exact', () => {
  assert.match(products, /name: 'Multi-arc Ion Plating Equipment'/)
  assert.match(products, /name: 'Magnetron Sputtering Equipment'/)
  assert.doesNotMatch(`${products}\n${inquiryForm}`, /Pure (?:Multi-arc|Magnetron)/)

  const magnetronModels = ['hn-ms-002', 'hn-ma-ms-003', 'hn-ms-eb-005', 'hn-ms-r-007', 'hn-ma-ms-r-008', 'hn-ms-eb-r-010']
  for (const slug of magnetronModels) {
    const specs = VERIFIED_PRODUCT_SPECS[slug]
    assert.ok(specs.some(({ value }) => value.includes('ambient to 1200 °C')), `${slug} must include ambient to 1200 °C`)
    assert.ok(specs.some(({ value }) => /in-situ annealing/i.test(value)), `${slug} must include in-situ annealing`)
    assert.ok(specs.some(({ value }) => /in-situ ion cleaning/i.test(value)), `${slug} must include in-situ ion cleaning`)
    assert.ok(specs.some(({ value }) => /wafers up to 8 inches/i.test(value)), `${slug} must include 8-inch wafer compatibility`)
  }

  const electronBeamModels = ['hn-eb-004', 'hn-ms-eb-005', 'hn-eb-r-009', 'hn-ms-eb-r-010']
  for (const slug of electronBeamModels) {
    assert.ok(VERIFIED_PRODUCT_SPECS[slug].some(({ value }) => /ion-beam-assisted deposition/i.test(value)), `${slug} must include ion-beam-assisted deposition`)
  }

  const vacuum = VERIFIED_PRODUCT_SPECS['hn-ms-eb-r-010'].find(({ label }) => label === 'Vacuum System')?.value
  assert.equal(vacuum, 'Ultra-high-vacuum system with independent zoned pumping; ultimate pressure ≤ 3 × 10⁻⁸ Torr')
})

test('six customer-corrected products use dedicated August image sets', () => {
  for (const key of ['MA001', 'MSEB005', 'MAMSR008', 'EBR009', 'MSEBR010']) {
    assert.match(products, new RegExp(`${key}:\\s+'[^']+/customer-update-2026-08/01\\.webp'`))
  }
  assert.match(products, /hn-ms-r-007\/customer-update-2026-08\/01\.webp/)
  assert.match(products, /const correctedGallery = \(slug: string\) => \[1, 2, 3\]/)
  assert.match(products, /hn-ms-r-007\/customer-update-2026-08\/02\.webp/)
})

test('three catalog products use verified front-view primary images', () => {
  for (const key of ['MAMS003', 'MAR006']) assert.match(products, new RegExp(`${key}:\\s+'[^']+/front-view-update-2026-08/01\\.webp'`))
  assert.match(products, /MSR007:\s+'[^']+\/front-view-update-2026-08-v2\/01\.webp'/)
  assert.match(homeSections, /products\/hn-ma-ms-003\/front-view-update-2026-08\/01\.webp/)
  assert.match(homeSections, /products\/hn-ms-r-007\/front-view-update-2026-08-v2\/01\.webp/)
})
