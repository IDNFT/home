'use client'

import { useState, useRef, useEffect } from 'react'
import Slider from '@/components/utils/slider'
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

export default function NewsSlider() {
  
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
        <div className="py-12 md:py-12">
          
          {/* Gallery */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">

            {/* Program */}
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