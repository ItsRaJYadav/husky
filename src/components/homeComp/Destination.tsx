import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import Link from 'next/link';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Card {
    id: number;
    title: string;
    totalHotel: number;
    imageUrl: string;
}
//D:\project\web-frontend\public\images\home\honeymoon.jpg

const cards: Card[] = [
    { id: 1, title: 'Honeymoon', totalHotel: 100, imageUrl: '/images/home/couple.jpg'},
    { id: 2, title: 'Family', totalHotel: 120, imageUrl: '/images/home/family.jpg' },
    { id: 3, title: 'Group', totalHotel: 115, imageUrl: '/images/home/young.jpg' },
    { id: 4, title: 'Relax', totalHotel: 109, imageUrl: '/images/home/yoga.jpg' },
    { id: 5, title: 'Nature', totalHotel: 97, imageUrl: '/images/home/ferry.jpg' },
];

export default function Destination() {
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        pauseOnHover: true,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className='container p-1 overflow-x-hidden'>
                <div className='flex items-center justify-center py-4'>
                    <h2 className='text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl relative'>
                        Explore Destination By the Theme
                        <div className='absolute inset-x-0 mx-auto w-32 bg-indigo-800 my-3'>
                            <hr className="h-1 border-0 rounded " />
                        </div>
                    </h2>
                </div>

                <Slider {...settings}>
                    {cards.map(card => (
                        <div key={card.id} className="p-4 ">
                            <Link href={`/all-hotels?q=${encodeURIComponent(card.title)}`}>
                                <div className="max-w-sm bg-white border shadow-md overflow-hidden rounded-lg">
                                    <div className='p-1'>
                                        <Image
                                            width={500}
                                            height={300}
                                            src={card.imageUrl}
                                            alt={card.title}
                                            className="rounded-md w-full object-cover"
                                            style={{borderRadius:"25px"}}
                                        />
                                    </div>

                                    <div className="p-2">
                                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">{card.title}</h5>
                                        <p className="font-normal text-gray-700">{card.totalHotel} Hotels</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>

        </>
    );
}
