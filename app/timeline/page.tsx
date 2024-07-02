export const metadata = {
  title: 'Timeline IDNFT',
  description: 'the largest NFT and Web3 community in Indonesia.',
}

import TimelineHero from '@/components/timeline/timeline-hero'
import TimelineDetailed from '@/components/timeline/timeline-detailed'

export default function Timeline() {
  return (
    <>
      <TimelineHero />
      <TimelineDetailed />
    </>
  )
}
