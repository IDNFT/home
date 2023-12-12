'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

interface SliderProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  media: string;
  mediaWidth: number;
  mediaHeight: number;
}

export default function Slider({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  media,
  mediaWidth,
  mediaHeight,
}: SliderProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLMediaElement>(null);

  return (
    <div>
      {/* Video thumbnail */}
      <Swiper spaceBetween={10} slidesPerView={1}>

        {/* Swiper Slide for Thumbnail */}
        <SwiperSlide>
          <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
            <div className="flex flex-col justify-center">
              <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
              <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g fill="none" fillRule="evenodd">
                  <g fillRule="nonzero">
                    <use fill="#000" xlinkHref="#hero-ill-d" />
                    <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </SwiperSlide>

        {/* Swiper Slide for Video */}
        <SwiperSlide>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
