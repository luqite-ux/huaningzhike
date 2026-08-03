import { HeroSection } from '@/components/home/hero-section'
import { pageMetadata } from '@/lib/site'
import {
  ProductLineGateways,
  FeaturedEquipment,
  DepositionTechnologyMatrix,
  SolutionPathways,
  FacilityFacts,
  CustomProjectProcess,
  InquiryCtaSection,
} from '@/components/home/home-sections'

export const metadata = pageMetadata({
  title: 'PVD Vacuum Coating Equipment',
  description: 'Customized industrial and laboratory PVD vacuum coating systems for multi-arc ion plating, magnetron sputtering, electron beam evaporation, and composite deposition.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductLineGateways />
      <FeaturedEquipment />
      <DepositionTechnologyMatrix />
      <SolutionPathways />
      <FacilityFacts />
      <CustomProjectProcess />
      <InquiryCtaSection />
    </>
  )
}
