export const metadata = {
  title: 'IDNFT',
  description: 'the largest NFT and Web3 community in Indonesia.',
}

import Hero from '@/components/hero'
import Programs from '@/components/programs'
import Features from '@/components/features'
import Tagline from '@/components/tagline'
import Partner from '@/components/partner'
import Community from '@/components/community'


export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Features />
      <Tagline />
      <Partner />
      <Community />
    </>
  )
}
