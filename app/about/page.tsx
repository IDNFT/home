export const metadata = {
  title: 'About IDNFT',
  description: 'the largest NFT and Web3 community in Indonesia.',
}

import HeroAbout from '@/components/about/about-hero'
import Tagline from '@/components/tagline'

export default function About() {
  return (
    <>
      <HeroAbout />
      <Tagline />
    </>
  )
}
