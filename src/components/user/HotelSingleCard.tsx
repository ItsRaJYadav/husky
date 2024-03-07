/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaBed } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { IoTelescope } from 'react-icons/io5';
import { Button, Card, Grid, Rating, Stack, Typography } from '@mui/material';

import { appColors } from '@/constants/colors';

import { DividerLine } from '../general/DividerLine';

export const HotelSingleCard = () => {
  return (
    <Card className="p-4 m-1">
      <Grid container>
        <Grid item sm={12} xs={12} md={3} lg={3}>
          <img
            style={{ textAlign: 'center', maxHeight: '280px', width: '100%' }}
            src="/images/hotels/hotel_list_img.png"
            alt="hotel img"
          />
        </Grid>
        <Grid item sm={12} xs={12} md={9} lg={9}>
          <Stack direction={'column'} className="pl-4" flexWrap={'wrap'}>
            <Typography variant="h6">Hotel 1</Typography>
            <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'}>
              <Typography variant="h4" color={'primary'} className="pr-3">
                $ 2,000/{' '}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ textDecoration: 'line-through' }}
              >
                {' '}
                $ 2,000/
              </Typography>
            </Stack>
            <Typography>Per person on twin sharing</Typography>
            <Typography className="text-gray-500 font-light">
              Delux Room
            </Typography>
            <Rating name="read-only" value={4} readOnly />
            <div className="p-2">
              <DividerLine />
              <Stack
                className="hotel-facilities-card"
                direction={'row'}
                alignItems={'center'}
                flexWrap={'wrap'}
                color={'primary'}
              >
                <span>
                  <FaBed color={appColors.primary} />{' '}
                  <Typography variant="body1">Upto 5 Stars</Typography>
                </span>
                <span>
                  <GiMeal color={appColors.primary} />{' '}
                  <Typography variant="body1">Meal</Typography>
                </span>
                <span>
                  <IoTelescope color={appColors.primary} />{' '}
                  <Typography variant="body1">Sightseen</Typography>
                </span>
                <Button variant="contained">Book Now</Button>
              </Stack>
              <DividerLine />
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
