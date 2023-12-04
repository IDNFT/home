export const metadata = {
  title: 'IDNFT',
  description: 'the largest NFT and Web3 community in Indonesia.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Tagline from '@/components/tagline'
import Partner from '@/components/partner'
import Community from '@/components/community'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Tagline />
      <Partner />
      <Community />
    </>
  )
}
