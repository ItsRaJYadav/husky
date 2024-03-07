/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"
// for using the useMediaQuery

import React from 'react'
import { FaBed, FaWifi } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { IoIosStarOutline } from "react-icons/io";
import { IoTelescope } from 'react-icons/io5';
import { LuParkingCircle } from "react-icons/lu";
import { MdBalcony } from "react-icons/md";
import { Box, Button, Card, CardContent, Grid, LinearProgress, Rating, Stack, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link';

import Recommended from '@/components/homeComp/Recommended';
import { appColors } from '@/constants/colors';
import { spacing } from '@/constants/spacing'



const Icons = ({ icon, title }: { icon: any, title: string }) => {
  return (
    <Stack alignItems={'center'}>
      {icon}
      <Typography variant='body2'>{title}</Typography>
    </Stack>
  )
}
export default function Page() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <div className="hotel-detail-header">
        <Grid container className='hotel-details-img-grid'>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <img src='/images/hotels/Image0.png' alt='hotel-images' />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Grid container className='hotel-details-img-grid-sub'>
              <Grid item sm={3} xs={3} md={6} lg={6}>
                <img src='/images/hotels/Image-1.png' alt='hotel-images' />
              </Grid>
              <Grid item sm={3} xs={3} md={6} lg={6}>
                <img src='/images/hotels/Image-2.png' alt='hotel-images' />
              </Grid>
              <Grid item sm={3} xs={3} md={6} lg={6}>
                <img src='/images/hotels/Image-3.png' alt='hotel-images' />
              </Grid>
              <Grid item sm={3} xs={3} md={6} lg={6}>
                <img src='/images/hotels/Image.png' alt='hotel-images' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid container sx={{ position: 'relative' }}>
        <Grid item sm={12} xs={12} md={8} lg={8}>
          <Stack spacing={5} className={`main-content ${spacing.pagePadding}`}>
            <Box pt={5}>
              <Stack flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'}>
                <Typography variant='h4'>
                  Luxurious Heritage Hotel
                </Typography>
                <Box>
                  <Rating name="half-rating" defaultValue={4.7} precision={0.5} readOnly />
                  <Typography variant='body1'>(650 reviews)</Typography>
                </Box>
              </Stack>
              <Typography variant='caption'>Near IGI Airport, Airocity road, Delhi</Typography>

            </Box>
            <Card>
              <CardContent>
                {/* facilities */}
                <Stack direction={'row'} flexWrap={'wrap'} spacing={4}>
                  {
                    iconArr.map((item, index) =>
                      <Icons key={index} icon={item.icon} title={item.title} />
                    )
                  }
                </Stack>
                {/* hotel info */}
                <Box pt={4}>
                  <Typography variant='body2'>
                    Located in Dubai, 9.4 km from Mall of the Emirates, Holiday Inn & Suites - Dubai Science Park, an IHG Hotel provides accommodation
                    with a restaurant, free private parking and a bar. With free WiFi, this 4-star hotel offers room service and luggage storage space. Guests
                    can enjoy city views.
                  </Typography>
                  <Typography variant='body2'>
                    At the hotel, each room comes with a desk. Complete with a private bathroom equipped with a bidet and free toiletries, guest rooms at
                    Holiday Inn & Suites - Dubai Science Park, an IHG Hotel have a flat-screen TV and air conditioning, and certain rooms include a balcony.
                    At the accommodation each room is equipped with bed linen and towels.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            {/*Highlights*/}
            <Card>
              <CardContent>
                <Typography variant='h5'>Highlights</Typography>
                <Grid container>
                  {highlights.map((item, index) =>
                    <Grid item sm={12} xs={12} md={6} lg={6} key={index}>
                      <Typography variant='body2' p={3}>✔️ {item}</Typography>
                    </Grid>
                  )}
                </Grid>

              </CardContent>
            </Card>
            {/* rating box */}
            <Box>
              <Typography pb={5} variant='h5'>Ratings and reviews</Typography>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 2, }}>
                      <div className='star-rating-span bg-green-700 p-3 text-white w-fit' >
                        <Typography >3.9 </Typography><IoIosStarOutline />
                      </div>
                      <Typography>Good</Typography>
                      <Typography>3125 ratings</Typography>
                    </Box>
                    <Stack flex={7}>
                      {ratings.map((item, index) =>
                        <Stack direction={'column'} key={index}>
                          <div className="star-rating-span">
                            <Typography>{item.rate}</Typography> <IoIosStarOutline />
                          </div>
                          <LinearProgress color='info' variant="determinate" value={item.progress} />
                        </Stack>
                      )}
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            {/* recommended */}
            <Box>

            </Box>
          </Stack>
        </Grid>
        <Grid p={5} className='hotel-details-price-card' item sm={12} xs={12} md={4} lg={4} >
          <Card sx={{ position: 'sticky', top: 0 }}>
            <CardContent>
              <Box>
                <Stack direction={!isSmallScreen ? 'column' : 'row'} sx={{ alignItems: isSmallScreen ? 'center' : 'normal' }}>
                  <Typography pr={2} variant='h4' color={appColors.primary}>Rs 2,000/</Typography>
                  <Typography variant='caption' sx={{ textDecoration: 'line-through' }}>Rs 31,655/</Typography>

                </Stack>
                <Typography variant='caption'>+ Rs169 taxes & fees per room per night</Typography>

              </Box>
              <Stack spacing={4}>
                {isSmallScreen ? null :
                  <>
                    <Stack>
                      <Typography>Deluxe Room</Typography>
                      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    </Stack>
                    <Stack spacing={2} className="hotel-facilities-card" direction={'row'} flexWrap={'wrap'} color={'primary'} >
                      <span><FaBed color={appColors.primary} /> <Typography variant="body2">Upto 5 Stars</Typography></span>
                      <span><GiMeal color={appColors.primary} /> <Typography variant="body2">Meal</Typography></span>
                      <span><IoTelescope color={appColors.primary} /> <Typography variant="body2">Sightseen</Typography></span>
                    </Stack>
                  </>}
                <Link href="/user-dashboard/booking/booking-details">
                  <Button variant="contained" fullWidth>
                    Book Now
                  </Button>
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box className={spacing.pagePadding}>
        <Recommended/>
      </Box>
    </div>
  )
}

const iconArr = [
  {
    icon: <GiMeal />,
    title: 'Breakfast'
  }, {
    icon: <FaWifi />,
    title: 'Wifi'
  }, {
    icon: <FaRegSnowflake />,
    title: 'Air Conditioning'
  }, {
    icon: <MdBalcony />,
    title: 'Balcony'
  }, {
    icon: <GiMeal />,
    title: 'Meals'
  }, {
    icon: <LuParkingCircle />,
    title: 'Parking'
  },
]
const highlights = [
  "Dhow cruise in the evening with onboard entertainment",
  "Dhow cruise in the evening with onboard entertainment",
  "Dhow cruise in the evening with onboard entertainment",
  "Dhow cruise in the evening with onboard entertainment",
  "Dhow cruise in the evening with onboard entertainment",
  "Dhow cruise in the evening with onboard entertainment",
]
const ratings = [
  {
    rate: 5,
    progress: 50
  }, {
    rate: 4,
    progress: 24
  }, {
    rate: 3,
    progress: 15
  }, {
    rate: 2,
    progress: 8
  }, {
    rate: 1,
    progress: 1
  },
]
