'use client'

import { useState, useRef, useEffect } from 'react'
import Media from '@/components/media'
import Thumb from '@/public/illustration/Community.svg'

export default function Community() {
  
  const [tab, setTab] = useState<number>(2)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700" data-aos="zoom-y-out" data-aos-delay="150">Community Center</h1>
            <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
            <a className="btn rounded-full font-bold text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 mt-6" href="#">Let's Collaborate</a>
          </div>

          {/* Section content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Community Content */}
            <div className="pt-12 pb-12 md:pt-3 md:pb-10" data-aos="fade-zoom-y">
            
            {/* Hero image */}
            <Media
            thumb={Thumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="#"
            media="#"
            mediaWidth={1920}
            mediaHeight={1080} 
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}