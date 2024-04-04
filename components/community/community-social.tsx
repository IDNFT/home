'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function SocialMedia() {
  
  const [tab, setTab] = useState<number>(2)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 pb-4">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4" data-aos="zoom-y-out" data-aos-delay="150">
          <h1 className="h2 mb-2 text-gray-600">Our Social Media</h1>
          <p className="text-lg text-gray-600">Follow our social media</p>
          </div>


          {/* Social as */}
          <div className="max-w-3xl mx-auto justify-center md:pb-2 my-3" data-aos="zoom-y-out" data-aos-delay="150"> 
          <ul className="mb-4 md:order-1 md:ml-0 md:mb-0">
            <li className="ml-0">
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=hi.idnft@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello%20IDNFT%2C%0A%0AI%20hope%20this%20message%20find%20you%20well.%20We%E2%80%99ve%20been%20following%20IDNFT's%20impactful%20work%20in%20the%20Web3%20and%20NFT%20space%20and%20are%20impressed%20by%20the%20innovative%20initiative,%0AI%20believe%20there%20could%20be%20exciting%20collaboration%20opportunities%20between%20our%20organizations.%20%0A%0ALooking%20forward%20to%20the%20possibility%20of%20working%20together,%0A%0A%0ABest%20regards,%2C%0A%0A%0A%0A" rel="noopener" target="blank" className="flex py-2 justify-center items-center text-gray-600 hover:text-white bg-white hover:bg-red-700 rounded-lg shadow transition duration-150 ease-in-out" aria-label="Email">
              <svg className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-8 -8 32 32">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
                <span>Email</span>
              </a>
            </li>
          </ul>
          </div>

          <div className="max-w-3xl mx-auto justify-center md:pb-2 my-3" data-aos="zoom-y-out" data-aos-delay="150"> 
          <ul className="mb-4 md:order-1 md:ml-0 md:mb-0">
            <li className="ml-0">
              <a href="https://instagram.com/id.nft" rel="noopener" target="blank" className="flex py-2 justify-center items-center text-gray-600 hover:text-white bg-white hover:bg-red-700 rounded-lg shadow transition duration-150 ease-in-out" aria-label="Instagram">
                <svg className="w-10 h-10 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
          </div>

          <div className="max-w-3xl mx-auto justify-center md:pb-2 my-3" data-aos="zoom-y-out" data-aos-delay="150"> 
          <ul className="mb-4 md:order-1 md:ml-0 md:mb-0">
            <li className="ml-0">
              <a href="https://www.tiktok.com/@idnft?_t=8l9YZ6w125x&_r=1" rel="noopener" target="blank" className="flex py-2 justify-center items-center text-gray-600 hover:text-white bg-white hover:bg-red-700 rounded-lg shadow transition duration-150 ease-in-out" aria-label="Tiktok">
                <svg className="w-10 h-10 fill-current" viewBox="0 -8 44 64" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" />
                </svg>
                <span>Tiktok</span>
              </a>
            </li>
          </ul>
          </div>

          <div className="max-w-3xl mx-auto justify-center md:pb-2 my-3" data-aos="zoom-y-out" data-aos-delay="150"> 
          <ul className="mb-4 md:order-1 md:ml-0 md:mb-0">
            <li className="ml-0">
            <a href="https://x.com/idnft_" rel="noopener" target="blank" className="flex py-2 justify-center items-center text-gray-600 hover:text-white bg-white hover:bg-red-700 rounded-lg shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
          </div>

          <div className="max-w-3xl mx-auto justify-center md:pb-2 my-3" data-aos="zoom-y-out" data-aos-delay="150"> 
          <ul className="mb-4 md:order-1 md:ml-0 md:mb-0">
            <li className="ml-0">
              <a href="https://discord.gg/idnft" rel="noopener" target="blank" className="flex py-2 justify-center items-center text-gray-600 hover:text-white bg-white hover:bg-red-700 rounded-lg shadow transition duration-150 ease-in-out" aria-label="Instagram">
               <svg className="w-10 h-10 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
               </svg>
                <span>Discord</span>
              </a>
            </li>
          </ul>
          </div>

          <div className="max-w-3xl mx-auto justify-center md:pb-2 my-3" data-aos="zoom-y-out" data-aos-delay="150"> 
          <ul className="mb-4 md:order-1 md:ml-0 md:mb-0">
            <li className="ml-0">
              <a href="https://linkedin.com/company/idnft" rel="noopener" target="blank" className="flex py-2 justify-center items-center text-gray-600 hover:text-white bg-white hover:bg-red-700 rounded-lg shadow transition duration-150 ease-in-out" aria-label="Instagram">
                <svg className="w-10 h-10 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
          </div>

          <div className="max-w-3xl mx-auto justify-center md:pb-2 my-3" data-aos="zoom-y-out" data-aos-delay="150"> 
          <ul className="mb-4 md:order-1 md:ml-0 md:mb-0">
            <li className="ml-0">
              <a href="https://t.me/idnft_official" rel="noopener" target="blank" className="flex py-2 justify-center items-center text-gray-600 hover:text-white bg-white hover:bg-red-700 rounded-lg shadow transition duration-150 ease-in-out" aria-label="Instagram">
                <svg className="w-10 h-10 fill-current" viewBox="-8 -8 32 32" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                </svg>
                <span>Telegram</span>
              </a>
            </li>
          </ul>
          </div>


          {/* Section button */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center pb-12 md:pb-16">
          <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">Excited to join the journey? Let's together build the NFT, Crypto, Web3, and Blockchain industries in Indonesia!</p>
          <Link className="btn rounded-full font-bold text-white bg-red-700 hover:bg-red-300 hover:text-red-700 w-full mb-16 sm:w-auto sm:mb-6 mt-6" href="https://forms.gle/PjrXfkEb2YtVcviP7" rel="noopener" target="_blank">Let's Collaborate</Link>
          </div>
        </div>
      </div>
    </section>
  )
}