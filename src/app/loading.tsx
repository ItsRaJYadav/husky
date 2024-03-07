'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
            <motion.div
                className="w-20 h-20 border-4 border-primaryColor rounded-full animate-spin"
                style={{ borderTopColor: '#ffffff' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, loop: Infinity, ease: 'linear' }}
            />
        </div>
    );
};

export default Loader;
