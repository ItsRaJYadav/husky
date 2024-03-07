/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import { Box, Grid, Tab } from '@mui/material';

import PaymentHistory from '@/components/user/PaymentHistory';
import SingleBookingCard from '@/components/user/SingleBookingCard';
import UserProfileFrame from '@/components/user/UserProfileFrame';

export default function Page() {
    const [activeTab, setActiveTab] = useState("1")
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setActiveTab(newValue);
      };
    return (
        <div>
            <UserProfileFrame>
                <TabContext value={activeTab}>
                    <Box sx={{borderBottom:1, borderColor:'divider'}}>
                    <TabList  onChange={handleTabChange} aria-label='tabs'>
                        <Tab  sx={{textTransform:'capitalize',}} label="Bookings" value={'1'}/>
                        <Tab sx={{textTransform:'capitalize'}} label="Payment History" value={'2'}/>
                    </TabList>
                    </Box>
                    <TabPanel value='1'>
                    <Grid container spacing={2}>
                    {
                        bookings.map((item,index)=>{
                            return(
                                <Grid key={index} item xs={12} sm={12} md={6} lg={6}>
                                    <SingleBookingCard  />
                                </Grid>
                            )
                        })
                    }  
                        </Grid> 
                    </TabPanel>
                    <TabPanel value='2'>
                        <PaymentHistory/>
                    </TabPanel>
                </TabContext>
            </UserProfileFrame>
        </div>
    )
}
const bookings=new Array(5).fill(0)
