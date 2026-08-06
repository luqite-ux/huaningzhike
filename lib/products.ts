import { VERIFIED_PRODUCT_SPECS } from './verified-product-specs'

// ─── Helpers ─────────────────────────────────────────────────────────────────
// (declared above data so they can be used anywhere after import)

export type DepositionProcess =
  | 'Multi-arc Ion Plating'
  | 'Magnetron Sputtering'
  | 'Multi-arc & Magnetron Sputtering'
  | 'Electron Beam Evaporation'
  | 'Magnetron & Electron Beam'

export type ProductCategory = 'Industrial PVD Coating Equipment' | 'Lab R&D PVD Coating Equipment'

export type ApplicationArea =
  | 'Hard Decorative Coatings'
  | 'Wear-resistant & DLC Coatings'
  | 'Optical Thin Films'
  | 'Semiconductor Thin Films'
  | 'Research & Development'
  | 'Tool & Die Coatings'

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: number
  slug: string
  model: string
  name: string
  category: ProductCategory
  depositionProcess: DepositionProcess
  applications: ApplicationArea[]
  image: string
  images: string[]
  tagline: string
  summary: string
  principle: string
  advantages: string[]
  specifications: ProductSpec[]
  optionalModules: string[]
  relatedSlugs: string[]
}

/* ─── Image URLs ──────────────────────────────────────────────────────────────── */
const IMG = {
  MA001:    'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ma-001/customer-update-2026-08/01.webp',
  MS002:    'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-002/01.png',
  MAMS003:  'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ma-ms-003/01.png',
  EB004:    'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-eb-004/01.jpg',
  MSEB005:  'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-eb-005/customer-update-2026-08/01.webp',
  MAR006:   'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ma-r-006/01.png',
  MSR007:   'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-r-007/customer-update-2026-08/01.webp',
  MAMSR008: 'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ma-ms-r-008/customer-update-2026-08/01.webp',
  EBR009:   'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-eb-r-009/customer-update-2026-08/01.webp',
  MSEBR010: 'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-eb-r-010/customer-update-2026-08/01.webp',
} as const

const correctedGallery = (slug: string) => [1, 2].map((index) =>
  `https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/${slug}/customer-update-2026-08/0${index}.webp`,
)

