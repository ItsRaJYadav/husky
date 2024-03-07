/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import MarkunreadIcon from '@mui/icons-material/Markunread';

import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

import { DividerLine } from '@/components/general/DividerLine';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  
    // Check if any of the required fields are empty
    if (!formData.name || !formData.email || !formData.mobileNumber) {
      toast.error('Please fill in all the required fields');
      return;
    }
  
    // Here you can perform any actions with your form data, such as sending it to a server
    console.log('Form submitted:', formData);
    // You can also reset the form fields after submission if needed
    setFormData({
      name: '',
      email: '',
      mobileNumber: '',
      message: '',
    });
    // Show success toast
    toast.success('Form submitted successfully');
  };
  

  return (
    <Box>
      {/* Add this line to render the toast container */}
      <Stack
        sx={{
          backgroundImage: 'url("/images/about-us/about.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '55vh',
          padding: 14,
          color: 'white',
        }}
      >
      </Stack>
      <Stack alignItems={"center"} mt={'25px'}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          Feel free to reach out to us using the contact information below
        </Typography>
      </Stack>
      <Stack padding={15} direction={'row'} gap={20} sx={{
    flexWrap: {
      xs: 'wrap',
      sm: 'nowrap',
    },
    flexDirection: {
      xs: 'column',
      sm: 'row',
    },
  }}>
        <Stack flex={6}>

          <Typography variant="h3" color={"primary"} fontSize={{sm:40,xs:35,md:45}}>Get In Touch</Typography>
          <Stack direction={'row'} gap={'25px'} mt={6} mb={5} alignItems={'center'} flexWrap={'wrap'}>
            <WifiCalling3Icon color='primary' />
            <Typography variant='body1' fontSize={{sm:15,xs:12,md:15}}>+919899344406</Typography>
            <Typography variant='body1' fontSize={{sm:15,xs:12,md:15}}>+919899344468</Typography>

          </Stack>
          <DividerLine />
          <Stack direction={'row'} gap={'25px'} mt={6} mb={5}>
            <MarkunreadIcon color='primary' />
            <Typography variant='body1' fontSize={{sm:15,xs:13,md:15}}> Info@bidinn.in</Typography>
          </Stack>
          <DividerLine />
          <Stack direction={'row'} gap={'25px'} mt={6}>
            <PlaceIcon color='primary' />
            <Typography variant='body1' fontSize={{sm:15,xs:13,md:15}}> C-58 ground floor sector 65 noida 201301</Typography>
          </Stack>
        </Stack>
        <Stack flex={4}>
          <Card sx={{ Width: '300px' }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  label="Full Name"
                  fullWidth
                  margin="normal"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  margin="normal"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  name="mobileNumber"
                  label="Mobile Number"
                  fullWidth
                  margin="normal"
                  required
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
                <TextField
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Page;
