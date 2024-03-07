'use client';
import React, { useEffect, useState } from 'react';
import { FaHotel, FaUser } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { GoOrganization } from "react-icons/go";
import { MdContactPhone } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";

import { selectUser } from '@/redux/features/authSlice';


const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname()
    const user = useSelector(selectUser);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isMobileMenuOpen]);

    const links = [
        { href: '/all-hotels', text: 'Find Stay' },
        { href: '/about-us', text: 'About Us' },
        { href: '/contact-us', text: 'Contact Us' }
    ];

    const menuItems = [
        { label: 'Find stay', href: '/all-hotels', icon: <FaHotel className='h-10 w-8' /> },
        { label: 'About Us', href: '/about-us', icon: <GoOrganization className='h-10 w-8' /> },
        { label: 'Contact Us', href: '/contact-us', icon: <MdContactPhone className='h-10 w-8' /> }
    ];

    const menuVariants = {
        hidden: {
            x: -300,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    // console.log(user)

    return (
        <>
            <header className=' text-slate-800 px-10'>
                <nav className='container mx-auto flex flex-col items-center justify-between px-4 py-2 md:flex-row'>
                    <div className='flex flex-row items-center justify-between'>
                        <Link href='/' className='flex  '>
                            <Image
                                height={50}
                                width={70}
                                src='/logo/logo2x.png'
                                className=''
                                alt=' Logo'
                            />

                        </Link>
                        <div className='md:hidden px-10'>
                            {
                                !user ? <Link href='/auth/login' className="bg-primaryColor text-white font-bold py-2 px-6 rounded">
                                    Login
                                </Link> :
                                    <Link href='/user-dashboard'>
                                        <div className="bg-primaryColor text-white font-bold py-2 px-6 rounded flex items-center justify-center">
                                            <FaUser className="mr-2" /> User
                                        </div>
                                    </Link>
                            }

                        </div>
                        <div className='flex items-center justify-between md:hidden'>

                            <button
                                className=' ml-2 focus:outline-none'
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                            </button>
                        </div>
                    </div>

                    <ul className='hidden md:flex md:items-center md:justify-center space-x-4 text-lg whitespace-nowrap p-1'>
                        {links.map((link, index) => (
                            <motion.li key={index} className="min-w-max" variants={menuVariants}>
                                <Link
                                    href={link.href}
                                    className={`${pathname === link.href ? "border-b-2 border-gray-900" : "cursor-pointer"} rounded py-2 pl-3 pr-4`}
                                    onClick={closeMobileMenu}
                                >
                                    {link.text}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>




                    <div className='flex items-center'>
                        <button className="hidden md:inline-block bg-backgroundColor text-primaryColor hover:bg-primaryColor hover:text-white border-2 border-primaryColor py-2 px-4 mr-2 md:mr-5">
                            List Your Property
                        </button>
                        {
                            user ?
                                <div>
                                    <Link href='/admin-dashboard' className="hidden md:inline-block bg-primaryColor text-white font-bold py-2 px-6 md:px-10">
                                        Go to Dashboard
                                    </Link>
                                </div>
                                :
                                <Link href='/auth/login' className="hidden md:inline-block bg-primaryColor text-white font-bold py-2 px-6 md:px-10">
                                    Login
                                </Link>
                        }
                    </div>


                    {isMobileMenuOpen && (
                        <div className='fixed left-0 top-0 z-40 h-full w-full bg-gray-600 bg-opacity-70 backdrop-blur-lg backdrop-filter' />
                    )}

                    <div
                        className={`fixed left-0 top-0 h-full w-80 transform bg-gray-100 text-slate-800 duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                            } z-50`}
                    >
                        <button
                            className='absolute right-4 top-4 focus:outline-none'
                            onClick={toggleMobileMenu}
                        >
                            <FiX size={35} />
                        </button>
                        <div className='py-10'>
                            <ul className='flex flex-col items-start space-y-2 p-4'>
                                {menuItems.map((item, index) => (
                                    <li key={index} className='flex items-center'>
                                        {item.icon}
                                        <Link href={item.href} onClick={closeMobileMenu} className='ml-3 text-2xl'>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;

