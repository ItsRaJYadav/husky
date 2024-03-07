import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Stack, Typography } from '@mui/material';


const HotelReviewsLocations = () => {
  const commonStackStyles = {
    alignItems: 'center',
    bgcolor: '#F2F0F2',
    paddingX: { xs: 3, sm: 45 },
    paddingY: 10,
    borderRadius: 5,
    gap: 1.5,
    marginBottom: 5,
  };
  const textFont = {
    fontSize: 20,
    fontWeight: 'bold',
  };
  return (
    <Box>
      <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent={'center'}
          gap={7}
          paddingTop={5}
          flexWrap={'wrap'}
        >
          <Stack {...commonStackStyles}>
            <PlaceIcon style={{ fontSize: 65 }} />
            <Typography {...textFont}>140+</Typography>
            <Typography>Locatons</Typography>
          </Stack>

          <Stack {...commonStackStyles}>
            <LocalOfferIcon style={{ fontSize: 65 }} />
            <Typography {...textFont}>2000+</Typography>
            <Typography>Hotel listed</Typography>
          </Stack>

          <Stack {...commonStackStyles}>
            <ApartmentIcon style={{ fontSize: 65 }} />
            <Typography {...textFont}>1.5K+</Typography>
            <Typography>Happy Customer</Typography>
          </Stack>
        </Stack>
    </Box>
  );
}

export default HotelReviewsLocations;
