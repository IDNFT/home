'use client'

import { useState, useRef, useEffect } from 'react'
import Slider from '@/components/utils/slider'
import Thumb1 from '@/public/images/thumb-ub.jpg'
import Thumb2 from '@/public/images/thumb-binus.jpg'
import Thumb3 from '@/public/images/thumb-um.jpg'
import Thumb4 from '@/public/images/thumb-ugm.jpg'
import Thumb5 from '@/public/images/thumb-malang.jpg'
import Thumb6 from '@/public/images/thumb-malang.jpg'
import Thumb7 from '@/public/images/thumb-malang.jpg'
import Thumb8 from '@/public/images/thumb-malang.jpg'
import Thumb9 from '@/public/images/thumb-malang.jpg'
import Thumb10 from '@/public/images/thumb-malang.jpg'

export default function News() {
  
  const tabs = useRef<HTMLDivElement>(null)
      
  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }
      
  useEffect(() => {
    heightFix()
  }, []) 
        
  return (
    <section className='relative'>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

      {/* Hero content */}
      <div className="pt-8 pb-6 md:pt-8 md:pb-6">

      {/* Section header */}
      <div className="text-center pb-8 md:pb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-red-700">IDNFT News</span></h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-4" data-aos="zoom-y-out" data-aos-delay="150">There is some news from Web3 and NFT industry in Indonesia! Stay informed and be part of the evolving digital landscape.</p>
        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
      </div>
    </div>
        </div>
       </div>

       </div>

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
  
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">
          
          {/* Gallery */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">

            {/* 1st Program */}
            <div data-aos="fade-up">
              <div>
                <div>
                  <Slider             
                    thumb1={Thumb1}
                    thumb2={Thumb2}
                    thumb3={Thumb3}
                    thumb4={Thumb4} 
                    thumb5={Thumb5}
                    thumb6={Thumb6}
                    thumb7={Thumb7}
                    thumb8={Thumb8}
                    thumb9={Thumb9}
                    thumb10={Thumb10}                  
                 />
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