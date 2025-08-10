'use client'

import { useState } from "react"
import Timeline from "@/components/home/timeline"

import { timeline2024Data, timeline2023Data } from "@/components/constant/data"

export default function TimelineDetailed() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleShowMore = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (

    <section className="relative antialiased">

        <div className="relative justify-center
         flex flex-col overflow-hidden pb-12 md:pb-16 px-4 sm:px-8">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-12">
                <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">Web3 on Campus</p>
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700 text-3xl sm:text-[2.5rem] leading-8 font-extrabold" data-aos="zoom-y-out" data-aos-delay="150">Timeline</h1>
            </div>

            <div className="w-full mx-auto">

                    {/* <!-- Vertical Timeline --> */}
                    <div 
                    id="expanded"
                    data-testid="expanded"
                    className="space-y-8 md:px-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[10.5rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent overflow-hidden">

                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">2024</p>
                        </div>

                        <div className="space-y-6 md:space-y-8">
                        {timeline2024Data.map((timeline) => (
                        // eslint-disable-next-line react/jsx-key
                        <Timeline
                            img={timeline.img}
                            univ={timeline.univ}
                            city={timeline.city}
                            date={timeline.date} 
                            post={timeline.post}
                            docs={timeline.docs}                      
                            />
                        ))}
                        </div>
                        
                        {isExpanded && (
                        <div className="space-y-8 relative before:absolute">

                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="200">2023</p>
                        </div>

                        {/* Expanded */}
                        <div className="space-y-6 md:space-y-8">
                        {timeline2023Data.map((timeline) => (
                        // eslint-disable-next-line react/jsx-key
                        <Timeline
                            img={timeline.img}
                            univ={timeline.univ}
                            city={timeline.city}
                            date={timeline.date}
                            post={timeline.post}
                            docs={timeline.docs}                       
                            />
                        ))}
                        </div>
                            
                        </div>
                        )}
                        <div className="flex inset-x-0 top-0 mx-auto min-w-screen items-center place-content-center overflow-hidden">
                        <a 
                         href="#expanded"
                         onClick={toggleShowMore} 
                         className="relative font-bold z-10 inset-x-0 bottom-0 min-w-screen justify-center py-2 px-4 text-center text-white mb-4 rounded-full bg-red-700 hover:bg-gray-200 hover:text-gray-700"
                         aria-hidden="true">
                         {isExpanded ? 'Show Less' : 'Show More'}
                        </a>
                        <svg width="1920" height="214" viewBox="0 0 1920 214" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 inset-x-0 bottom-0 overflow-hidden">
                            <rect width="1920" height="214" fill="url(#paint0_radial_61_1619)"/>
                            <defs>
                            <radialGradient id="paint0_radial_61_1619" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(960 477) rotate(-90) scale(360 4279.63)">
                            <stop stopColor="red"/>
                            <stop offset="1" stopColor="white" stop-Opacity="0"/>
                            </radialGradient>
                            </defs>
                        </svg>

                        </div>

                    </div>
                    {/* <!-- End: Vertical Timeline --> */}
                    
                    <div className="flex inset-x-0 mx-auto mt-4 min-w-screen place-content-end items-center">
                        
                        <button 
                        onClick={() => window.open('https://www.idnft.id/timeline/', '_blank')}
                        className="flex gap-1 opacity-50 hover:opacity-90 items-center">
                            See More Detail 
                        <svg width="15" height="15" viewBox="0 0 1085 1085" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M147.56 154.07H611.94L620.62 162.75L622.79 167.09V221.34L614.11 232.19L609.77 234.36L169.26 236.53L138.88 243.04L117.18 256.06L99.82 271.25L86.8 292.95L82.46 
                                318.99V841.96L86.8 868L97.65 887.53L112.84 904.89L143.22 920.08L156.24 924.42H696.57L720.44 915.74L739.97 902.72L755.16 885.36L766.01 863.66L770.35 848.47L772.52 
                                635.81L779.03 622.79L787.71 618.45H839.79L850.64 624.96L854.98 635.81V846.3L850.64 876.68L841.96 902.72L828.94 926.59L813.75 946.12L805.07 959.14L779.03 980.84L766.01 
                                989.52L713.93 1006.88L698.74 1009.05H154.07L121.52 1002.54L84.63 987.35L60.76 969.99L34.72 943.95L15.19 913.57L4.34 887.53L0 861.49V301.63L4.34 273.42L17.36 
                                245.21L32.55 221.34L56.42 195.3L75.95 182.28L106.33 164.92L134.54 156.24L147.56 154.07Z"/>
                        <path d="M726.95 75.9502H1056.79L1074.15 84.6302L1082.83 95.4802L1085 101.99V440.51L1078.49 453.53L1063.3 464.38L1056.79 466.55H1037.26L1022.07 460.04L987.35 427.49L976.5 
                                414.47L959.14 399.28L930.93 371.07L920.08 358.05L911.4 353.71L900.55 362.39L885.36 379.75L818.09 447.02L807.24 457.87L726.95 538.16L716.1 549.01L637.98 627.13L627.13 
                                637.98L546.84 718.27L535.99 729.12L520.8 744.31L514.29 748.65H494.76L477.4 733.46L414.47 670.53L412.3 655.34L416.64 644.49L809.41 251.72L796.39 236.53V232.19L787.71 
                                227.85L750.82 190.96L739.97 177.94L722.61 162.75L707.42 147.56L698.74 134.54L696.57 128.03V101.99L709.59 84.6302L726.95 75.9502Z"/>
                        </svg>
                        </button>
                        
                    </div>
                </div>    
            </div>

        </div>
    </section>
      )
    }