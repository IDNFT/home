'use client'

import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'

import Thumb1 from '@/public/images/thumb1-kompas.jpg'
import Thumb2 from '@/public/images/thumb2-coinvestasi.jpg'
import Thumb3 from '@/public/images/thumb3-liputan6.webp'
import Thumb4 from '@/public/images/thumb4-tempo.jpg'
import Thumb5 from '@/public/images/thumb5-coinvestasi.jpg'
import Thumb6 from '@/public/images/thumb6-coinfolks.webp'
import Thumb7 from '@/public/images/thumb7-tempo.jpg'
import Thumb8 from '@/public/images/thumb8-coinfolks.webp'
import Thumb9 from '@/public/images/thumb9-trenasia.webp'
import Thumb10 from '@/public/images/thumb-malang.jpg'

const newsItems: { title: string; image: StaticImageData; desc: string }[] = [
  {
    title: 'Kompas IDNFT Web3 Launched',
    image: Thumb1,
    desc: 'Berita peluncuran ekosistem Web3 di Indonesia oleh IDNFT dan partner strategis.'
  },
  {
    title: 'Coinvestasi Beri Apresiasi',
    image: Thumb2,
    desc: 'Coinvestasi meliput kolaborasi strategis dalam pengembangan pasar NFT.'
  },
  {
    title: 'Liputan6 - Inovasi Blockchain Lokal',
    image: Thumb3,
    desc: 'Startup lokal berhasil menarik perhatian global dengan platform NFT unik.'
  },
  {
    title: 'Tempo - Legalitas NFT Indonesia',
    image: Thumb4,
    desc: 'Diskusi legalitas dan perlindungan aset digital berbasis NFT.'
  },
  {
    title: 'Coinvestasi Insight Event',
    image: Thumb5,
    desc: 'Event komunitas NFT terbesar di Asia Tenggara sukses digelar di Jakarta.'
  },
  {
    title: 'Coinfolks Bahas DeFi & NFT',
    image: Thumb6,
    desc: 'Eksplorasi masa depan DeFi dan NFT dalam satu ekosistem terintegrasi.'
  },
  {
    title: 'Tempo Ekonomi Digital',
    image: Thumb7,
    desc: 'Analisa peran NFT dalam perekonomian digital Indonesia.'
  },
  {
    title: 'Coinfolks Komunitas NFT',
    image: Thumb8,
    desc: 'Komunitas NFT Indonesia makin solid dengan program edukasi berkelanjutan.'
  },
  {
    title: 'Trenasia Market Analysis',
    image: Thumb9,
    desc: 'Analisis pasar crypto dan NFT dari sudut pandang investor.'
  },
  {
    title: 'Malang Times Partnership',
    image: Thumb10,
    desc: 'Kolaborasi antara startup blockchain dan kampus di Malang.'
  },
]

export default function News() {
  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative">

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">
          <div className="masonry-columns gap-6">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="mb-6 break-inside-avoid p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded-md w-full h-auto object-cover mb-4"
                />
                <h3 className="text-lg text-justify font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry CSS */}
      <style jsx>{`
        .masonry-columns {
          column-count: 1;
        }

        @media (min-width: 640px) {
          .masonry-columns {
            column-count: 2;
          }
        }

        @media (min-width: 1024px) {
          .masonry-columns {
            column-count: 3;
          }
        }

        .break-inside-avoid {
          break-inside: avoid;
        }
      `}</style>
    </section>
  )
}
