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
  MA001:    'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ma-001/02.png',
  MS002:    'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-002/01.png',
  MAMS003:  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/As2wX5o00gI89Tbyu2N8p-epiZDHJWaVZB5Vj6qKZH03qvxl8p4L.png',
  EB004:    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/02b97i8SFXHFCYt2e7uUo-9FNY9SD1PetmILfEkaMCHjpwri4EIU.jpg',
  MSEB005:  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/wsKWupUDPtfRtscrWX29W-rodxdRoCKrSCHPQYtnb20FaBoMDoYy.png',
  MAR006:   'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/bu6Z5al3rNJwMo5AjhqrA-URYC4vBFofNGkqNACBY8OF2j9Xrq9w.png',
  MSR007:   'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/rSAgN2qxNFIQ9NB93uSHO-5cVa1ak9FMvEt90tBwru8a2xqt2sgy.png',
  MAMSR008: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/gmOaSfAfqZ3uJH47ZSJuv-5FyqgyTUUUrT91AT2luOc51tMbhe3p.png',
  EBR009:   'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/VPKnrEEWXFQehfDrD4W88-9dXBkOQwvxqTPKELY4FixZfzpzyOO8.png',
  MSEBR010: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/wsKWupUDPtfRtscrWX29W-rodxdRoCKrSCHPQYtnb20FaBoMDoYy.png',
} as const

