export const metadata = {
  title: 'Beyond Canvas',
  description: 'the largest NFT and Web3 community in Indonesia.',
}

import HeroBeyondCanvas from '@/components/3-beyondcanvas/hero-beyondcanvas'
import GalleryBeyondCanvas from '@/components/3-beyondcanvas/gallery-beyondcanvas'


export default function BeyondCanvas() {
  return (
    <>
      <HeroBeyondCanvas />
      <GalleryBeyondCanvas />
    </>
  )
}
