import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

import HomeFilter from '../filters/homeFilter';

const HeroSection = () => {
    return (
        <div className="relative h-screen ">
            <div className="h-full w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/images/home/banner3.jpg')` }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-full max-w-4xl px-4 mb-5">
                        <div className="md:flex md:items-center md:justify-start">
                            <div className="md:absolute md:left-14 top-10  md:top-1/4 md:transform md:-translate-y-1/2">
                                <div className="w-full px-10">
                                    <h1 className="w-11/12 text-gray-800 text-3xl md:text-6xl font-bold mb-6 mt-3 md:mt-0 md:mb-6 hidden md:block">Book hotel at your own price...</h1>
                                    <div className=" items-center gap-2 font-semibold text-lg md:mt-0 md:mb-6 hidden md:flex">
                                        <Link href="/all-hotels">Explore Now</Link>
                                        <FaArrowRight className="text-primaryColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HomeFilter />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

