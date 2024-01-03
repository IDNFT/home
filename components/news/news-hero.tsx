
export default function NewsHero() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-24 pb-6 md:pt-24 md:pb-6">

          {/* Section header */}
          <div className="text-center pb-8 md:pb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-red-700">IDNFT News</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-4" data-aos="zoom-y-out" data-aos-delay="150">There is some news from Web3 and NFT industry in Indonesia! Stay informed and be part of the evolving digital landscape.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}