import Image from "next/image"
import UGM from '@/public/univ-ugm.svg'
import ITS from '@/public/univ-its.svg'
import UM from '@/public/univ-um.svg'
import UII from '@/public/univ-uii.svg'
import UB from '@/public/univ-ub.svg'
import Widyatama from '@/public/univ-widyatama.svg'
import Petra from '@/public/univ-petra.svg'
import UPI from '@/public/univ-upi.svg'
import Telkom from '@/public/univ-telkom.svg'
import IsiBali from "@/public/univ-isibali.svg"
import Andalas from "@/public/univ-andalas.svg"
import Binus from "@/public/univ-binus.svg"
import UPN from "@/public/univ-upn.svg"

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
          <div className="max-w-sm md:max-w-3xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5 items-center">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-750">
            <Image className="md:max-w-none mx-auto" src={UGM} width={75} height="50" alt="UGM" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-75">
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
      </div>
    </section>
  )
}