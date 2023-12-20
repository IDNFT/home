export const metadata = {
  title: 'Community Center',
  description: 'the largest NFT and Web3 community in Indonesia.',
}

import SocialMedia from '@/components/community/community-social'
import CommunityHero from '@/components/community/community-hero'



export default function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <SocialMedia />
    </>
  )
}
