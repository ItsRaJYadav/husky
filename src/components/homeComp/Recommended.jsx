/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Box, Rating, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const HotelCard = ({ hotel }) => {
  return (
    <Link href={`/all-hotels/q=${encodeURIComponent(hotel.id)}&q=${encodeURIComponent(hotel.title)}`}>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '470px' }}>
        <img src={hotel.imageSrc} alt="img" style={{ borderRadius: '25px', width: '100%' }} />
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
          {hotel.title}
        </Typography>
        <Typography variant="subtitle" sx={{ fontSize: '14px' }}>
          {hotel.location}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={hotel.rating} precision={0.5} readOnly />
          </Stack>
          <Typography variant="body2" sx={{ fontSize: '13px' }}>
            ({hotel.reviews} reviews)
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            ₹ {hotel.price}
          </Typography>
          <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
            ${hotel.price * 1.34}
          </Typography>
          <Typography variant="body2" style={{ color: '#F99500' }}>
            (-{hotel.discount}%)
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

const Home8 = () => {
  
  const hotels = [
    {
      id: 1,
      imageSrc: '/images/home/recomen1.jpg',
      title: 'Hotel Tulip Garden',
      location: 'Near IGI Airport, Airocity road, Delhi',
      rating: 4.5,
      reviews: 650,
      price: 540,
      discount: 65,
    },
    {
      id: 2,
      imageSrc: '/images/home/recomen2.jpg',
      title: 'Hotel Tulip Garden',
      location: 'Near IGI Airport, Airocity road, Delhi',
      rating: 4.5,
      reviews: 650,
      price: 540,
      discount: 65,
    },
    {
      id: 3,
      imageSrc: '/images/home/recomen3.jpg',
      title: 'Hotel Tulip Garden',
      location: 'Near IGI Airport, Airocity road, Delhi',
      rating: 4.5,
      reviews: 650,
      price: 540,
      discount: 65,
    },
  ];
  

  return (
    <Box sx={{ display: { xs: 'block', md: 'flex' }, flexDirection: 'column', paddingTop: 12 }}>
       <Typography variant="h4" sx={{
        fontWeight:"bold",
        '@media (max-width: 650px)': {
          fontSize: '1.5rem', 
          textAlign:"center"
        },
      '@media (max-width: 550px)': {
        fontSize: '1.2rem', 
        textAlign:"center"
      },
      
    }}>
      Hotel Recommended by our experts
    </Typography>

      <Box
        sx={{
          paddingTop: 10,
          mb: 5,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3,
          justifyContent: 'center',
        }}
      >
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </Box>
    </Box>
  );
};

export default Home8;
