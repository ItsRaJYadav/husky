import React from 'react'
import { Box, Card, CardContent, Rating, Stack,  Typography } from '@mui/material';
import Image from 'next/image';

import { DividerLine } from '@/components/general/DividerLine';


const SingleBookingCard = () => {
    return (
        <Card>
            <CardContent>
                <Stack direction={'row'} flexWrap={'wrap'}>
                    <Image
                        src='/images/hotels/image0.png'
                        width={100}
                        height={80}
                        style={{ borderRadius: '15px' }}
                        alt='hotel' />
                    <Stack pl={2}>
                        <Typography variant='h5'>Luxurious Heritage Hotel</Typography>
                        <Typography variant='caption'>Dubai</Typography>
                        <Rating precision={0.5} value={4.5} readOnly />
                    </Stack>

                </Stack>
                <Card sx={{ mt: 3 }}>
                    <CardContent>
                        <Stack>
                            <Stack direction={'row'}>
                                <Box flex={1}>
                                    <Typography variant='body1' fontWeight={'bold'}>Check-in</Typography>
                                    <Typography variant='caption'>2/19/2022</Typography>

                                </Box>
                                <Box flex={1}>
                                    <Typography variant='body1' fontWeight={'bold'}>Check-out</Typography>
                                    <Typography variant='caption'>2/26/2022</Typography>

                                </Box>
                            </Stack>
                            <DividerLine />
                            <Stack>
                                <Typography variant='body1' fontWeight={'bold'}>Guests</Typography>
                                <Typography variant='caption'>2 guests</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}

export default SingleBookingCard