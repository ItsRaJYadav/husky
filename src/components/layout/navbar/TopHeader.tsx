import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si";

export default function TopHeader() {
    return (
        <div className='bg-primaryColor min-w-full'>
            <div className="container py-2  md:px-10">
                <ul className="flex items-center justify-center md:justify-end">
                    <li className="flex items-center mr-4">
                        <FaPhone className="mr-1 text-white" />
                        <a href="tel://9717692555" className='text-white'>+91 97176 92555</a>
                    </li>
                    <a href="#">
                        <li className="flex items-center mr-4">
                            <FaFacebook className="mr-1 text-white" />
                        </li>
                    </a>
                    <a href="#">
                        <li className="flex items-center mr-4">
                            <FaTwitter className="mr-1 text-white" />
                        </li>
                    </a>
                    <a href="#">
                        <li className="flex items-center mr-4">
                            <FaInstagram className="mr-1 text-white" />
                        </li></a>

                    <a href="#">
                        <li className="flex items-center">
                            <SiLinkedin className="mr-1 text-white" />
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}
