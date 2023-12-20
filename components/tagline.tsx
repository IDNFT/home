import Media from '@/components/media'
import Thumb01 from '@/public/illustration/Embrace.svg'
import Thumb02 from '@/public/illustration/Educate.svg'
import Thumb03 from '@/public/illustration/Empower.svg'

export default function Tagline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-6 md:pb-6">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="zoom-y-out" data-aos-delay="150">
            <h1 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">IDNFT Vision</h1>
            <p className="text-lg text-gray-600">Our vision is to help Indonesian creators start their journey in the NFT and Web3 space by embracing, educating, and empowering them.</p>
          </div>

          {/* Items */}
          <div className="max-x-3xl mx-auto grid gap-12 px-4 sm:px-8">

            {/* 1st item */}
            <div className="max-x-3xl mx-auto md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Media thumb={Thumb01} thumbWidth={540} thumbHeight={405} thumbAlt="Embrace" media='Embrace.svg' mediaHeight={540} mediaWidth={405} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h2 className="h2 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">EMBRACE</h2>
                  <p className="text-lg text-gray-600 mb-4">We invite creators, developers, industry players, government officials, universities, and media to collaborate in making the NFT, Web3, and Blockchain ecosystem a good and supportive place for everyone.</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Media thumb={Thumb02} thumbWidth={540} thumbHeight={405} thumbAlt="Educate" media='Educate.svg' mediaHeight={540} mediaWidth={405} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h2 className="h2 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">EDUCATE</h2>
                  <p className="text-lg text-gray-600 mb-4">We initiate education for our community, universities, and the public, bringing experts and industry players to provide updates on news, information, and opportunities within the industry.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Media thumb={Thumb03} thumbWidth={540} thumbHeight={405} thumbAlt="Empower" media='Empower.svg' mediaHeight={540} mediaWidth={405} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h2 className="h2 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">EMPOWER</h2>
                  <p className="text-lg text-gray-600 mb-4">With all stakeholders, we empower our community by facilitating connections, providing access, and bridging the gap between users and industry players, fostering endless possibilities in NFTs, Web3, and the world of blockchain technology on both local and global scales.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}