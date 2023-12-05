import Image from "next/image"

import UGM from '@/public/partner/univ-ugm.svg'
import ITS from '@/public/partner/univ-its.svg'
import UM from '@/public/partner/univ-um.svg'
import UII from '@/public/partner/univ-uii.svg'
import UB from '@/public/partner/univ-ub.svg'
import Widyatama from '@/public/partner/univ-widyatama.svg'
import Petra from '@/public/partner/univ-petra.svg'
import UPI from '@/public/partner/univ-upi.svg'
import Telkom from '@/public/partner/univ-telkom.svg'
import IsiBali from "@/public/partner/univ-isibali.svg"
import Andalas from "@/public/partner/univ-andalas.svg"
import Binus from "@/public/partner/univ-binus.svg"
import UPN from "@/public/partner/univ-upn.svg"

import ABI from "@/public/partner/gov-abi.svg"
import ICCA from "@/public/partner/gov-icca.svg"
import Kominfo from "@/public/partner/gov-kominfo.svg"
import APAKI from "@/public/partner/gov-apaki.svg"
import Siber from "@/public/partner/gov-siber.svg"

import Solana from "@/public/partner/comp-solana.svg"
import Tezos from "@/public/partner/comp-tezos.svg"
import Algorand from "@/public/partner/comp-algorand.svg"
import Binance from "@/public/partner/comp-binance.svg"
import Tokocrypto from "@/public/partner/comp-tokocrypto.svg"
import Pintu from "@/public/partner/comp-pintu.svg"
import Morpheus from "@/public/partner/comp-sermorpheus.svg"
import Lenovo from "@/public/partner/comp-lenovo.svg"
import Acer from "@/public/partner/comp-acer.svg"

export default function Partner() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">Previous Partner</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">University Partner</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-3xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5" data-aos="zoom-y-out">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={UGM} width={75} height="50" alt="UGM" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={ITS} width={75} height="50" alt="ITS" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={UB} width={75} height="50" alt="UB" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={UM} width={75} height="50" alt="UM" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={UII} width={75} height="50" alt="UII" />
            </div>

             {/* Item */}
             <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={Widyatama} width={75} height="50" alt="Widyatama" />
            </div>

             {/* Item */}
             <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={UPN} width={75} height="50" alt="UPN" />
            </div>

             {/* Item */}
             <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={UPI} width={75} height="50" alt="UPI" />
            </div>

             {/* Item */}
             <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={IsiBali} width={75} height="50" alt="ISI Bali" />
            </div>

             {/* Item */}
             <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={Andalas} width={75} height="50" alt="Andalas" />
            </div>

             {/* Item */}
             <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={Telkom} width={75} height="50" alt="Telkom" />
            </div>

             {/* Item */}
             <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={Petra} width={75} height="50" alt="Petra" />
            </div>

             {/* Item */}
             <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={Binus} width={75} height="50" alt="Binus" />
            </div>
        </div>
        
        <div className="py-12 md:py-20">

         {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Association & Government Partner</p>
          </div>    
            
            {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5" data-aos="zoom-y-out">
            
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={ABI} width={75} height="50" alt="Asosiasi Blockchain Indonesia" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={ICCA} width={75} height="50" alt="ICCA" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={Kominfo} width={75} height="50" alt="Kominfo" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={APAKI} width={75} height="50" alt="Asosiasi Pedagang Kripto Indonesia" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            <Image className="md:max-w-none mx-auto" src={Siber} width={75} height="50" alt="Siber Kreasi" />
            </div>

          </div>
        </div>  

        <div className="py-12 md:py-20">

         {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <p className="text-xl text-gray-600" data-aos="zoom-y-out">Industry Partner</p>
          </div>
          
            {/* Items */}
            <div className="max-w-sm md:max-w-3xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5" data-aos="zoom-y-out">

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <Image className="md:max-w-none mx-auto" src={Solana} width={75} height="50" alt="Solana" />
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <Image className="md:max-w-none mx-auto" src={Tezos} width={75} height="50" alt="Tezos" />
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <Image className="md:max-w-none mx-auto" src={Algorand} width={75} height="50" alt="Algorand" />
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <Image className="md:max-w-none mx-auto" src={Binance} width={75} height="50" alt="Binance" />
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <Image className="md:max-w-none mx-auto" src={Tokocrypto} width={75} height="50" alt="Tokocrypto" />
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <Image className="md:max-w-none mx-auto" src={Pintu} width={75} height="50" alt="Pintu" />
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <Image className="md:max-w-none mx-auto" src={Morpheus} width={75} height="50" alt="Sermorpheus" />
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <Image className="md:max-w-none mx-auto" src={Lenovo} width={75} height="50" alt="Lenovo" />
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
              <Image className="md:max-w-none mx-auto" src={Acer} width={75} height="50" alt="Acer" />
              </div>

            </div>
        </div>      
      </div>
    </section>
  )
}