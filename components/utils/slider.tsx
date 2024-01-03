'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState, useRef, Fragment } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from "react";
import { Pagination, A11y, EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

interface SliderProps {
  thumb1: StaticImageData;
  thumb2: StaticImageData;
  thumb3: StaticImageData;
  thumb4: StaticImageData
}

export default function Slider({
  thumb1,
  thumb2,
  thumb3,
  thumb4

}: SliderProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLMediaElement>(null);
  const feedbacks = [
    {
      src : thumb1 
    },
    {
      src : thumb2
    },
    {
      src : thumb3
    },
    {
      src : thumb4
    }
  ]

  return (
    <div className="test-slider content-center">
      {/* Gallery Slider */}
      <Swiper spaceBetween={10} slidesPerView={'auto'}
      modules={[Pagination, A11y, EffectCoverflow, Autoplay]}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      >

        {/* Swiper Slide */}
        <SwiperSlide>
          <div className="relative flex p-10" data-aos="zoom-y-out" data-aos-delay="450">
            <div>
              <Image src={thumb1} width={640} height={360} alt="documentation" />
            </div>
          </div>
          <div className="mb-10">
            <h2 className="h2 mb-4">IDNFT Adakan Program Edukasi Web3 On Campus di Surabaya</h2>
            <a>Perkembangan teknologi yang cepat membuat NFT menjadi sangat populer di Indonesia termasuk di kalangan mahasiswa. NFT atau Non-Fungible Token adalah aset digital, baik berupa teks, gambar, video, dan lain sebagainya yang kepemilikannya tercatat dalam sistem blockchain di internet.</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex p-10" data-aos="zoom-y-out" data-aos-delay="450">
            <div>
              <Image src={thumb2} width={640} height={360} alt="documentation" />
            </div>
          </div>
          <div className="mb-10">
            <h2 className="h3 ">IDNFT at Detik</h2>
            <a>lorem ipsum dolor sit amet lalaalala yeyeyeye oweyah mantab sekali</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex p-10" data-aos="zoom-y-out" data-aos-delay="450">
            <div>
              <Image src={thumb3} width={640} height={360} alt="documentation" />
            </div>
          </div>
          <div className="mb-10">
            <h2 className="h3 ">IDNFT at Tribun</h2>
            <a>lorem ipsum dolor sit amet lalaalala yeyeyeye oweyah mantab sekali</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex p-10" data-aos="zoom-y-out" data-aos-delay="450">
            <div>
              <Image src={thumb4} width={640} height={360} alt="documentation" />
            </div>
          </div>
          <div className="mb-10">
            <h2 className="h3 ">IDNFT at TV One</h2>
            <a>lorem ipsum dolor sit amet lalaalala yeyeyeye oweyah mantab sekali</a>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
