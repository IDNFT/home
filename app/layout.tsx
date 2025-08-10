import './css/style.css'
import localFont from 'next/font/local'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf",
  variable: "--font-sans",
  weight: "100 900",
});

export const metadata = {
  title: 'IDNFT',
  description: 'the largest NFT and Web3 community in Indonesia.',
  icons: {
    icon: "favicon.ico"
  },
  openGraph: {
    title: "IDNFT",
    description: "the largest NFT and Web3 community in Indonesia.",
    images: [
      {
        url: "https://idnft.id/thumbnail.png",
      },
    ],
  },
  metadataBase: new URL("https://idnft.id"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
