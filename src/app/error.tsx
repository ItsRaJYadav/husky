'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        Error
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-600 mb-8"
      >
        Oops! Something went wrong.
      </motion.p>
      <Link
        href="/"
        className="px-4 py-2 bg-primaryColor text-white rounded  transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
