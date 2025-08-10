'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { db } from '@/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

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

const imageMap: Record<string, typeof Thumb1> = {
  'thumb1-kompas.jpg': Thumb1,
  'thumb2-coinvestasi.jpg': Thumb2,
  'thumb3-liputan6.webp': Thumb3,
  'thumb4-tempo.jpg': Thumb4,
  'thumb5-coinvestasi.jpg': Thumb5,
  'thumb6-coinfolks.webp': Thumb6,
  'thumb7-tempo.jpg': Thumb7,
  'thumb8-coinfolks.webp': Thumb8,
  'thumb9-trenasia.webp': Thumb9,
  'thumb-malang.jpg': Thumb10,
}

interface NewsItem {
  id: string
  title: string
  desc: string
  image: string
  link: string 
  linktree: string
}

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'news'))
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<NewsItem, 'id'>),
        }))
        setNewsItems(data)
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 md:py-12">
          {loading ? (
            <p className="text-center text-gray-500">Loading news...</p>
          ) : (
            <div className="masonry-columns gap-6">
              {newsItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-6 break-inside-avoid p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
                >
                  {imageMap[item.image] ? (
                    <Image
                      src={imageMap[item.image]}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="rounded-md w-full h-auto object-cover mb-4"
                    />
                  ) : (
                    <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center rounded-md mb-4 text-sm text-gray-500">
                      Image not found
                    </div>
                  )}
                  <h3 className="text-lg text-justify font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-justify">
                    {item.desc}
                  </p>
                    <p className='text-sm text-gray-600 py-4 flex'>
                    {item.linktree}
                    <span className='ml-2'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                      </svg>
                    </span>
                  </p>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .masonry-columns {
          column-count: 1;
        }
        @media (min-width: 640px) {
          .masonry-columns {
            column-count: 3;
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
