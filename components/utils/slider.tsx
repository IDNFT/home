'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState, useRef, Fragment } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from "react";
import Media from '../media';
import { Pagination, A11y, EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

// Import Logo Media Partner
import Tempo from "@/public/partner/logo-tempo.svg"
import Coinfolks from "@/public/partner/logo-coinfolks.svg"
import Liputan6 from "@/public/partner/logo-liputan6.svg"
import Kompas from "@/public/partner/logo-kompas.svg"
import Coinvestasi from "@/public/partner/logo-coinvestasi.svg"
import Trenasia from "@/public/partner/logo-trenasia.svg"

interface SliderProps {
  thumb1: StaticImageData;
  thumb2: StaticImageData;
  thumb3: StaticImageData;
  thumb4: StaticImageData;
  thumb5: StaticImageData;
  thumb6: StaticImageData;
  thumb7: StaticImageData;
  thumb8: StaticImageData;
  thumb9: StaticImageData;
  thumb10: StaticImageData
}

export default function Slider({
  thumb1,
  thumb2,
  thumb3,
  thumb4,
  thumb5,
  thumb6,
  thumb7,
  thumb8,
  thumb9,
  thumb10

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
    },
    {
      src : thumb5
    },
    {
      src : thumb6
    },
    {
      src : thumb7
    },
    {
      src : thumb8
    },
    {
      src : thumb9
    },
    {
      src : thumb10
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
         <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb1}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="Kompas News"
             media="/partner/logo-kompas.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Kompas} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">Web3 On Campus, Komitmen IDNFT untuk Edukasi dan Adopsi Industri NFT</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Kompas -</span> Saat ini, IDNFT menjadi komunitas NFT dan Web3 terbesar di Indonesia yang berfokus dalam edukasi dan adopsi serta menjadi jembatan penghubung antara para pelaku industri (baik lokal maupun internasional) dengan para pengguna di Indonesia. IDNFT memiliki lebih dari 8500 anggota yang tersebar di seluruh penjuru negeri, terdiri atas para kreator dan kolektor NFT, Web3 developer, dan enthusiast. Dalam rangka memenuhi misinya yaitu embrace-educate-empower, IDNFT rutin menyelenggarakan program edukasi bersama dengan berbagai ahli NFT (kreator), praktisi Web3 dan para pelaku industri. Program edukasi yang dilakukan secara online dan offline ini di antaranya IDNFT Academy, program roadshow ke berbagai kota melalui Temu NFT & Web3, NFT Exhibition melalui program Beyond Canvas, dan Kampus Roadshow bertajuk Web3 On Campus.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://www.kompas.id/baca/adv_post/web3-on-campus-komitmen-idnft-untuk-edukasi-dan-adopsi-industri-nft">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb2}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Coinvestasi} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">Daftar Tokoh Paling Berpengaruh di Industri Kripto dan Web3 Indonesia 2023</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Coinvestasi -</span> Coinvestasi’s Most Impactful Figures 2023 menghargai individu yang memberikan dampak besar pada industri kripto dan Web3 di Indonesia yang terus berkembang. Pemilihan ini mencerminkan komitmen Coinvestasi untuk mendorong sektor ini melalui kolaborasi dengan regulator, industri, pendidik, dan kreator konten. “Penghargaan ini diharapkan menjadi motivasi bagi pelaku industri tersebut untuk terus berinovasi dan membangun ekosistem yang sehat bagi pengguna, regulator, dan pelaku industri lainnya,” kata Dhila, Managing Director Coinvestasi. </blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://coinvestasi.com/berita/daftar-tokoh-paling-berpengaruh-di-industri-kripto-web3-indonesia-2023">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb3}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Liputan6} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">IDNFT Academy Hadir Jadi Wadah Edukasi NFT bagi Kreator di Indonesia, Tertarik Mendaftar?</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Liputan6 -</span> IDNFT, salah satu komunitas NFT di Indonesia mengumumkan akan menggelar IDNFT Academy pada April hingga Juni 2022. Sesuai namanya, IDNFT Academy merupakan sebuah program sekolah NFT dan diklaim menjadi yang pertama dilakukan di Indonesia. Menurut pendiri IDNFT (Indonesian NFT Community) Budi Santosa, program ini merupakan upaya memfasilitas sesama kreator Tanah Air untuk dapat masuk ke ekosistem digital masa depan dan bersaing dengan kreator mancanegara."Untuk itu, kami menghadirkan Program IDNFT Academy sebagai wadah saling berbagi untuk para kreator Indonesia yang ingin belajar NFT dan Web 3.0 mulai dari dasarnya," tutur Budi dalam keterangan resmi yang diterima, Senin (18/4/2022). </blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://www.liputan6.com/tekno/read/4940913/idnft-academy-hadir-jadi-wadah-edukasi-nft-bagi-kreator-di-indonesia-tertarik-mendaftar">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb4}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Tempo} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">Web3 on Campus UGM Soroti Perkembangan, Isu, dan Potensi pada Industri Web3</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Tempo -</span> IDNFT, komunitas Web3 dan NFT Indonesia baru saja mengadakan Web3 on Campus di Universitas Gadjah Mada, berkolaborasi dengan Tokocrypto sebagai Program Partner. Acara ini dirancang untuk memberikan edukasi dan pemahaman tentang perkembangan Industri Web3, teknologi blockchain, perkembangan NFT, crypto dan metaverse kepada mahasiswa agar dapat mengikuti perkembangan teknologi dan mampu memanfaatkannya sebaik mungkin.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://event.tempo.co/read/1789122/web3-on-campus-ugm-soroti-perkembangan-isu-dan-potensi-pada-industri-web3">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb5}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Coinvestasi} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">IDNFT Lakukan Program Edukasi Web3 On Campus</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Coinvestasi -</span>Komunitas NFT Indonesia atau IDNFT sukses menyelenggarakan Web3 on Campus ke Universitas Institut Teknologi 10 Nopember Surabaya pada 29 Mei 2023. Acara ini merupakan kegiatan edukasi mahasiswa tentang NFT, Web3, Blockchain, Crypto, dan Metaverse. Tercatat bahwa acara ini dihadiri 280 peserta, baik secara daring maupun luring. Peserta tersebut pun terdiri dari berbagai jurusan, mulai dari Manajemen Bisnis, Desain Komunikasi Visual, Teknik Elektro, Teknik Informatika, Desain Interior, Desain Produk, dan berbagai jurusan lainnya.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://coinvestasi.com/berita/idnft-lakukan-program-edukasi-web3-on-campus">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb6}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Coinfolks} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">IDNFT Berkolaborasi dengan Telkom University untuk Merintis Integrasi Web3 dan NFT di Kampus</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Coinfolks - </span>IDNFT merupakan sebuah komunitas Web3 dan NFT terbesar di Indonesia sukses menyelenggarakan program Web3 on Campus di Telkom University, Bandung. Acara ini bekerja sama dengan Tokocrypto sebagai program partner. Kolaborasi inovatif ini bertujuan untuk memberikan pengetahuan dan pengalaman langsung kepada para mahasiswa dan fakultas dalam dunia NFT, perkembangan industri Web3, teknologi blockchain, cryptocurrency dan aset digital terdesentralisasi yang menarik lainnya. Pengajaran ini tentu memberikan bekal untuk mahasiswa agar dapat mengikuti perkembangan teknologi masa kini. Web3 on Campus by IDNFT sukses dilaksanakan pada hari Jumat tanggal 17 November 2023 di Aula FIK, Lantai 5 Gedung Sebatik Fakultas Industri Kreatif, Telkom University.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://coinfolks.id/berita/idnft-berkolaborasi-dengan-telkom-university/">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb7}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Tempo} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">IDNFT Ajak Para Sarjana Komunikasi Mengenal Web3</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Tempo - </span>IDNFT sebagai komunitas penggemar NFT di Indonesia untuk mengenalkan lebih jauh seputar NFT, Web3, Blockchain, Crypto, dan Metaverse pada mahasiswa. Program ini diselenggarakan dengan tujuan utama mendukung Tridharma Perguruan Tinggi serta memberikan sosialisasi dan edukasi tentang perkembangan industri tersebut di Indonesia.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://event.tempo.co/read/1745723/idnft-ajak-para-sarjana-komunikasi-mengenal-web3">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb8}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Coinfolks} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">Digital era transformation “The Charm of Indonesia’s Independence Artwork” Transformasi era digital “Pesona Karya Seni Kemerdekaan Indonesia”</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Coinfolks - </span>Beyond Canvas mengeksplorasi kreativitas di dunia digital yang menyatukan teknologi dan imajinasi. Tidak hanya itu, program ini juga bertujuan untuk merayakan bulan kemerdekaan Republik Indonesia ke-78. IDNFT – Indonesian NFT Community dan Beyond Canvas telah menyelenggarakan program pertamanya pada bulan Agustus ini. Pameran ini dilaksanakan pada Jumat, 18 Agustus 2023 hingga Senin, 18 September 2023. Lokasi pameran pun tersebar di tiga titik sekaligus, yaitu pada lantai 6 Plaza Indonesia, Jakarta; Taman Mini Indonesia Indah, Jakarta Timur; dan Nipah Park, Makassar. Acara ini pun berjalan dengan lancar. </blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://coinfolks.id/berita/digital-era-transformation-the-charm-of-indonesias-independence-artwork-transformasi-era-digital-pesona-karya-seni-kemerdekaan-indonesia/">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb9}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Trenasia} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">Mengenal IDNFT Academy, Sekolah NFT Pertama di Indonesia yang Wadahi para Kreator</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">TrenAsia -</span>Di tengah pertumbuhan tren non-fungible token (NFT) di Indonesia, IDNFT Academy menjadi sekolah pertama di Indonesia yang mewadahi para kreator seni untuk menjajali instrumen dan ekosistem digital masa depan. IDNFT sendiri merupakan salah satu komunitas NFT di Indonesia, dan mereka tercetus untuk menggelar program sekolah NFT yang pelaksanaannya berlangsung sejak April hingga Juni 2022. Founder IDNFT Budi Santosa mengatakan, ia dan komunitasnya ingin memfasilitasi para content creator di dalam negeri untuk bisa terlibat dalam ekosistem digital dan bersaing di kancah internasional. </blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://www.trenasia.com/mengenal-idnft-academy-sekolah-nft-pertama-di-indonesia-yang-wadahi-para-kreator">See More</a>
             </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
          <div className="mb-4 flex place-items-end content-center justify-center">
            <Media             
             thumb={thumb10}
             thumbWidth={768}
             thumbHeight={432}
             thumbAlt="/illustration/web3-campus-docs.png"
             media="/illustration/web3-campus-docs.png"
             mediaWidth={1920}
             mediaHeight={1080} />
            <Image className="rounded-full bg-white absolute p-3 shadow-lg" src={Tempo} width={96} height={72} alt="Web3 on Campus" />
            </div>
             </div>
              <div>
                <blockquote className="h2 font-bold text-red-700 my-3">IDNFT Adakan Program Edukasi Web3 On Campus di Surabaya</blockquote>
                <blockquote className="text-md text-gray-600"><span className="font-semibold">Tempo -</span>IDNFT sebagai komunitas penggemar NFT di Indonesia untuk mengenalkan lebih jauh seputar NFT, Web3, Blockchain, Crypto, dan Metaverse pada mahasiswa. Program ini diselenggarakan dengan tujuan utama mendukung Tridharma Perguruan Tinggi serta memberikan sosialisasi dan edukasi tentang perkembangan industri tersebut di Indonesia.</blockquote>
              <div className="text-gray-600 font-medium mt-6 pt-5 border-t border-gray-300 text-center">
                <a className="btn rounded-full font-medium text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-4 sm:w-auto sm:mb-12 place-items-center justify-center content-center" href="https://event.tempo.co/read/1721767/idnft-adakan-program-edukasi-web3-on-campus-di-surabaya">See More</a>
             </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
