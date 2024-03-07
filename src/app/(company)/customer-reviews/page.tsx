'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiStar } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
// import { FaStarFill } from 'react-icons/fa';
import Image from 'next/image';

interface Comment {
    id: number;
    name: string;
    date: string;
    rating: number;
    text: string;
    image: string;
}

const hotelReviews: Comment[] = [
    {
        id: 1,
        name: 'Riyanshi',
        date: '12, SEP 2022',
        rating: 4,
        text: 'The hotel accommodation was comfortable and the amenities provided were great.',
        image: '/images/home/review_1.png',
    },
    {
        id: 2,
        name: 'raj yadav',
        date: '12, SEP 2023',
        rating: 3,
        text: 'The location of the hotel was convenient, but the internet connection was a bit slow.',
        image: '/images/home/review_3.png',
    },
    {
        id: 3,
        name: 'Pankaj kumar',
        date: '15, SEP 2022',
        rating: 5,
        text: 'I had an amazing experience! The staff was friendly and helpful. Highly recommended!',
        image: '/images/home/review_3.png',
    },
    {
        id: 4,
        name: 'Rohit kumar',
        date: '18, SEP 2022',
        rating: 4,
        text: 'Clean and well-maintained facilities. Overall, a pleasant stay.',
        image: '/images/home/review_3.png',
    },
];


const Page: React.FC = () => {

    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // console.log('Submitted:', { review, name, email });
        toast.success('Your feedback was received');
        setReview('');
        setName('');
        setEmail('');
    };
    const likeHandle = () => {
        toast.success('Your liked recorded Successfully');
    };

    return (
        <>

            <div className="bg-white max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
                <div className="max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center ">
                            <div className="relative flex flex-col items-center">
                                <h1 className="text-3xl font-bold ">
                                    {" "}
                                    Customer <span className="text-primaryColor"> Reviews</span>{" "}
                                </h1>
                                <div className="flex w-40 mt-2 mb-6 overflow-hidden rounded">
                                    <div className="flex-1 h-2 bg-violet-400"></div>
                                    <div className="flex-1 h-2 bg-violet-600"></div>
                                    <div className="flex-1 h-2 bg-violet-800"></div>
                                </div>
                            </div>
                            <p className="mb-12 text-base text-center text-gray-700">
                                See What Our Valuable Customers Says
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:grid-cols-[50%,1fr] grid grid-cols-1 gap-6">
                    <div>
                        {hotelReviews.map((comment) => (
                            <div key={comment.id} className="p-6 mb-6 bg-white rounded-md lg:p-6 shadow-md">
                                <div className="items-center justify-between block mb-4 lg:flex ">
                                    <div className="flex flex-wrap items-center mb-4 lg:mb-0">
                                        <Image
                                            height={500}
                                            width={500}
                                            alt='userImage'
                                            className="object-cover mb-1 mr-2 rounded-full shadow w-14 h-14 lg:mb-0"
                                            src={comment.image}
                                        />
                                        <div>
                                            <h2 className="mr-2 text-lg font-medium text-gray-700 ">
                                                {comment.name}
                                            </h2>
                                            <p className="text-sm font-medium text-gray-700 ">
                                                {" "}
                                                {comment.date}{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-md  text-gray-600 ">
                                            {" "}
                                            2h ago{" "}
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-4 text-sm text-gray-700 ">
                                    {comment.text}
                                </p>
                                <div className="flex items-center">
                                    <div className="flex mr-3 text-sm text-gray-700 ">
                                        <button onClick={() => likeHandle()}>
                                            <BiStar className="w-4 mr-1 text-blue-500" />
                                        </button>
                                        <span>Like 12</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="p-6 bg-white rounded-md shadow-md">

                            <div className="p-6 mb-6 bg-gray-50 ">
                                <h2 className="mb-6 text-xl font-semibold text-left font-gray-600 ">
                                    Ratings & Reviews
                                </h2>
                                <div className="flex justify-start">

                                    <div className="flex items-center mb-2 space-x-2 text-3xl leading-none text-gray-600 ">
                                        <div className="items-center font-bold"></div>
                                        <div className="items-center">
                                            <ul className="flex items-center ">
                                                <li>
                                                    <FaStar className="w-4 mr-1 text-yellow-400" />
                                                </li>
                                                <li>
                                                    <FaStar className="w-4 mr-1 text-yellow-400" />
                                                </li>
                                                <li>
                                                    <FaStar className="w-4 mr-1 text-yellow-400" />
                                                </li>
                                                <li>
                                                    <FaStar className="w-4 mr-1 text-yellow-400" />
                                                </li>
                                                <li>
                                                    <BiStar className="w-4 mr-1 text-gray-500" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 text-xs ">
                                    {hotelReviews.length} customer reviews
                                </div>
                            </div>

                            <h2 className="mb-6 text-xl font-semibold text-left font-gray-600">
                                Leave a comment
                            </h2>
                            <form onSubmit={handleSubmit} className="">
                                <div className="px-2 mb-6">
                                    <label htmlFor="review" className="block mb-2 font-medium text-gray-700">
                                        Your review *
                                    </label>
                                    <textarea
                                        id="review"
                                        name="review"
                                        placeholder="Write a review"
                                        className="block w-full px-4 leading-tight text-gray-700 border rounded bg-gray-50 py-7"
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="px-2 mb-6">
                                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50 lg:mb-0"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="px-2 mb-6">
                                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="abc@gmail.com"
                                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded bg-gray-50"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="px-2">
                                    <button type="submit" className="px-4 py-2 font-medium text-gray-100 bg-violet-500 rounded shadow">
                                        Submit Comment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Page;
