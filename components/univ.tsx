import React from "react";
import Image from "next/image";

interface partnerProps {
  img: string;
  univ: string;
}

const univList = [
  { img: '/images/logo-itb.png', univ: 'ITB' },
  { img: '/images/logo-ui.png', univ: 'UI' },
  { img: '/images/logo-ugm.png', univ: 'UGM' },
]


const Univ = ({ img, univ }: partnerProps) => {
  return (
    <div className="relative">
        
        {/* Items */}

            {/* Logo Univ */}
            <div className="items-center justify-center py-2 col-span-2 md:col-auto saturate-0 hover:saturate-100">
            
            <Image className="md:max-w-none mx-auto" src={img} width={65} height={65} alt="Logo Univ" />
           
            <h3 className='text-center text-sm text-gray-600 mt-3'>{univ}</h3>
            </div>
    </div>
  );
};

export default Univ;
