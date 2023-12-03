import Image from 'next/image'

import FeatImage01 from '@/public/illustration/Embrace.svg'
import FeatImage02 from '@/public/illustration/Educate.svg'
import FeatImage03 from '@/public/illustration/Empower.svg'

export default function Tagline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="zoom-y-out" data-aos-delay="150">
            <h1 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">One product, unlimited solutions</h1>
            <p className="text-xl text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h2 className="h2 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">EMBRACE</h2>
                  <p className="text-xl text-gray-600 mb-4">We invite creators, developers, industry players, government officials, universities, and media to collaborate in making the NFT, Web3, and Blockchain ecosystem a good and supportive place for everyone.</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h2 className="h2 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">EDUCATE</h2>
                  <p className="text-xl text-gray-600 mb-4">We initiate education for our community, universities, and the public, bringing experts and industry players to provide updates on news, information, and opportunities within the industry.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h2 className="h2 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">EMPOWER</h2>
                  <p className="text-xl text-gray-600 mb-4">We initiate education for our community, universities, and the public, bringing experts and industry players to provide updates on news, information, and opportunities within the industry.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}