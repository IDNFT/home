export const metadata = {
  title: 'IDNFT',
  description: 'the largest NFT and Web3 community in Indonesia.',
}

import Hero from '@/components/hero'
import Programs from '@/components/programs'
import Tagline from '@/components/tagline'
import Partner from '@/components/partner'
import Community from '@/components/community'
import NewsSlider from '@/components/news/news-slider'
import News from '../news/page'


export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Tagline />
      <Partner />
      <Community />
      <News />
    </>
  )
}
