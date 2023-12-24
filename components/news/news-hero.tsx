import Media from '../media'
import Thumb from '@/public/illustration/Community.svg'

export default function NewsHero() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-24 pb-6 md:pt-24 md:pb-6">

            {/* Hero image */}
            <Media
            thumb={Thumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="/Community.svg"
            media="/Community.svg"
            mediaWidth={1920}
            mediaHeight={1080} />

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-red-700">IDNFT News</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-4" data-aos="zoom-y-out" data-aos-delay="150">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non urna eu neque porttitor pharetra nec quis libero.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}