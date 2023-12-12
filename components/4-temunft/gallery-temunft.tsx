'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Slider from '@/components/utils/slider'
import Link from 'next/link'
import IdnftAcademylogo from '@/public/illustration/idnft-academy.png'
import Web3Campuslogo from '@/public/illustration/web3-campus.png'
import BeyondCanvaslogo from '@/public/illustration/beyond-canvas.png'
import TemuNftlogo from '@/public/illustration/temu-nft.png'
import Thumb1 from '@/public/illustration/web3-campus-docs.png'
import Thumb2 from '@/public/illustration/idnft-academy-docs.png'
import Thumb3 from '@/public/illustration/beyond-canvas-docs.png'
import Thumb4 from '@/public/illustration/temu-nft-docs.png'

export default function GalleryTemuNft() {
  
  const tabs = useRef<HTMLDivElement>(null)
      
  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }
      
  useEffect(() => {
    heightFix()
  }, []) 
        
  return (
    <section className='relative'>

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
  
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700" data-aos="zoom-y-out" data-aos-delay="150">Gallery</h1>
            <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* Our Programs */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none mb-8">

            {/* 1st Program */}
            <div data-aos="fade-up">
              <div>
                <div>
                  <Slider             
                  thumb={Thumb1}
                  thumbWidth={768}
                  thumbHeight={432}
                  thumbAlt="/illustration/web3-campus-docs.png"
                  media="/illustration/web3-campus-docs.png"
                  mediaWidth={1920}
                  mediaHeight={1080} />
               </div>
              </div>
              <div>
            </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}