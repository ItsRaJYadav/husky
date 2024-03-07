import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-100">
        <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div className="max-w-sm">
            <div className="mb-6 flex items-center space-x-2">
              <Image
                src="/logo/logo2x.png"
                alt="bidinnLogo"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
            </div>
            <div className="text-gray-600 text-md ">
              BidINN is an emerging Indian brand in the hospitality world. We
              provide a platform for anyone who wishes to list their vacant
              properties with us and rent them to the common public
            </div>
          </div>

          <div className="xl:text-left">
            <div className="mt-4 mb-2 font-medium xl:mb-4">About</div>
            <nav
              aria-label="Footer Navigation"
              className="text-gray-600 inline-block"
            >
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Privacy Policy</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Sitemap</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Careers</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Terms & Conditions</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" xl:text-left">
            <div className="mt-4 mb-2 font-medium xl:mb-4">Quick Links</div>
            <nav
              aria-label="Footer Navigation"
              className="text-gray-600 inline-block"
            >
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Cancel Booking</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Payment History</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>My bids</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Blogs</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="xl:text-left">
            <div className="mt-4 mb-2 font-medium xl:mb-4">Support</div>
            <nav
              aria-label="Footer Navigation"
              className="text-gray-600 inline-block"
            >
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Help Center</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Safety Information</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Privacy policy</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    <div className="flex justify-between">
                      <span>Cookie Policy</span>
                      <span className="hidden sm:inline"></span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <a
            href="https://bsse.org.in"
            target="_home"
            rel="noopener noreferrer"
          >
            <Typography>IT Partner-bsse.org.in</Typography>
          </a>
        </Box>
        <div className="bg-gray-100 ">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-y-5  py-3 text-center text-gray-700 sm:flex-row sm:justify-between sm:text-left">
            <div className="mt-4 left-0">
              Copyright &copy; {currentYear} Bidinn | All Rights Reserved
            </div>
            <div
             
              style={{display:"flex",flexDirection:"row", flexWrap: 'wrap' }}
            >
              <div className="flex items-center gap-4">
                <TfiWorld className="text-2xl" style={{marginLeft:8}} />
                <form className="max-w-sm">
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value="IN">English (IN)</option>
                    <option value="US">English (US)</option>
                    <option value="FR">English(FR)</option>
                    <option value="DE">English(DE)</option>
                  </select>
                </form>
              </div>
              <div className="flex gap-2 mx-0 mt-2" style={{ paddingLeft: 8 }}>
                <a href="#">
                  <FaLinkedinIn className="text-2xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href="#">
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
