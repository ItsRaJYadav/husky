/* eslint-disable @next/next/no-img-element */
"use client"
import { BiSolidEditAlt } from "react-icons/bi";
import { Box, Button, Card, CardContent, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image';

import { appColors } from "@/constants/colors";
import { spacing } from '@/constants/spacing';




export default function UserProfileFrame({
    children,
}: {
    children: React.ReactNode;
}) {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (

        <div className={spacing.pagePadding}>
            <Grid container spacing={2}>
                <Grid item sm={12} xs={12} md={8} lg={8}>
                    <div className="about-header">
                        <Box >
                            <div className='user-about-bg-img' />
                            <Stack p={3} direction={isSmallScreen ? 'column' : 'row'} sx={{ position: 'relative', top: '-80px', }} >
                                <Image
                                    src='/images/user/profile.png'
                                    width={isSmallScreen ? 150 : 200}
                                    height={isSmallScreen ? 150 : 200}
                                    style={{ borderRadius: '100px', margin: isSmallScreen ? 'auto' : 0 }}
                                    alt='profile' />
                                <Stack width={'100%'} direction={'row'} alignItems={'end'} justifyContent={'space-between'} flexWrap={'wrap'}>
                                    <Box>
                                        <Typography fontWeight={'bold'}>Sonal Kapoor</Typography>
                                        <Typography fontWeight={'bold'}>9876543210</Typography>
                                        <Typography>rmaurya274@gmail.com</Typography>
                                    </Box>
                                    <Button startIcon={<BiSolidEditAlt />} variant='outlined'>Edit Profile</Button>

                                </Stack>
                            </Stack>
                        </Box>
                    </div>
                    <div className="user-profile-main">
                        {children}
                    </div>
                </Grid>
                <Grid item sm={12} xs={12} md={4} lg={4}>
                    <Stack spacing={4}>
                        <Card>
                            <CardContent>
                                <Stack direction={'row'} justifyContent={'space-between'} pb={3}>
                                    <Stack >
                                        <Typography variant="caption">Get your 1 year subscription</Typography>
                                        <Typography variant="h6" color="primary">Free Subscription for 2 year</Typography>
                                    </Stack>
                                    <Stack >
                                        <Image
                                            src={'/images/hotels/image-1.png'}
                                            width={120}
                                            height={120}
                                            alt="subscription card image"
                                        />
                                    </Stack>
                                </Stack>
                                <Card sx={{ p: 2 }}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Stack direction={'row'} alignItems={'center'}>
                                            <Typography variant="h5" sx={{ backgroundColor: appColors.info, borderRadius: 4, p: 2, px: 4 }}>₹</Typography>
                                            <Typography variant="h6">11,999/-</Typography>
                                        </Stack>
                                        <Button variant="contained" color="info">Subscribe Now</Button>
                                    </Stack>
                                </Card>
                            </CardContent>
                        </Card>
                        <Stack spacing={5}>
                            <Typography variant="h5">Exclusive deals</Typography>
                            <Stack>
                                <img
                                    src="/images/home/banner1.jpg"
                                    style={{ width: '100%', borderRadius: spacing.borderRadius }}
                                    alt="banner"
                                />
                            </Stack>
                            <Stack>
                                <img
                                    src="/images/home/banner2.jpg"
                                    style={{ width: '100%', borderRadius: spacing.borderRadius }}
                                    alt="banner"
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </div>

    );
}
