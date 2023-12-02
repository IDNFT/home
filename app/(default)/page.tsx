export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Tagline from '@/components/tagline'
import Partner from '@/components/partner'
import Embrace from '@/components/embrace'
import Educate from '@/components/educate'
import Empower from '@/components/empower'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Tagline />
      <Partner />
      {/* <Embrace />
      <Educate />
      <Empower /> */}
      {/* <FeaturesBlocks />
      <Testimonials />
      <Newsletter /> */}
    </>
  )
}
