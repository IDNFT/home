export const metadata = {
  title: 'Web3 on Campus',
  description: 'the largest NFT and Web3 community in Indonesia.',
}

import HeroWeb3Campus from '@/components/1-web3campus/hero-web3campus'
import GalleryWeb3Campus from '@/components/1-web3campus/gallery-web3campus'


export default function Web3Campus() {
  return (
    <>
      <HeroWeb3Campus />
      <GalleryWeb3Campus />
    </>
  )
}
