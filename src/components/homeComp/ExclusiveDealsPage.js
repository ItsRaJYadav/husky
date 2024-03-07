import React from 'react';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import '@/styles/home.css';

export default function ExclusiveDealsPage() {
  const cardData = [
    {
      backgroundImage: '/images/home/banner1.jpg',
      subtitle: 'Find your Summer paradise',
      discount: 'Stay at 35% OFF',
      buttonLabel: 'Book Now',
    },
    {
      backgroundImage: '/images/home/Rectangle2.png',
      subtitle: 'Find your Summer paradise',
      discount: 'Stay at 35% OFF',
      buttonLabel: 'Book Now',
    },
  ];

  const Card = ({ backgroundImage, subtitle, discount, buttonLabel }) => {
    const styles = {
      CardStyle: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '180px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '15px',
        marginBottom: '20px', // Adjust spacing between cards
        '@media (max-width: 550px)': {
          height: '75px',
        },
      },
      ButtonStyle: {
        bgcolor: 'black',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '10px',
        position: 'absolute',
        bottom: 0,
        transition: 'background-color 0.3s ease',
        '&:hover': {
          bgcolor: 'gray',
        },
        '@media (max-width: 550px)': {
          display:"none",
        },
      },
    };

    return (
      <Box className="item" sx={styles.CardStyle}>
        <Box pl={2}>
          <Typography variant="subtitle1" sx={{ fontSize: '15px' }}>
            {subtitle}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '22px', fontWeight: 'bold' }}>
            {discount}
          </Typography>
          <Button sx={styles.ButtonStyle}>{buttonLabel}</Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ paddingY: 5, fontWeight:"bold",
        '@media (max-width: 650px)': {
          fontSize: '1.5rem', 
          textAlign:"center",
        },
        '@media (max-width: 550px)': {
          fontSize: '1.20rem', 
          textAlign:"center",
        },
      }}>
        Exclusive Deals
      </Typography>
      <Box className="deals-container">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Box>
    </Box>
  );
}
