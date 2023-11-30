export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Embrace from '@/components/embrace'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Embrace />
      {/* <FeaturesBlocks />
      <Testimonials />
      <Newsletter /> */}
    </>
  )
}
