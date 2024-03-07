import React, { useState } from 'react';
import { Box, Tab,Tabs, Typography } from '@mui/material';
import Image from 'next/image';

const BudgetDealpage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    setStartIndex(0); // Reset startIndex when changing tabs
  };

  const handleNextClick = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 3, images.length - 3));
  };

  const handlePrevClick = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 3, 0));
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const images = [
    { src: '/images/home/leah.jpg', textTop: "starting from", textBottom: "Leh", price: 999 },
    { src: '/images/home/darjeeling.jpg', textTop: "starting from", textBottom: "Darjeeling", price: 5000 },
    { src: '/images/home/auli.jpg', textTop: "starting from", textBottom: "Auli", price: 1800 },
  ];

  const displayImages = images.slice(startIndex, startIndex + 3);

  return (
    <Box sx={{paddingY:12}}>
      <Typography variant='h4' sx={{paddingBottom:10, fontWeight:"bold",
        '@media (max-width: 650px)': {
          fontSize: '1.5rem', 
          textAlign:"center"
        },
      '@media (max-width: 550px)': {
        fontSize: '1.2rem', 
        textAlign:"center"
      },}}>Best priced Hotel within Budget</Typography>
      <Box sx={{bgcolor:"#E5E5E5",marginBottom:5 }}>
        <Tabs variant='scrollable' value={tabValue} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{ textTransform: 'capitalize'}} label={<span>Less than<br/> ₹ 10000</span>} {...a11yProps(0)}/>
          <Tab style={{ textTransform: 'capitalize'}}  label={<span>Less than<br/> ₹ 20000</span>} {...a11yProps(1)} />
          <Tab style={{ textTransform: 'capitalize'}}  label={<span>Less than<br/> ₹ 30000</span>} {...a11yProps(2)} />
          <Tab style={{ textTransform: 'capitalize'}}  label={<span>Less than<br/> ₹ 40000</span>} {...a11yProps(3)} />
          <Tab style={{ textTransform: 'capitalize'}}  label={<span>Less than<br/> ₹ 50000</span>} {...a11yProps(4)} />
        </Tabs>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' ,gap:3.2}}>
        {displayImages.map((image, index) => (
          <ImageWithOverlay key={index} src={image.src} textTop={image.textTop} textBottom={image.textBottom} price={image.price} />
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <button onClick={handlePrevClick} disabled={startIndex === 0}></button>
        <button onClick={handleNextClick} disabled={startIndex >= images.length - 3}></button>
      </Box>
    </Box>
  )
}

export default BudgetDealpage;

const ImageWithOverlay = ({ src, textTop, textBottom, price }) => {
  return (
    <Box position="relative" width={{ xs: 140, md: 455 }} height={{ xs: 200, md: 330 }} sx={{ borderRadius: "5px", m: 2 }}>
      <Image src={src} layout="fill" objectFit="cover" alt="Image" style={{ borderRadius: '17px' }} />
      <Box position="absolute" top={0} right={0} p={1} bgcolor="none" color="white" sx={{ textAlign: 'right' }}>
        <Typography variant="body2">{textTop}</Typography>
        <Typography variant="body1">₹{price}</Typography>
      </Box>
      <Box position="absolute" bottom={0} left={0} p={1} bgcolor="none" color="white">
        <Typography variant="body2">June-apr</Typography>
        <Typography variant="h6" fontWeight="bold">{textBottom}</Typography>
      </Box>
    </Box>
  );
}
