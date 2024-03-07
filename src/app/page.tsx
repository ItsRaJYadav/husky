/* eslint-disable @next/next/no-img-element */
'use client'
import { Box } from "@mui/material"

import AppDownloadPage from '@/components/homeComp/AppDownloadPage';
import BudgetDealpage from '@/components/homeComp/BudgetDealpage';
import Destination from "@/components/homeComp/Destination"
import ExclusiveDealsPage from '@/components/homeComp/ExclusiveDealsPage';
import Hero from '@/components/homeComp/Hero';
import HotelDealsPage from '@/components/homeComp/HotelDealsPage';
import HotelReviewsLocations from '@/components/homeComp/HotelReviewsLocations';
import Recommended from '@/components/homeComp/Recommended';
import TestimonialsSection from '@/components/homeComp/Testimonial';
import { spacing } from "@/constants/spacing";

export default function Page(){
  
  return(
    <>
      <Hero />
      <Destination />
      <Box className={spacing.pagePadding}>
        <ExclusiveDealsPage />
        <HotelDealsPage />
        <BudgetDealpage />
        <HotelReviewsLocations/>
        <Recommended />
        <AppDownloadPage/>
      </Box>
      <TestimonialsSection />
    </>
  )
}
