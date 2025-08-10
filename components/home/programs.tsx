'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Media from '../media'
import Link from 'next/link'
import IdnftAcademylogo from '@/public/illustration/idnft-academy.png'
import Web3Campuslogo from '@/public/illustration/web3-campus.png'
import BeyondCanvaslogo from '@/public/illustration/beyond-canvas.png'
import TemuNftlogo from '@/public/illustration/temu-nft.png'
import Thumb1 from '@/public/illustration/web3-campus-docs.png'
import Thumb2 from '@/public/illustration/idnft-academy-docs.png'
import Thumb3 from '@/public/illustration/beyond-canvas-docs.png'
import Thumb4 from '@/public/illustration/temu-nft-docs.png'

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
  
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700" data-aos="zoom-y-out" data-aos-delay="150">Our Programs</h1>
            <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">IDNFT has successfully organized over 50+ online events, 25+ offline events, collaborated with more than 13+ universities, invited over 50+ speakers, and partnered with 50+ instutution/communities with total more than 25,000 participants.</p>
          </div>

          {/* Our Programs */}
          <div className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none mb-8">

            {/* 1st Program */}
            <div className="flex flex-col h-full p-6 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center">
                  <Media             
                  thumb={Thumb1}
                  thumbWidth={768}
                  thumbHeight={432}
                  thumbAlt="/illustration/web3-campus-docs.png"
                  media="/illustration/web3-campus-docs.png"
                  mediaWidth={1920}
                  mediaHeight={1080} />
                  <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Web3Campuslogo} width={96} height={72} alt="Web3 on Campus" />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700">Web3 on Campus</blockquote>
              <blockquote className="text-md text-gray-600">A roadshow program aimed at socializing and educating about Web3 dan NFT industry to students in biggest universities in Indonesia.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <Link className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 place-items-center justify-center content-center" href="https://web3campus.idnft.id" rel="noopener" target="_blank">See More</Link>
              </div>
              </div>
            </div>

            {/* 2nd Program */}
            <div className="flex flex-col h-full p-6 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center">
                  <Media             
                  thumb={Thumb2}
                  thumbWidth={768}
                  thumbHeight={432}
                  thumbAlt="/illustration/web3-campus-docs.png"
                  media="/illustration/web3-campus-docs.png"
                  mediaWidth={1920}
                  mediaHeight={1080} />
                  <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={IdnftAcademylogo} width={96} height={72} alt="IDNFT Academy" />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700">IDNFT Academy</blockquote>
              <blockquote className="text-md text-gray-600">A series of structured online seminar courses with a comprehensive curriculum covering NFT, Web3, Crypto, and Blockchain.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <Link className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 place-items-center justify-center content-center" href="https://www.instagram.com/idnftacademy/" rel="noopener" target="_blank">See More</Link>
              </div>
              </div>
            </div>
            
            {/* 3rd Program */}
            <div className="flex flex-col h-full p-6 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center rounded-lg">
                  <Media             
                  thumb={Thumb3}
                  thumbWidth={768}
                  thumbHeight={432}
                  thumbAlt="/illustration/web3-campus-docs.png"
                  media="/illustration/web3-campus-docs.png"
                  mediaWidth={1920}
                  mediaHeight={1080} />
                  <Image className="rounded-full bg-white absolute p-2 shadow-lg object-contain" src={BeyondCanvaslogo} width={96} height={96} alt="Beyond Canvas" />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700">Beyond Canvas</blockquote>
              <blockquote className="text-md text-gray-600">An exhibition program for artists and NFT creators trougtout Indonesia, both in the Metaverse and physical exhibitions.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <Link className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 place-items-center justify-center content-center" href="https://www.instagram.com/beyondcanvas.id/" rel="noopener" target="_blank">See More</Link>
              </div>
              </div>
            </div>

            {/* 4rd Program */}
            <div className="flex flex-col h-full p-6 bg-white shadow-md rounded-lg" data-aos="fade-up">
              <div>
                <div className="mb-4 flex place-items-end content-center justify-center">
                  <Media             
                  thumb={Thumb4}
                  thumbWidth={768}
                  thumbHeight={432}
                  thumbAlt="/illustration/web3-campus-docs.png"
                  media="/illustration/web3-campus-docs.png"
                  mediaWidth={1920}
                  mediaHeight={1080} />
                  <Image className="rounded-full bg-white absolute py-2 px-4 shadow-lg" src={TemuNftlogo} width={96} height={72} alt="Temu NFT & Web3" />
                </div>
              </div>
              <div>
              <blockquote className="text-lg font-bold text-red-700">Temu NFT and Web3</blockquote>
              <blockquote className="text-md text-gray-600">A roadshow program to various cities in Indonesia for education, socialization, and community engagement in the NFT and Web3 space.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-0 place-items-center justify-center content-center" href="https://www.instagram.com/p/C0JqfQZSdLZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" rel="noopener" target="_blank">See More</a>
              </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}