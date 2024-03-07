import React from 'react';
import { ImQuotesLeft } from "react-icons/im";
import Slider from "react-slick";
import Image from 'next/image';
import Link from 'next/link';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
    id: number;
    quote: string;
    image: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote:
            "Living here has been a delightful experience! The facilities are excellent, and the environment is peaceful. I highly recommend it.",
        image: '/images/home/review_1.png',
        name: 'jasmin Ahuja',
        role: 'user',
    },
    {
        id: 2,
        quote:
            "I'm extremely satisfied with my stay. The ambiance is wonderful, and the amenities provided are top-notch. Great place! Thanks for the best services",
        image: '/images/home/review_2.png',
        name: 'Riyanshi Yadav',
        role: 'Hotel manager',
    },
    {
        id: 3,
        quote:
            "Managing this Hotel has been fantastic! Seeing residents happy and comfortable is our top priority, and we're proud to provide a great living experience.",
        image: '/images/home/review_3.png',
        name: 'Robert Methew',
        role: 'User',
    },
    {
        id: 4,
        quote:
            "Managing this Hotel has been fantastic! Seeing residents happy and comfortable is our top priority, and we're proud to provide a great living experience.",
        image: '/images/home/review_3.png',
        name: 'Raj yadav',
        role: 'User',
    },
    {
        id: 5,
        quote:
            "I'm extremely satisfied with my stay. The ambiance is wonderful, and the amenities provided are top-notch. Great place! Thanks for the best services",
        image: '/images/home/review_2.png',
        name: 'Riyanshi Yadav',
        role: 'Hotel manager',
    },
];



const TestimonialsSection: React.FC = () => {
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
                breakpoint: 2440,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
                <div className='flex items-center justify-center py-8 mb-8'>
                    <h2 className='text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl relative'>
                        Our Testimonial
                        <div className='absolute inset-x-0 mx-auto w-32 bg-indigo-800 my-3 '>
                            <hr className="h-1 border-0 rounded " />
                        </div>
                    </h2>
                </div>

                <Slider {...settings}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="p-4 ">
                            <Link href={`/customer-reviews`}>

                                <div key={testimonial.id} className="mb-8 text-center bg-white rounded shadow ">
                                    <div className="relative z-20 -mt-14 ">
                                        <div className="p-8">
                                            <span className="inline-block p-3 mb-3 text-xs text-white bg-primaryColor rounded-full">
                                                <ImQuotesLeft />
                                            </span>
                                            <p className="mb-4 text-base leading-7 text-gray-800">
                                                {testimonial.quote.length > 100 ? `${testimonial.quote.slice(0, 70)}...` : testimonial.quote}
                                            </p>

                                        </div>
                                        <div className="flex flex-col items-center pb-2 bg-primaryColor gap-x-4">

                                            <div className="relative w-24 h-24 -mt-16 overflow-hidden border-4 border-white rounded-full">
                                                <Image
                                                    className="object-cover w-full h-full transition-all hover:scale-110"
                                                    src={testimonial.image}
                                                    alt={testimonial.image}
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                            <div className="mt-3 text-center info">
                                                <h2 className="text-lg font-bold text-white ">
                                                    {testimonial.name}
                                                </h2>
                                                <span className="block text-xs font-semibold text-gray-100 uppercase ">
                                                    {testimonial.role}
                                                </span>
                                            </div>
                                        </div>
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
export default TestimonialsSection;