/* ─── Product Catalog ─────────────────────────────────────────────────────────── */
export const products: Product[] = [
  /* ─── Industrial Series ──────────────────────────────────────────────────── */
  {
    id: 1,
    slug: 'hn-ma-001',
    model: 'HN-MA-001',
    name: 'Pure Multi-arc Ion Plating Equipment',
    category: 'Industrial PVD Coating Equipment',
    depositionProcess: 'Multi-arc Ion Plating',
    applications: ['Hard Decorative Coatings', 'Wear-resistant & DLC Coatings', 'Tool & Die Coatings'],
    image: IMG.MA001,
    images: [IMG.MA001, IMG.MAMS003],
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
    specifications: [
      { label: 'Chamber Volume', value: 'Configurable — contact for options' },
      { label: 'Base Pressure', value: '≤ 5 × 10⁻⁴ Pa' },
      { label: 'Arc Source Count', value: 'Multiple; configurable' },
      { label: 'Arc Source Power', value: 'Up to 60 A per source (configurable)' },
      { label: 'Substrate Bias', value: 'DC / Pulsed DC, 0 – 1000 V' },
      { label: 'Substrate Heating', value: 'Up to 500 °C' },
      { label: 'Reactive Gas', value: 'N₂, Ar, CH₄, C₂H₂ (configurable)' },
      { label: 'Control System', value: 'PLC + HMI touchscreen' },
      { label: 'Cooling', value: 'Water-cooled chamber and sources' },
      { label: 'Power Supply', value: '3-phase, configurable voltage / frequency' },
    ],
    optionalModules: [
      'Closed-loop mass flow controller (MFC) array',
      'In-situ plasma emission monitoring (OES)',
      'Automated load-lock chamber',
      'Elevated-temperature substrate fixture',
      'Extended arc source maintenance kit',
      'Remote process monitoring interface',
    ],
    relatedSlugs: ['hn-ms-002', 'hn-ma-ms-003', 'hn-ma-r-006'],
  },
  {
    id: 2,
    slug: 'hn-ms-002',
    model: 'HN-MS-002',
    name: 'Pure Magnetron Sputtering Equipment',
    category: 'Industrial PVD Coating Equipment',
    depositionProcess: 'Magnetron Sputtering',
    applications: ['Optical Thin Films', 'Semiconductor Thin Films', 'Wear-resistant & DLC Coatings'],
    image: IMG.MS002,
    images: [IMG.MS002, IMG.MSR007],
    tagline: 'High-uniformity sputtering for optical and functional films',
    summary:
      'The HN-MS-002 industrial magnetron sputtering system delivers exceptional thin-film uniformity and composition control, making it the preferred platform for optical coatings, functional films, and precision device fabrication. Planar and cylindrical magnetron configurations are available to suit target geometry and process requirements.',
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
    ],
    specifications: [
      { label: 'Chamber Configuration', value: 'Vertical or horizontal; contact for options' },
      { label: 'Base Pressure', value: '≤ 5 × 10⁻⁴ Pa' },
      { label: 'Sputtering Power', value: 'DC / RF / Pulsed DC (configurable)' },
      { label: 'Target Configuration', value: 'Planar or cylindrical; multiple targets available' },
      { label: 'Substrate Bias', value: 'DC / RF, 0 – 500 V' },
      { label: 'Substrate Temperature', value: 'Ambient to 400 °C (configurable)' },
      { label: 'Working Gas', value: 'Ar; optional N₂, O₂, or mixed' },
      { label: 'Pumping System', value: 'Turbomolecular + mechanical pre-pump' },
      { label: 'Control System', value: 'PLC + HMI touchscreen with recipe management' },
    ],
    optionalModules: [
      'Closed-loop reactive gas control (Lambda sensor / OES)',
      'Substrate rotation and revolution fixture',
      'In-situ film thickness monitoring (quartz crystal / optical)',
      'Load-lock transfer module',
      'Heated substrate stage up to 600 °C',
      'UHV upgrade package',
    ],
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
    ],
    specifications: [
      { label: 'Deposition Sources', value: 'Multi-arc + magnetron sputtering (configurable count)' },
      { label: 'Base Pressure', value: '≤ 5 × 10⁻⁴ Pa' },
      { label: 'Arc Power', value: 'Configurable per source' },
      { label: 'Sputtering Power', value: 'DC / RF / Pulsed DC' },
      { label: 'Substrate Bias', value: 'DC / Pulsed DC, 0 – 1000 V' },
      { label: 'Substrate Heating', value: 'Up to 500 °C' },
      { label: 'Reactive Gases', value: 'N₂, Ar, O₂, CH₄ (configurable)' },
      { label: 'Control System', value: 'Integrated PLC + touchscreen HMI' },
    ],
    optionalModules: [
      'OES closed-loop reactive gas control',
      'In-situ thickness monitoring',
      'Automated multi-recipe batch sequencing',
      'Cryo-pumping upgrade for lower base pressure',
      'Heated rotating fixture for complex geometry workpieces',
    ],
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
      'A high-energy electron beam — generated by a heated filament cathode and accelerated to kilovolt-range energies — is magnetically deflected onto a target material held in a cooled copper hearth. The concentrated energy evaporates the source material, creating a directional vapor flux that condenses on substrates positioned above. Ion-assist (IAD) sources may be added to improve film density and adhesion without elevating substrate temperature.',
    advantages: [
      'High-purity evaporation with minimal source contamination',
      'Compatible with refractory metals, SiO₂, TiO₂, Ta₂O₅, MgF₂, and more',
      'Multi-pocket rotating hearth for sequential material deposition',
      'Ion-assist option for dense, low-stress films at low substrate temperature',
      'Crystal oscillator in-situ thickness and rate control',
      'Large-area planetary substrate fixture for optical coating uniformity',
      'Clean UHV-compatible chamber design',
    ],
    specifications: [
      { label: 'E-Beam Power', value: 'Configurable; up to 10 kW typical' },
      { label: 'Base Pressure', value: '≤ 5 × 10⁻⁴ Pa (≤ 5 × 10⁻⁵ Pa with cryo option)' },
      { label: 'Hearth Pockets', value: 'Multi-pocket rotating; configurable count' },
      { label: 'Substrate Fixture', value: 'Planetary rotation for optical uniformity' },
      { label: 'Ion Assist', value: 'Optional RF / Kaufman ion source' },
      { label: 'Substrate Temperature', value: 'Ambient to 300 °C (configurable)' },
      { label: 'Deposition Rate Control', value: 'Quartz crystal microbalance (QCM)' },
      { label: 'Pumping', value: 'Turbomolecular + cryo (optional)' },
    ],
    optionalModules: [
      'RF ion-assist source (IAD)',
      'Optical broadband monitoring for layer-by-layer control',
      'Load-lock substrate transfer',
      'Cryogenic pumping upgrade',
      'Substrate heating to 500 °C',
      'Film stress measurement integration',
    ],
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
    images: [IMG.MSEB005, IMG.EB004, IMG.MS002],
    tagline: 'Unified sputtering and evaporation for advanced multilayer architectures',
    summary:
      'The HN-MS-EB-005 combines magnetron sputtering and electron beam evaporation within a single integrated vacuum system, offering unparalleled flexibility for advanced multilayer coating development. The platform is particularly suited to complex optical filter stacks, functional semiconductor films, and hybrid coating architectures that require both the directional purity of evaporation and the reactive compositional control of sputtering.',
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
    ],
    specifications: [
      { label: 'Source Configuration', value: 'Magnetron sputtering + e-beam evaporation' },
      { label: 'Base Pressure', value: '≤ 5 × 10⁻⁵ Pa' },
      { label: 'E-Beam Power', value: 'Configurable' },
      { label: 'Sputtering Power', value: 'DC / RF / Pulsed DC' },
      { label: 'Thickness Monitoring', value: 'QCM + optional optical monitor' },
      { label: 'Substrate Fixture', value: 'Planetary rotation' },
      { label: 'Substrate Temperature', value: 'Up to 350 °C' },
    ],
    optionalModules: [
      'Broadband optical monitoring (OBM)',
      'Ion-assist source',
      'Load-lock for high-throughput production',
      'Cryo-pump upgrade',
      'Automated recipe library management',
    ],
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
    specifications: [
      { label: 'Chamber Type', value: 'Small vertical cylindrical (configurable size)' },
      { label: 'Base Pressure', value: '≤ 5 × 10⁻³ Pa' },
      { label: 'Arc Source Count', value: '2–4 (configurable)' },
      { label: 'Arc Current', value: '40–80 A per source' },
      { label: 'Substrate Bias', value: 'DC / Pulsed DC, 0 – 1000 V' },
      { label: 'Max Substrate Temperature', value: 'Up to 400 °C' },
      { label: 'Pumping', value: 'Turbomolecular + dry scroll pump' },
      { label: 'Control', value: 'Touchscreen HMI with recipe storage' },
    ],
    optionalModules: [
      'Reactive gas MFC array (N₂, CH₄, C₂H₂)',
      'OES emission monitor',
      'Film adhesion scratch tester interface',
      'Extended heating fixture',
      'Additional arc source port',
    ],
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
    images: [IMG.MSR007, IMG.MS002],
    tagline: 'Precision research sputtering with full parameter accessibility',
    summary:
      'The HN-MS-R-007 is a research-grade magnetron sputtering platform built for thin-film research and process development in academic, semiconductor, and optical technology laboratories. Supporting multiple sputtering configurations — including co-sputtering and sequential deposition — the system provides the parameter range and in-situ measurement options expected of a premier research tool.',
    principle:
      'Planar or confocal magnetron sputtering sources enable DC, RF, and pulsed-DC operation across a wide range of metallic, ceramic, and compound target materials. The research-oriented design prioritizes measurement access, flexible geometry, and compatibility with analytical instruments.',
    advantages: [
      'Multi-target configuration for co-sputtering and alloy film development',
      'DC, RF, and pulsed-DC source options for conductive and insulating targets',
      'In-situ RHEED, QCM, or optical monitoring integration ports',
      'UHV-compatible chamber design for contamination-sensitive research',
      'Substrate temperature control from ambient to 800 °C',
      'Multiple gas inlet channels for reactive and mixed-atmosphere studies',
      'Compatible with standard 2-inch and 3-inch wafer substrates',
    ],
    specifications: [
      { label: 'Chamber', value: 'Stainless steel, CF-flanged research chamber' },
      { label: 'Base Pressure', value: '≤ 5 × 10⁻⁵ Pa' },
      { label: 'Target Size', value: '2-inch and 3-inch (configurable)' },
      { label: 'Source Power', value: 'DC up to 500 W; RF up to 300 W' },
      { label: 'Substrate Heating', value: 'Up to 800 °C' },
      { label: 'Gas Inlets', value: '4+ MFC-controlled channels' },
      { label: 'Pumping', value: 'Turbomolecular + dry pre-pump' },
      { label: 'Substrate Rotation', value: 'Motorized with adjustable speed' },
    ],
    optionalModules: [
      'In-situ RHEED system',
      'Substrate cooling stage (down to 0 °C)',
      'Load-lock sample transfer',
      'RF matching network upgrade',
      'Mass spectrometer residual gas analyzer',
      'Glancing-angle deposition (GLAD) fixture',
    ],
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
    images: [IMG.MAMSR008, IMG.MAMS003],
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
    ],
    specifications: [
      { label: 'Sources', value: 'Multi-arc + magnetron sputtering (configurable)' },
      { label: 'Base Pressure', value: '≤ 5 × 10⁻³ Pa' },
      { label: 'Arc Source Power', value: 'Configurable' },
      { label: 'Sputtering Power', value: 'DC / RF / Pulsed DC' },
      { label: 'Substrate Bias', value: 'DC / Pulsed DC' },
      { label: 'Substrate Temperature', value: 'Up to 500 °C' },
      { label: 'Gas Control', value: 'Multi-channel MFC array' },
    ],
    optionalModules: [
      'OES reactive gas control',
      'In-situ thickness monitor',
      'Extended gas manifold (CH₄, C₂H₂, O₂)',
      'Elevated substrate bias power supply',
    ],
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
    images: [IMG.EBR009, IMG.EB004],
    tagline: 'Compact high-purity evaporation for optical and device research',
    summary:
      'The HN-EB-R-009 is a compact electron beam evaporation system tailored for optical coating research, semiconductor device layer development, and thin-film physics studies. Its intuitive touchscreen interface and small chamber volume make it an accessible, high-precision tool for research groups depositing optical multilayers, transparent conductive oxides, and dielectric films.',
    principle:
      'Focused electron beam evaporation heats source materials in a cooled copper hearth, generating a controlled vapor flux directed at the substrate. In-situ quartz crystal monitoring provides real-time deposition rate and cumulative thickness feedback, enabling precise optical layer control. Ion-assist capability is available for improved film density at low substrate temperatures.',
    advantages: [
      'Compact benchtop-compatible form factor',
      'High material purity with minimal filament contamination',
      'Integrated touchscreen with intuitive recipe programming',
      'Multi-material hearth for sequential optical stack deposition',
      'QCM thickness and rate control included as standard',
      'Ion-assist option for low-temperature dense film deposition',
      'Compatible with standard optical substrate sizes',
    ],
    specifications: [
      { label: 'Chamber', value: 'Compact cylindrical stainless steel' },
      { label: 'E-Beam Power', value: 'Up to 5 kW (configurable)' },
      { label: 'Base Pressure', value: '≤ 5 × 10⁻⁴ Pa' },
      { label: 'Hearth Pockets', value: '4–6 pockets' },
      { label: 'Thickness Control', value: 'QCM standard' },
      { label: 'Substrate Size', value: 'Up to 150 mm wafer or equivalent' },
      { label: 'Substrate Heating', value: 'Up to 250 °C' },
    ],
    optionalModules: [
      'RF ion-assist source',
      'Optical broadband monitoring',
      'Load-lock for sample transfer',
      'Substrate rotation fixture',
      'Heated substrate stage',
    ],
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
    images: [IMG.MSEBR010, IMG.MSR007, IMG.EBR009],
    tagline: 'Advanced research platform integrating sputtering and evaporation',
    summary:
      'The HN-MS-EB-R-010 is HUANING ZHIKE\'s most versatile laboratory platform, integrating magnetron sputtering and electron beam evaporation in a single high-vacuum research chamber. Designed for leading universities, national laboratories, and semiconductor research centers, the system supports the broadest range of thin-film research activities — from optical multilayer development to semiconductor device heterostructures.',
    principle:
      'A shared high-vacuum environment with independent magnetron sputtering and e-beam evaporation sources allows researchers to leverage the strengths of each technique within a single experiment. Sputtering excels at reactive deposition of stoichiometrically controlled compounds; evaporation delivers low-defect, high-purity films of refractory materials and compound semiconductors. Sequential and co-deposition modes are supported.',
    advantages: [
      'Broadest material and process coverage in a single research system',
      'High-vacuum design suitable for device-quality film research',
      'Independent control of all source, substrate, and atmosphere parameters',
      'Multiple in-situ diagnostic integration ports',
      'Sequential and co-deposition capability',
      'Supports both wafer-scale and coupon substrates',
      'Advanced data acquisition and logging for research publication quality',
    ],
    specifications: [
      { label: 'Sources', value: 'Magnetron sputtering (multi-target) + e-beam evaporation' },
      { label: 'Base Pressure', value: '≤ 5 × 10⁻⁵ Pa' },
      { label: 'Sputtering Power', value: 'DC / RF / Pulsed DC per target' },
      { label: 'E-Beam Power', value: 'Configurable' },
      { label: 'Substrate Temperature', value: 'Up to 800 °C' },
      { label: 'Substrate Bias', value: 'DC / RF, programmable' },
      { label: 'In-situ Monitoring', value: 'QCM + optional OBM / RHEED ports' },
    ],
    optionalModules: [
      'In-situ RHEED',
      'Optical broadband monitoring',
      'UHV upgrade (cryopump)',
      'Wafer load-lock',
      'Mass spectrometer (RGA)',
      'Film stress measurement',
      'Substrate cooling to 0 °C',
    ],
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
