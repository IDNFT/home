'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Media from './media'
import IdnftAcademy from '@/public/illustration/idnft-academy.png'
import Web3Campus from '@/public/illustration/web3-campus.png'
import BeyondCanvas from '@/public/illustration/beyond-canvas.png'
import TemuNft from '@/public/illustration/temu-nft.png'
import Thumb from '@/public/illustration/web3-campus-docs.png'

export default function Programs() {
  
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
  
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700" data-aos="zoom-y-out" data-aos-delay="150">Our Programs</h1>
            <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* Our Programs */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">

            {/* 1st Program */}
            <div className="flex flex-col h-full p-6 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center">
                  <Media             
                  thumb={Thumb}
                  thumbWidth={768}
                  thumbHeight={432}
                  thumbAlt="/illustration/web3-campus-docs.png"
                  media="/illustration/web3-campus-docs.png"
                  mediaWidth={1920}
                  mediaHeight={1080} />
                  <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Web3Campus} width={96} height={72} alt="Web3 on Campus" />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700">Web3 on Campus.</blockquote>
              <blockquote className="text-md text-gray-600">Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 justify-center">
                <a className="btn rounded-full font-bold text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 place-items-center justify-center content-center" href="#">Join Us</a>
              </div>
              </div>
            </div>

            {/* 2nd Program */}
            <div className="flex flex-col h-full p-6 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center">
                  <Media             
                  thumb={Thumb}
                  thumbWidth={768}
                  thumbHeight={432}
                  thumbAlt="/illustration/web3-campus-docs.png"
                  media="/illustration/web3-campus-docs.png"
                  mediaWidth={1920}
                  mediaHeight={1080} />
                  <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Web3Campus} width={96} height={72} alt="Web3 on Campus" />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700">Web3 on Campus.</blockquote>
              <blockquote className="text-md text-gray-600">Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 justify-center">
                <a className="btn rounded-full font-bold text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 place-items-center justify-center content-center" href="#">Join Us</a>
              </div>
              </div>
            </div>
            
            {/* 3rd Program */}
            <div className="flex flex-col h-full p-6 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center">
                  <Media             
                  thumb={Thumb}
                  thumbWidth={768}
                  thumbHeight={432}
                  thumbAlt="/illustration/web3-campus-docs.png"
                  media="/illustration/web3-campus-docs.png"
                  mediaWidth={1920}
                  mediaHeight={1080} />
                  <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Web3Campus} width={96} height={72} alt="Web3 on Campus" />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700">Web3 on Campus.</blockquote>
              <blockquote className="text-md text-gray-600">Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 justify-center">
                <a className="btn rounded-full font-bold text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 place-items-center justify-center content-center" href="#">Join Us</a>
              </div>
              </div>
            </div>

            {/* 4rd Program */}
            <div className="flex flex-col h-full p-6 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center">
                  <Media             
                  thumb={Thumb}
                  thumbWidth={768}
                  thumbHeight={432}
                  thumbAlt="/illustration/web3-campus-docs.png"
                  media="/illustration/web3-campus-docs.png"
                  mediaWidth={1920}
                  mediaHeight={1080} />
                  <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Web3Campus} width={96} height={72} alt="Web3 on Campus" />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700">Web3 on Campus.</blockquote>
              <blockquote className="text-md text-gray-600">Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 justify-center">
                <a className="btn rounded-full font-bold text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 place-items-center justify-center content-center" href="#">Join Us</a>
              </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}