/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function AppDownloadPage() {
  const styles = {
    bgstyle: {
      padding: 5,
      width: '100%',
      backgroundImage: 'url("/images/download/Download.png")',
      backgroundSize: 'cover',
      borderRadius: '15px',
    },
  };

  return (
    <Box sx={{ paddingTop: 12,paddingBottom:7 }}>
      <Box style={styles.bgstyle}>
        <Grid
          container
          spacing={0}
          justifyContent={'center'}
          alignItems={'center'}
          paddingX={{ xs: 2, md: 5 }} // Adjust padding for different screen sizes
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6} // Take full width on small screens and half width on medium and larger screens
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <Typography variant="h2" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
              Download now!
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>
              Download our app now and change the way you travel. Available for
              <br /> Android and iPhone.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <a href="https://play.google.com/store">
                <img
                  src="/images/download/PlaystoteBtn.png"
                  alt="Google Play Store"
                  style={{ maxHeight: '69px' }}
                />
              </a>
              <a href="https://www.apple.com/app-store/">
                <img src="/images/download/app_store.png" alt="Apple App Store" />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ display: {xs:"none",sm:'none',md:"flex"},}}>
            <img
              src="/images/download/mobile.png"
              alt="img"
              style={{bottom: 0}} // Ensure image is responsive
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
