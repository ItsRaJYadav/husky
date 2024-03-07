import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Image from 'next/image';

const HotelDealsPage = () => {
  const [selectedTab, setSelectedTab] = useState('1');
  const [startIndex, setStartIndex] = useState(0);
  const theme = useTheme(); // Accessing MUI theme

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setStartIndex(0); // Reset the startIndex when a new tab is selected
  };

  const handleNextClick = () => {
    setStartIndex(prevIndex => prevIndex + 5);
  };

  const handlePrevClick = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 5, 0));
  };

  const images = [
    { src: '/images/home/ocean.jpg', textTop: "starting from", textBottom: "Lakshadweep", price: 1400 },
    { src: '/images/home/chennai.jpg', textTop: "starting from", textBottom: "Chennai", price: 1200 },
    { src: '/images/home/coorg.jpg', textTop: "starting from", textBottom: "Coorg", price: 1600 },
    { src: '/images/home/kerla.jpg', textTop: "starting from", textBottom: "Kerala", price: 1800 },
    { src: '/images/home/jaipur.jpg', textTop: "starting from", textBottom: "Jaipur", price: 2000 },
    // Add more images here
  ];

  const visibleImages = images.slice(startIndex, startIndex + 5);

  return (
    <Box>
      <Typography  variant='h4' sx={{paddingTop:12, fontWeight:"bold",
        '@media (max-width: 650px)': {
          fontSize: '1.5rem', 
          textAlign:"center"
        },
      '@media (max-width: 550px)': {
        fontSize: '1.2rem', 
        textAlign:"center"
      },}}>Explore best Hotel Deals</Typography>
      <TabContext value={selectedTab}>
        <Box sx={{ width: '100%', typography: 'body1', paddingY: 10, }}>
          <Box sx={{ bgcolor:"#E5E5E5", overflow: "auto", }}>
            <TabList
              onChange={handleTabChange}
              variant='scrollable'
              sx={{width:'fit-content',
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 1,
                minWidth: 0,
              }}
            >
              <Tab style={{ textTransform: 'capitalize'}}  label="1 Star" value="1" />
              <Tab style={{ textTransform: 'capitalize'}}  label="2 Star" value="2" />
              <Tab style={{ textTransform: 'capitalize'}}  label="3 Star" value="3" />
              <Tab style={{ textTransform: 'capitalize'}}  label="4 Star" value="4" />
              <Tab style={{ textTransform: 'capitalize'}}  label="5 Star" value="5" />
            </TabList>
          </Box>
        </Box>
      </TabContext>

      <Box sx={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", justifyContent: "center",paddingY:0, gap: 6, borderRadius: "5px" }}>
        {visibleImages.map((image, index) => (
          <ImageWithOverlay key={index} src={image.src} textTop={image.textTop} textBottom={image.textBottom} price={image.price} theme={theme} />
        ))}
      </Box>
      {images.length > 5 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <button onClick={handlePrevClick} disabled={startIndex === 0}>Previous</button>
          <button onClick={handleNextClick} disabled={startIndex + 5 >= images.length}>Next</button>
        </Box>
      )}
    </Box>
  );
};

export default HotelDealsPage;

const ImageWithOverlay = ({ src, textTop, textBottom, price, theme }) => {
  const fontSizeTop = theme.breakpoints.values.xs < 650 ? '10px' : '8px';
  const fontSizePrice = theme.breakpoints.values.xs < 650 ? '16px' : '12px';
  const fontSizeBottom = theme.breakpoints.values.xs < 650 ? '10px' : '12px';
  const fontSizeTextBottom = theme.breakpoints.values.xs < 650 ? '18px' : '12px';

  return (
    <Box position="relative" width={{ xs: 140, md: 267.59 }} height={{ xs: 200, md: 330 }} sx={{ borderRadius: "5px", }}>
      <Image src={src} layout="fill" objectFit="cover" alt="Image" style={{ borderRadius: '17px' }} />
      <Box position="absolute" top={0} right={0} p={1} bgcolor="none" color="white" sx={{ textAlign: 'right' }}>
        <p style={{ fontSize: fontSizeTop }}>{textTop}</p>
        <p style={{ fontSize: fontSizePrice }}>{price}</p>
      </Box>
      <Box position="absolute" bottom={0} left={0} p={1} bgcolor="none" color="white">
        <p style={{ fontSize: fontSizeBottom }}>June-apr</p>
        <p style={{ fontWeight: "bold",fontSize:fontSizeTextBottom}}>{textBottom}</p>
      </Box>
    </Box>
  );
};
