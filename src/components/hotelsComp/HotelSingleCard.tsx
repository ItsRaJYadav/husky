/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaBed } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { IoTelescope } from "react-icons/io5";
import { Button, Card, Grid, Rating, Stack, Typography } from "@mui/material"
import Link from 'next/link';

import { appColors } from '@/constants/colors';
import { Hotel } from '@/types/hotelTypes';

import { DividerLine } from "../general/DividerLine";

interface Props {
    hotel: Hotel;
}


export const HotelSingleCard: React.FC<Props> = ({ hotel }) => {
    // console.log(hotel)
    return (
        <Link href={`all-hotels/${hotel.id}`}>
            <Card className="p-4 m-1">
                <Grid container >
                    <Grid item sm={12} xs={12} md={3} lg={3}  >
                        <img
                            style={{ textAlign: 'center', maxHeight: '280px', width: '100%' }}
                            src="/images/hotels/hotel_list_img.png"
                            alt="hotel img"
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={9} lg={9} >
                        <Stack direction={'column'} className="pl-4" flexWrap={'wrap'}>
                            <Typography variant="h6">
                                {hotel.name}
                            </Typography>
                            <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'}>
                                <Typography variant="h4" color={'primary'} className="pr-3">₹ {hotel.price}/ </Typography>
                                <Typography variant="subtitle2" sx={{ textDecoration: 'line-through' }}> Rs {hotel.price}/</Typography>
                            </Stack>
                            <Typography noWrap
                                sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }} // Truncates text with ellipsis

                            >{hotel?.description.split(' ').slice(0, 15).join(' ') + "..."}</Typography>
                            <Typography className="text-gray-500 font-light">
                                {hotel.roomTypes.map((roomType, index) => (
                                    <span key={index}>{roomType}{index !== hotel.roomTypes.length - 1 && ', '}</span>
                                ))}
                            </Typography>


                            <Rating name="read-only" value={4} readOnly />
                            <div className="p-2">
                                <DividerLine />
                                <Stack className="hotel-facilities-card" direction={'row'} alignItems={'center'} flexWrap={'wrap'} color={'primary'} >
                                    <span><FaBed color={appColors.primary} /> <Typography variant="body1">Upto {hotel.ratings} Stars</Typography></span>
                                    <span><GiMeal color={appColors.primary} /> <Typography variant="body1">Meal</Typography></span>
                                    <span><IoTelescope color={appColors.primary} /> <Typography variant="body1">Sightseen</Typography></span>
                                    <Button variant="contained">Book Now</Button>
                                </Stack>
                                <DividerLine />
                            </div>
                        </Stack>

                    </Grid>

                </Grid>
            </Card>
        </Link>

    )
}
