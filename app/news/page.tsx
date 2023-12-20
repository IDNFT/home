export const metadata = {
  title: 'News IDNFT',
  description: 'the largest NFT and Web3 community in Indonesia.',
}

import NewsHero from '@/components/news/news-hero'
import NewsSlider from '@/components/news/news-slider'

export default function News() {
  return (
    <>
      <NewsHero />
      <NewsSlider />
    </>
  )
}
