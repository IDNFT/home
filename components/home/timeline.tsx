import React from "react";
import Image from "next/image";
import { InstagramEmbed } from 'react-social-media-embed';


interface timeline2024Props {
  img: string;
  univ: string;
  date: string;
  city: string;
  post: string;
  docs: string;
}

const Timeline = ({ img, univ, date, city, post, docs }: timeline2024Props) => {
  return (
    <div className="relative">
        {/* Desktop View */}
        <div className="hidden md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
            {/* <!-- Icon --> */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                <Image
                src={img}
                alt="Logo Univ"
                width={50}
                height={50}
                className="p-1"
                />
            </div>
            {/* <!-- Date --> */}
            <time className="font-medium text-xl text-gray-500 md:w-28">{city}</time>
            </div>
            {/* <!-- Title --> */}
            <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold pr-1">{univ}</span>{date}</div>
        </div>
        {/* <!-- Card --> */}
        <div className="hidden md:flex gap-4 justify-center bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
            
            {/* Instagram Post */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url={post} width={356} />
            </div>
            {/* Instagram Post */}
            <div style={{ display: 'flex', justifyContent: 'center'  }}>
            <InstagramEmbed url={docs} width={356} />
            </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden items-center md:space-x-4 mb-3">

            {/* City */}
            <div className="flex mt-8 font-light text-gray-500 text-lg ml-[3.5rem]">
              {city}
            </div>

            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
            {/* <!-- Icon --> */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                <Image
                src={img}
                alt="Logo Univ"
                width={50}
                height={50}
                className="p-1"
                />
            </div>
            {/* <!-- Date --> */}
            <time className="font-medium text-xl text-slate-800 md:w-28">{univ}</time>
            </div>
            {/* <!-- Title --> */}
            <div className="text-slate-500 ml-14"><span className="text-gray-500 font-light">{date}</span></div>
        </div>
        {/* <!-- Card --> */}
        <div className="md:hidden bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
            
            
            {/* Instagram Post */}
            <div style={{ display: 'flex', justifyContent: 'center'  }}>
            <InstagramEmbed url={docs} width={356} />
            </div>
        </div>
    </div>
  );
};

export default Timeline;
