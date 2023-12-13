export const metadata = {
  title: 'IDNFT Academy',
  description: 'the largest NFT and Web3 community in Indonesia.',
}

import HeroAcademy from '@/components/2-idnft-academy/hero-academy'
import GalleryAcademy from '@/components/2-idnft-academy/gallery-academy'


export default function IdnftAcademy() {
  return (
    <>
      <HeroAcademy />
      <GalleryAcademy />
    </>
  )
}
