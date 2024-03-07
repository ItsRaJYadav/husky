/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReceiptIcon from '@mui/icons-material/Receipt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Rating,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

export default function Page() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 5 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={7}>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#5E019A',
              textAlign: 'center',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#5E019A1A',
              borderRadius: '5px',
              mb: 10,
              border: '1.5px solid #5E019A', 
            }}
          >
            Yay! you just saved ₹500 on this booking!!
          </Typography>

          <Typography
            variant="h6"
            sx={{
              bgcolor: '#5E019A',
              color: 'white',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '15px',
            }}
          >
            1.
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: '8px', textAlign: 'start' }}
          >
            We will use these details to share your booking information
          </Typography>
          <form
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '14px',
              marginTop: '14px',
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: 'start',
                    paddingY: 5,
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  Full Name*
                </Typography>
                <TextField label="Full Name*" type="name" fullWidth required />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: 'start',
                    paddingY: 5,
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  Email Address*
                </Typography>
                <TextField
                  label="Email Address*"
                  type="email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: 'start',
                    paddingY: 5,
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  Mobile Number*
                </Typography>
                <TextField
                  label="Mobile Number*"
                  type="tel"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: 'start',
                    paddingY: 5,
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  Enter OTP
                </Typography>
                <TextField
                  label="Enter OTP"
                  type="password"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
          </form>

          <Button
            variant="contained"
            color="info"
            sx={{ width: '50%', fontSize: '18px', mt: 7 }}
          >
            Countinue
          </Button>
        </Grid>
        <Grid item xs={12} md={4} sx={{ borderRadius: '25px' }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <img
                  src="/images/booking_details/Luxurious_Hotel.png"
                  alt="img"
                  title="Hotel Name"
                />
                <Box sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: '17px', fontWeight: 'bold' }}
                  >
                    Luxurious Heritage Hotel
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: '9px' }}>
                    South Chennai, Chennai
                  </Typography>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                  >
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <Typography variant="caption">(650 reviews)</Typography>
                  </Box>
                </Box>
              </Box>
              <Typography
                variant="h5"
                sx={{ color: '#5E019A', textAlign: 'start', marginTop: '10px' }}
              >
                ₹2700/
              </Typography>
              <Typography variant="caption" sx={{ textAlign: 'center' }}>
                Per person
              </Typography>
              <Stack spacing={3}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>7 nights</Typography>
                  <Typography>₹2700</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>Wallet Discount</Typography>
                  <Typography>-₹500</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>Cleaning fee</Typography>
                  <Typography>₹62</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>Service fee</Typography>
                  <Typography>₹83</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>Occupancy taxes and fees</Typography>
                  <Typography>₹29</Typography>
                </Stack>
                <hr />
                <Stack direction="row" justifyContent="space-between">
                  <Typography>Total</Typography>
                  <Typography>2220</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Stack
            direction={'row'}
            justifyContent="space-between"
            paddingTop={'15px'}
          >
            <WhatsAppIcon />
            <Typography>Get my booking details on Whatsapp</Typography>
            <CheckCircleIcon sx={{ color: '#1AB64F' }} />
          </Stack>
          <hr style={{ marginTop: 15 }} />
          <Stack
            direction={'row'}
            justifyContent="space-between"
            marginTop={'15px'}
          >
            <ReceiptIcon />
            <Typography>Save GST on this booking</Typography>
            <Typography sx={{ color: '#FF0000' }}>Enter GSTN</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
