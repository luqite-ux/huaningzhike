export interface SolutionApplication {
  name: string
  description: string
}

export interface Solution {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  heroImage: string
  applications: SolutionApplication[]
  depositionMethods: string[]
  recommendedEquipment: string[]
  keyConsiderations: string[]
  overview: string
}

const IMG = {
  MS002:   'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-002/02.png',
  EB004:   'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-eb-004/01.jpg',
  MA001:   'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ma-001/01.png',
  MSR007:  'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-r-007/01.png',
} as const

export const solutions: Solution[] = [
  {
    id: 1,
    slug: 'optical-coatings',
    title: 'Optical Coatings',
    subtitle: 'Precision thin-film optics for photonics, defense, and consumer devices',
    description:
      'PVD deposition — primarily magnetron sputtering and electron beam evaporation — enables the precise, multi-layer optical stacks required for anti-reflection, high-reflection, bandpass, beamsplitter, and specialty filter coatings across UV, visible, and infrared wavelength ranges.',
    icon: 'Aperture',
    heroImage: IMG.EB004,
    overview:
      'Optical coating is one of the most precision-demanding applications of PVD technology. Achieving target reflectance or transmittance spectra requires exact control of layer thickness (often to sub-nanometer accuracy), refractive index, and surface roughness across multilayer stacks that may comprise dozens of individual layers. HUANING ZHIKE systems support the full range of optical thin-film work — from laboratory feasibility studies to production-scale coating of lenses, mirrors, filters, and photonic components.',
    applications: [
      { name: 'Anti-Reflection (AR) Coatings', description: 'Reduce reflection losses on optical lenses, display panels, and solar cells across broadband or targeted wavelength ranges.' },
      { name: 'High-Reflection (HR) Mirrors', description: 'Near-unity reflectance mirrors for laser cavities, telescope optics, and precision measurement instruments.' },
      { name: 'Bandpass and Notch Filters', description: 'Narrow spectral selection for fluorescence microscopy, lidar, spectroscopy, and laser line isolation.' },
      { name: 'Beamsplitters', description: 'Precise reflectance/transmittance ratios for interferometry, imaging, and optical measurement.' },
      { name: 'Infrared Optical Coatings', description: 'Coatings on germanium, ZnSe, and chalcogenide substrates for thermal imaging and defense optics.' },
      { name: 'Transparent Conductive Oxides', description: 'ITO and AZO films for display touch panels, photovoltaic cells, and electrochromic devices.' },
    ],
    depositionMethods: [
      'Electron Beam Evaporation — preferred for highest-purity dielectric and metal layer deposition; excellent layer-by-layer thickness control via QCM and optical monitoring',
      'Magnetron Sputtering — enables reactive deposition of oxide and nitride layers with excellent lateral uniformity; suited for large-area optical production',
      'Magnetron & Electron Beam Composite — combines strengths of both methods for complex stacks requiring both high-purity evaporation and reactive sputtering layers',
    ],
    recommendedEquipment: ['hn-eb-004', 'hn-ms-002', 'hn-ms-eb-005', 'hn-eb-r-009', 'hn-ms-eb-r-010'],
    keyConsiderations: [
      'In-situ optical broadband monitoring or QCM for precise layer thickness control',
      'Planetary substrate rotation for large-area uniformity',
      'Clean UHV or high-vacuum environment to minimize contamination',
      'Ion-assist deposition capability for dense, low-scatter films at reduced temperature',
      'Multi-material hearth or multi-target carousel for sequential stack deposition without air breaks',
    ],
  },
  {
    id: 2,
    slug: 'dlc-wear-coatings',
    title: 'DLC & Wear-Resistant Coatings',
    subtitle: 'Surface engineering for friction reduction, hardness, and component life extension',
    description:
      'Diamond-like carbon, hard nitride, and nanocomposite PVD coatings deposited by arc ion plating, magnetron sputtering, or composite processes extend the service life of cutting tools, forming dies, medical implants, and high-load tribological components.',
    icon: 'Layers',
    heroImage: IMG.MA001,
    overview:
      'Hard and wear-resistant PVD coatings represent one of the largest application volumes for industrial vacuum coating equipment. Coatings such as TiN, TiAlN, CrN, AlTiN, and DLC films impart significantly enhanced hardness, reduced friction, and improved oxidation resistance to the substrate surface without dimensional penalty — typical coating thicknesses range from 1 to 5 µm for tool coatings and up to 10+ µm for selected tribological applications. HUANING ZHIKE\'s industrial arc and composite systems are configured for efficient batch production of these coatings on tools, dies, and engineering components.',
    applications: [
      { name: 'Cutting Tools', description: 'TiAlN, TiN, AlCrN, and nanocomposite coatings on cemented carbide, HSS, and PCBN cutting inserts and end mills.' },
      { name: 'Forming Dies and Molds', description: 'CrN, TiCN, and DLC coatings on stamping dies, injection molds, and deep-draw tooling to reduce galling and extend die life.' },
      { name: 'DLC Hard Carbon Films', description: 'Hydrogenated and hydrogen-free DLC films for low-friction tribological applications: engine components, gears, bearings, and medical devices.' },
      { name: 'Medical and Implant Surfaces', description: 'CrN, TiN, and DLC coatings on orthopedic implants and surgical instruments for biocompatibility and wear resistance.' },
      { name: 'Decorative Hard Coatings', description: 'TiN gold, TiAlN anthracite, ZrN champagne, and CrN silver coatings on consumer hardware, watches, and architectural fittings.' },
      { name: 'Automotive Tribology', description: 'PVD coatings on piston rings, camshaft lobes, valve train components, and fuel injection parts for friction and wear reduction.' },
    ],
    depositionMethods: [
      'Multi-arc Ion Plating — high ionization ratio and deposition rate; preferred for dense TiN, TiAlN, and CrN industrial coatings in batch production',
      'Multi-arc & Magnetron Sputtering Composite — enables graded interfaces, multilayer architectures, and DLC integration within a single chamber',
      'Magnetron Sputtering — low-temperature DLC and nanocomposite film deposition; suited for temperature-sensitive substrates',
    ],
    recommendedEquipment: ['hn-ma-001', 'hn-ma-ms-003', 'hn-ms-002', 'hn-ma-r-006', 'hn-ma-ms-r-008'],
    keyConsiderations: [
      'Substrate cleaning and surface preparation are critical for adhesion of hard coatings',
      'Substrate bias voltage and temperature profoundly influence film microstructure and hardness',
      'Multi-arc systems provide the highest production throughput for hard nitride coatings',
      'Composite arc + sputtering enables DLC overcoats and graded multilayer architectures',
      'Process recipes require development and validation for each substrate-coating combination',
    ],
  },
  {
    id: 3,
    slug: 'semiconductor-thin-films',
    title: 'Semiconductor Thin Films',
    subtitle: 'PVD deposition for device fabrication and advanced materials research',
    description:
      'High-vacuum PVD systems support the deposition of metallic contacts, diffusion barriers, transparent conductors, ferroelectric, piezoelectric, and oxide semiconductor films required in microelectronics, power devices, MEMS, and photovoltaic fabrication.',
    icon: 'Cpu',
    heroImage: IMG.MSR007,
    overview:
      'Semiconductor device fabrication and advanced materials research demand thin-film deposition systems capable of achieving exceptional purity, uniformity, and stoichiometry control. HUANING ZHIKE magnetron sputtering and composite platforms provide the controlled deposition environment, multiple target materials, and substrate heating required for metallic contact layers, dielectric barriers, compound semiconductor films, and functional oxide deposition in research and pilot production contexts.',
    applications: [
      { name: 'Metal Contact and Interconnect Layers', description: 'Al, Ti, TiN, W, and Cu films for semiconductor device contacts, barrier layers, and interconnect metallization.' },
      { name: 'Transparent Conducting Oxides', description: 'ITO, AZO, GZO films for solar cells, OLED displays, flat-panel devices, and electrochromic smart windows.' },
      { name: 'Piezoelectric and Ferroelectric Films', description: 'AlN, ZnO, PZT films for MEMS resonators, sensors, actuators, and memory devices.' },
      { name: 'Dielectric and Gate Oxide Films', description: 'HfO₂, Al₂O₃, SiO₂ high-k dielectric films for advanced transistor gate stacks.' },
      { name: 'Compound Semiconductor Layers', description: 'GaN, InN, AlN, and related heterostructures for power devices, RF components, and LED applications.' },
      { name: 'Photovoltaic Absorbers and Contacts', description: 'CIGS, CdS, ZnO buffer layers, and rear contact metallization for thin-film solar cell fabrication.' },
    ],
    depositionMethods: [
      'Magnetron Sputtering — the dominant PVD method for semiconductor metallization and functional oxide deposition; DC, RF, and pulsed-DC modes support metallic and insulating targets',
      'Magnetron & Electron Beam Composite — combines evaporation purity with reactive sputtering control for complex device-layer stacks',
      'Electron Beam Evaporation — high-purity metal film deposition for contacts, reflectors, and bottom electrodes with minimal contamination',
    ],
    recommendedEquipment: ['hn-ms-002', 'hn-ms-eb-005', 'hn-eb-004', 'hn-ms-r-007', 'hn-ms-eb-r-010'],
    keyConsiderations: [
      'UHV or high-vacuum base pressure essential for device-quality film purity',
      'Substrate temperature control enables crystalline phase control and stress management',
      'Reactive gas control systems needed for compound oxide and nitride deposition',
      'Wafer-compatible substrate fixtures and load-locks improve throughput and cleanliness',
      'In-situ diagnostic ports (RHEED, RGA, optical monitor) accelerate process qualification',
    ],
  },
  {
    id: 4,
    slug: 'research-platforms',
    title: 'Research Platforms',
    subtitle: 'Configurable laboratory PVD systems for universities, institutes, and advanced R&D',
    description:
      'HUANING ZHIKE laboratory-series platforms deliver research-grade vacuum performance, flexible source configurations, and comprehensive measurement integration for academic thin-film research, materials science, process development, and equipment qualification.',
    icon: 'FlaskConical',
    heroImage: IMG.MSR007,
    overview:
      'Academic and industrial research institutions require PVD platforms that combine reproducible performance with maximum configurability. HUANING ZHIKE\'s laboratory R&D systems are engineered with this need in mind: CF-flanged stainless steel chambers, multiple source ports, flexible substrate fixtures, and interfaces for analytical instruments such as RHEED, optical monitors, quartz crystal monitors, and residual gas analyzers. Each system can be configured at the point of order and subsequently upgraded as research requirements evolve.',
    applications: [
      { name: 'Thin-Film Physics Research', description: 'Growth mechanism studies, in-situ characterization, and fundamental materials science of metallic, oxide, and nitride thin films.' },
      { name: 'Process Development for Scale-Up', description: 'Developing and validating PVD coating processes at lab scale before transfer to industrial production equipment.' },
      { name: 'New Material Exploration', description: 'Multi-target co-sputtering for alloy and high-entropy film composition mapping and materials library synthesis.' },
      { name: 'Device Prototype Fabrication', description: 'Research-scale deposition of device functional layers for sensor, photovoltaic, MEMS, and photonics prototypes.' },
      { name: 'University Training', description: 'Hands-on PVD vacuum technology training for graduate students and research engineers.' },
      { name: 'Coating Service and Sample Processing', description: 'Small-volume coating service for research groups requiring specialized films on custom substrates.' },
    ],
    depositionMethods: [
      'Magnetron Sputtering (research-grade) — high flexibility, wide material range, DC/RF/pulsed-DC capability, co-sputtering',
      'Multi-arc Ion Plating (research-scale) — hard coating process development at lab scale for industrial transfer',
      'Electron Beam Evaporation (research-scale) — high-purity evaporation with in-situ monitoring for optical and device research',
      'Composite Platforms — combined sources for maximum process flexibility in a single vacuum environment',
    ],
    recommendedEquipment: ['hn-ma-r-006', 'hn-ms-r-007', 'hn-ma-ms-r-008', 'hn-eb-r-009', 'hn-ms-eb-r-010'],
    keyConsiderations: [
      'Source count and geometry should match the planned research program',
      'CF-flange compatibility enables integration with third-party analytical instruments',
      'Substrate temperature range and uniformity are critical for crystalline film studies',
      'Upgradability is important — design future instrument additions into initial chamber configuration',
      'Process documentation, recipe management, and data export capabilities support research publication workflows',
    ],
  },
]

export function getAllSolutions(): Solution[] {
  return solutions
}

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}
