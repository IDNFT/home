'use client'

export default function HeroAbout() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-4 md:pt-40 md:pb-4">

          {/* Section header */}
          <div className="text-center pb-4">
            <h1 className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-red-700">About IDNFT</span></h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-600 mb-2" data-aos="zoom-y-out">IDNFT is the largest NFT and Web3 community in Indonesia.</h2>
              <p className="text-lg text-gray-600 mb-4" data-aos="zoom-y-out" data-aos-delay="150">We are focused on education and adoption by bridging the gap between industry players and the user base in Indonesia. We believe that the NFT, Web3, and Blockchain technology will benefit us in the long term.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div className='mt-16 mb-4 md:mt-12 sm:mt-16 sm:w-auto sm:mb-0'>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}