/* ─── Product Catalog ─────────────────────────────────────────────────────────── */
export const products: Product[] = [
  /* ─── Industrial Series ──────────────────────────────────────────────────── */
  {
    id: 1,
    slug: 'hn-ma-001',
    model: 'HN-MA-001',
    name: 'Multi-arc Ion Plating Equipment',
    category: 'Industrial PVD Coating Equipment',
    depositionProcess: 'Multi-arc Ion Plating',
    applications: ['Hard Decorative Coatings', 'Wear-resistant & DLC Coatings', 'Tool & Die Coatings'],
    image: IMG.MA001,
    images: correctedGallery('hn-ma-001'),
    tagline: 'High-throughput arc ion plating for industrial production',
    summary:
      'The HN-MA-001 is a high-productivity multi-arc ion plating system engineered for demanding industrial coating environments. Purpose-built for batch production of wear-resistant and decorative hard coatings on metal components, tools, and dies, the system combines robust chamber architecture with precise process control to deliver consistent film performance across large workpiece batches.',
    principle:
      'Multi-arc ion plating operates by sustaining arc discharges on metallic cathode targets. The arc spots vaporize and ionize target material at high rates, producing a highly ionized plasma flux that deposits dense, adherent thin films on substrate surfaces. Substrate bias voltage accelerates ions toward the workpiece, promoting film densification and improved adhesion.',
    advantages: [
      'High deposition rate enables efficient batch production',
      'High ionization ratio produces dense, well-adhered coatings',
      'Compatible with TiN, TiAlN, CrN, and multi-element nitride coatings',
      'Multi-zone cathode arrangement supports uniform large-area coverage',
      'Integrated bias power supply for film property control',
      'Stainless-steel vacuum chamber with optimized pumping configuration',
      'Programmable PLC-based process control with recipe management',
    ],
    specifications: VERIFIED_PRODUCT_SPECS['hn-ma-001'],
    optionalModules: [],
    relatedSlugs: ['hn-ms-002', 'hn-ma-ms-003', 'hn-ma-r-006'],
  },
  {
    id: 2,
    slug: 'hn-ms-002',
    model: 'HN-MS-002',
    name: 'Magnetron Sputtering Equipment',
    category: 'Industrial PVD Coating Equipment',
    depositionProcess: 'Magnetron Sputtering',
    applications: ['Optical Thin Films', 'Semiconductor Thin Films', 'Wear-resistant & DLC Coatings'],
    image: IMG.MS002,
    images: [IMG.MS002, IMG.MSR007],
    tagline: 'High-uniformity sputtering for optical and functional films',
    summary:
      'The HN-MS-002 industrial magnetron sputtering system is designed for thin-film uniformity and composition control in optical coatings, functional films, and precision device fabrication. Planar and cylindrical magnetron configurations are available to suit target geometry and process requirements.',
    principle:
      'Magnetron sputtering confines a plasma near the target surface using crossed electric and magnetic fields, enabling high-rate sputtering of a wide range of metallic, ceramic, and compound target materials. DC, RF, or pulsed DC power may be applied depending on target conductivity. Reactive sputtering in nitrogen or oxygen atmospheres allows deposition of nitride, oxide, and oxynitride films.',
    advantages: [
      'Excellent film uniformity across large substrates',
      'DC, RF, and pulsed-DC power supply options',
      'Reactive sputtering capability for nitrides and oxides',
      'Low substrate thermal load during deposition',
      'Wide target material compatibility: metals, alloys, ceramics',
      'Configurable multi-target carousel for multilayer deposition',
      'Process recipe storage and automated sequence execution',
      'Wide-range substrate heating from ambient to 1200 °C with in-situ annealing',
      'Integrated in-situ ion cleaning for substrate preparation',
      'Compatible with wafers up to 8 inches and small research samples',
    ],
    specifications: VERIFIED_PRODUCT_SPECS['hn-ms-002'],
    optionalModules: [],
    relatedSlugs: ['hn-ma-001', 'hn-ma-ms-003', 'hn-ms-r-007'],
  },
  {
    id: 3,
    slug: 'hn-ma-ms-003',
    model: 'HN-MA-MS-003',
    name: 'Multi-arc & Magnetron Sputtering Composite Coating Equipment',
    category: 'Industrial PVD Coating Equipment',
    depositionProcess: 'Multi-arc & Magnetron Sputtering',
    applications: ['Hard Decorative Coatings', 'Wear-resistant & DLC Coatings', 'Tool & Die Coatings', 'Optical Thin Films'],
    image: IMG.MAMS003,
    images: [IMG.MAMS003, IMG.MA001, IMG.MS002],
    tagline: 'Combine arc and sputtering in one integrated production platform',
    summary:
      'The HN-MA-MS-003 integrates multi-arc ion plating and magnetron sputtering sources within a single vacuum chamber, enabling sequential or simultaneous multi-process depositions. This composite architecture supports the creation of complex multilayer coating stacks — such as adhesion interlayers deposited by arc followed by functional overcoats applied by sputtering — without breaking vacuum.',
    principle:
      'By combining the high ionization and deposition rate of multi-arc with the compositional precision and low macro-particle generation of magnetron sputtering, the HN-MA-MS-003 enables engineered coating architectures impossible with single-process systems. Arc sources handle adhesion layers and high-hardness nitrides; sputtering targets deposit smooth, stoichiometrically controlled functional layers.',
    advantages: [
      'Single-chamber multi-process architecture eliminates inter-process contamination',
      'Sequential or simultaneous operation of arc and sputtering sources',
      'Enables graded interlayers, multilayer stacks, and nanocomposite films',
      'Wider composition space than any single-process system',
      'Common vacuum, heating, and bias infrastructure reduces footprint',
      'Flexible target-to-substrate geometry for uniform coverage',
      'Full PLC recipe management with per-process parameter control',
      'Wide-range substrate heating from ambient to 1200 °C with in-situ annealing',
      'Integrated in-situ ion cleaning and compatibility with wafers up to 8 inches',
    ],
    specifications: VERIFIED_PRODUCT_SPECS['hn-ma-ms-003'],
    optionalModules: [],
    relatedSlugs: ['hn-ma-001', 'hn-ms-002', 'hn-ma-ms-r-008'],
  },
  {
    id: 4,
    slug: 'hn-eb-004',
    model: 'HN-EB-004',
    name: 'Electron Beam Evaporation Coating Equipment',
    category: 'Industrial PVD Coating Equipment',
    depositionProcess: 'Electron Beam Evaporation',
    applications: ['Optical Thin Films', 'Semiconductor Thin Films', 'Research & Development'],
    image: IMG.EB004,
    images: [IMG.EB004, IMG.MSEBR010],
    tagline: 'High-purity evaporation for precision optical and semiconductor films',
    summary:
      'The HN-EB-004 electron beam evaporation system is engineered for deposition of high-purity, low-contamination thin films on optical components, semiconductor substrates, and precision devices. The focused electron beam delivers precise thermal energy to the source material, enabling evaporation of refractory metals and high-melting-point oxides with excellent film stoichiometry control.',
    principle:
      'A high-energy electron beam — generated by a heated filament cathode and accelerated to kilovolt-range energies — is magnetically deflected onto a target material held in a cooled copper hearth. The concentrated energy evaporates the source material, creating a directional vapor flux that condenses on substrates positioned above. Configured ion-beam-assisted deposition improves film density and adhesion without elevating substrate temperature.',
    advantages: [
      'High-purity evaporation with minimal source contamination',
      'Compatible with refractory metals, SiO₂, TiO₂, Ta₂O₅, MgF₂, and more',
      'Multi-pocket rotating hearth for sequential material deposition',
      'Ion-beam-assisted deposition for dense, low-stress films at low substrate temperature',
      'Crystal oscillator in-situ thickness and rate control',
      'Large-area planetary substrate fixture for optical coating uniformity',
      'Clean UHV-compatible chamber design',
    ],
    specifications: VERIFIED_PRODUCT_SPECS['hn-eb-004'],
    optionalModules: [],
    relatedSlugs: ['hn-ms-eb-005', 'hn-ms-002', 'hn-eb-r-009'],
  },
  {
    id: 5,
    slug: 'hn-ms-eb-005',
    model: 'HN-MS-EB-005',
    name: 'Magnetron & Electron Beam Composite Coating Equipment',
    category: 'Industrial PVD Coating Equipment',
    depositionProcess: 'Magnetron & Electron Beam',
    applications: ['Optical Thin Films', 'Semiconductor Thin Films', 'Wear-resistant & DLC Coatings'],
    image: IMG.MSEB005,
    images: correctedGallery('hn-ms-eb-005'),
    tagline: 'Unified sputtering and evaporation for advanced multilayer architectures',
    summary:
      'The HN-MS-EB-005 combines magnetron sputtering and electron beam evaporation within a single integrated vacuum system for advanced multilayer coating development. The platform supports optical filter stacks, functional semiconductor films, and hybrid coating architectures that use evaporation and reactive sputtering in one process environment.',
    principle:
      'Magnetron sputtering and e-beam evaporation sources are mounted in a shared high-vacuum chamber, with deposition sequences managed by an integrated PLC controller. Each source technology contributes distinct capabilities: magnetron sputtering provides reactive compound deposition with excellent lateral uniformity, while electron beam evaporation delivers refractory and high-purity material deposition with precise rate control via QCM monitoring.',
    advantages: [
      'Combines evaporation purity with sputtering compositional control',
      'Single-vacuum multilayer sequences without air breaks',
      'Suitable for optical bandpass filters, anti-reflection stacks, and functional films',
      'Independent source control with synchronized recipe sequencing',
      'In-situ thickness and rate monitoring for both source types',
      'Compatible with a broad library of metallic and oxide materials',
      'Engineered for reproducible multilayer performance in production environments',
      'Wide-range substrate heating from ambient to 1200 °C with in-situ annealing',
      'Integrated in-situ ion cleaning and compatibility with wafers up to 8 inches',
      'Ion-beam-assisted deposition for enhanced film density and adhesion',
    ],
    specifications: VERIFIED_PRODUCT_SPECS['hn-ms-eb-005'],
    optionalModules: [],
    relatedSlugs: ['hn-eb-004', 'hn-ms-002', 'hn-ms-eb-r-010'],
  },

  /* ─── Lab R&D Series ─────────────────────────────────────────────────────── */
  {
    id: 6,
    slug: 'hn-ma-r-006',
    model: 'HN-MA-R-006',
    name: 'Small Multi-arc Ion Plating R&D Equipment',
    category: 'Lab R&D PVD Coating Equipment',
    depositionProcess: 'Multi-arc Ion Plating',
    applications: ['Research & Development', 'Wear-resistant & DLC Coatings', 'Hard Decorative Coatings'],
    image: IMG.MAR006,
    images: [IMG.MAR006, IMG.MA001],
    tagline: 'Compact arc plating platform for process development and small batches',
    summary:
      'The HN-MA-R-006 is a laboratory-scale multi-arc ion plating system designed for process research, coating development, and small-batch production in university laboratories, research institutes, and industrial R&D centers. Its compact footprint and accessible chamber design enable rapid iteration of arc plating processes at a scale appropriate for coupon-level and small-component coating studies.',
    principle:
      'Identical deposition physics to the industrial HN-MA-001, scaled to a laboratory chamber volume. Arc sources generate highly ionized metal plasma for adherent, dense coating deposition. The simplified mechanical layout and accessible chamber promote efficient process development workflows.',
    advantages: [
      'Compact footprint suitable for laboratory environments',
      'Accessible chamber design for rapid target and fixture changes',
      'Scalable process parameters transferable to industrial systems',
      'Independent arc source control for process optimization',
      'Substrate bias control for film property studies',
      'Integrated heating for substrate temperature studies',
      'Suitable for coupon, small component, and sample plate coating',
    ],
    specifications: VERIFIED_PRODUCT_SPECS['hn-ma-r-006'],
    optionalModules: [],
    relatedSlugs: ['hn-ma-001', 'hn-ma-ms-r-008', 'hn-ms-r-007'],
  },
  {
    id: 7,
    slug: 'hn-ms-r-007',
    model: 'HN-MS-R-007',
    name: 'Small Magnetron Sputtering R&D Equipment',
    category: 'Lab R&D PVD Coating Equipment',
    depositionProcess: 'Magnetron Sputtering',
    applications: ['Research & Development', 'Optical Thin Films', 'Semiconductor Thin Films'],
    image: IMG.MSR007,
    images: correctedGallery('hn-ms-r-007'),
    tagline: 'Precision research sputtering with full parameter accessibility',
    summary:
      'The HN-MS-R-007 is a research-grade magnetron sputtering platform built for thin-film research and process development in academic, semiconductor, and optical technology laboratories. Supporting multiple sputtering configurations — including co-sputtering and sequential deposition — the system provides the parameter range and in-situ measurement options expected of a premier research tool.',
    principle:
      'Planar or confocal magnetron sputtering sources enable DC, RF, and pulsed-DC operation across a wide range of metallic, ceramic, and compound target materials. The research-oriented design prioritizes measurement access, flexible geometry, and compatibility with analytical instruments.',
    advantages: [
      'Multi-target configuration for co-sputtering and alloy film development',
      'DC, RF, and pulsed-DC source options for conductive and insulating targets',
      'Configurable monitoring interfaces defined during system engineering',
      'UHV-compatible chamber design for contamination-sensitive research',
      'Wide-range substrate temperature control from ambient to 1200 °C with in-situ annealing',
      'Multiple gas inlet channels for reactive and mixed-atmosphere studies',
      'Integrated in-situ ion cleaning for substrate preparation',
      'Compatible with wafers up to 8 inches and small research samples',
    ],
    specifications: VERIFIED_PRODUCT_SPECS['hn-ms-r-007'],
    optionalModules: [],
    relatedSlugs: ['hn-ms-002', 'hn-ma-ms-r-008', 'hn-ms-eb-r-010'],
  },
  {
    id: 8,
    slug: 'hn-ma-ms-r-008',
    model: 'HN-MA-MS-R-008',
    name: 'Lab Multi-arc & Magnetron Sputtering Composite Coating Platform',
    category: 'Lab R&D PVD Coating Equipment',
    depositionProcess: 'Multi-arc & Magnetron Sputtering',
    applications: ['Research & Development', 'Wear-resistant & DLC Coatings', 'Hard Decorative Coatings'],
    image: IMG.MAMSR008,
    images: correctedGallery('hn-ma-ms-r-008'),
    tagline: 'Research-scale composite platform for multilayer coating studies',
    summary:
      'The HN-MA-MS-R-008 brings the composite arc-and-sputtering architecture of the industrial HN-MA-MS-003 to the research laboratory. Designed for universities, coating research centers, and advanced industrial R&D departments, this platform supports systematic investigation of multilayer coating architectures, graded composition films, and novel hard coating compositions.',
    principle:
      'Arc and sputtering sources are independently controlled but share a common vacuum environment, enabling single-vacuum sequential or simultaneous deposition of layers from each source type. This allows researchers to precisely map the effect of each layer composition, thickness, and interface condition on film performance.',
    advantages: [
      'Combined arc and sputtering in a compact research chamber',
      'Enables systematic multilayer and graded coating research',
      'Independent power, bias, and gas control for each source type',
      'Scalable process parameters for industrial transfer',
      'Supports DLC, nanocomposite, and hard multilayer studies',
      'Accessible chamber design with multiple diagnostic ports',
      'Comprehensive data logging for research reproducibility',
      'Wide-range substrate heating from ambient to 1200 °C with in-situ annealing',
      'Integrated in-situ ion cleaning and compatibility with wafers up to 8 inches',
    ],
    specifications: VERIFIED_PRODUCT_SPECS['hn-ma-ms-r-008'],
    optionalModules: [],
    relatedSlugs: ['hn-ma-r-006', 'hn-ms-r-007', 'hn-ma-ms-003'],
  },
  {
    id: 9,
    slug: 'hn-eb-r-009',
    model: 'HN-EB-R-009',
    name: 'Small Electron Beam Evaporation R&D Equipment',
    category: 'Lab R&D PVD Coating Equipment',
    depositionProcess: 'Electron Beam Evaporation',
    applications: ['Research & Development', 'Optical Thin Films', 'Semiconductor Thin Films'],
    image: IMG.EBR009,
    images: correctedGallery('hn-eb-r-009'),
    tagline: 'Compact high-purity evaporation for optical and device research',
    summary:
      'The HN-EB-R-009 is a compact electron beam evaporation system tailored for optical coating research, semiconductor device layer development, and thin-film physics studies. Its intuitive touchscreen interface and small chamber volume make it an accessible, high-precision tool for research groups depositing optical multilayers, transparent conductive oxides, and dielectric films.',
    principle:
      'Focused electron beam evaporation heats source materials in a cooled copper hearth, generating a controlled vapor flux directed at the substrate. In-situ quartz crystal monitoring provides real-time deposition rate and cumulative thickness feedback, enabling precise optical layer control. Configured ion-beam-assisted deposition improves film density at low substrate temperatures.',
    advantages: [
      'Compact benchtop-compatible form factor',
      'High material purity with minimal filament contamination',
      'Integrated touchscreen with intuitive recipe programming',
      'Multi-material hearth for sequential optical stack deposition',
      'QCM thickness and rate control included as standard',
      'Ion-beam-assisted deposition for low-temperature dense film deposition',
      'Compatible with standard optical substrate sizes',
    ],
    specifications: VERIFIED_PRODUCT_SPECS['hn-eb-r-009'],
    optionalModules: [],
    relatedSlugs: ['hn-eb-004', 'hn-ms-eb-r-010', 'hn-ms-r-007'],
  },
  {
    id: 10,
    slug: 'hn-ms-eb-r-010',
    model: 'HN-MS-EB-R-010',
    name: 'Magnetron & Electron Beam Integrated Research Platform',
    category: 'Lab R&D PVD Coating Equipment',
    depositionProcess: 'Magnetron & Electron Beam',
    applications: ['Research & Development', 'Optical Thin Films', 'Semiconductor Thin Films'],
    image: IMG.MSEBR010,
    images: correctedGallery('hn-ms-eb-r-010'),
    tagline: 'Advanced research platform integrating sputtering and evaporation',
    summary:
      'The HN-MS-EB-R-010 integrates magnetron sputtering and electron beam evaporation in a single ultra-high-vacuum research chamber. Designed for university laboratories, materials research institutes, and semiconductor research centers, the system supports thin-film research activities ranging from optical multilayer development to semiconductor device heterostructures.',
    principle:
      'A shared ultra-high-vacuum environment with independent magnetron sputtering and e-beam evaporation sources allows researchers to leverage the strengths of each technique within a single experiment. Sputtering excels at reactive deposition of stoichiometrically controlled compounds; evaporation delivers low-defect, high-purity films of refractory materials and compound semiconductors. Sequential and co-deposition modes are supported.',
    advantages: [
      'Broadest material and process coverage in a single research system',
      'Ultra-high-vacuum design with an ultimate pressure of ≤ 3 × 10⁻⁸ Torr',
      'Independent control of all source, substrate, and atmosphere parameters',
      'Multiple in-situ diagnostic integration ports',
      'Sequential and co-deposition capability',
      'Wide-range substrate heating from ambient to 1200 °C with in-situ annealing',
      'Integrated in-situ ion cleaning for substrate preparation',
      'Supports wafers up to 8 inches and small research samples or coupons',
      'Ion-beam-assisted deposition for enhanced film density and adhesion',
      'Advanced data acquisition and logging for research publication quality',
    ],
    specifications: VERIFIED_PRODUCT_SPECS['hn-ms-eb-r-010'],
    optionalModules: [],
    relatedSlugs: ['hn-ms-eb-005', 'hn-ms-r-007', 'hn-eb-r-009'],
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs.map((s) => products.find((p) => p.slug === s)).filter(Boolean) as Product[]
}

export const industrialProducts = products.filter((p) => p.category === 'Industrial PVD Coating Equipment')
export const labProducts = products.filter((p) => p.category === 'Lab R&D PVD Coating Equipment')
