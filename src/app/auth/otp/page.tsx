/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { Box, Button, Card, CardContent, Checkbox, Stack, Typography } from '@mui/material'
import Image from 'next/image'

import { appColors } from '@/constants/colors'


export default function Page() {
    const [otp, setOtp] = useState('');

    return (
        <div className='h-screen flex items-center justify-center' >
            <Card sx={styles.container} >
                <Box sx={styles.containerHeader}>
                    <Typography>On your <br />First Booking</Typography>
                    <Typography variant='h3'>upto 50% Off</Typography>
                    <div style={{ position: 'absolute', top: 0, right: 5 }}>
                        <Image
                            src="/images/auth/happy_man_walks.png"
                            width={100}
                            height={100}
                            alt='happy man walks'
                        />
                    </div>
                </Box>
                <CardContent>
                    <Stack spacing={2}>
                        <Typography variant='h4'>OTP</Typography>
                        <Typography variant='caption'>We have sent an otp to your email</Typography>
                        <OtpInput
                            value={otp}
                            inputStyle={{ border: '2px solid gray', width: '35px', borderRadius: '5px', padding: '5px', margin: '5px', }}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props} />}
                        />
                        <Typography color={'red'}>Wrong OTP</Typography>
                        <Typography variant='caption'>Resent OTP in 30s</Typography>
                        <Typography variant='caption'>Login using passowrd</Typography>
                    </Stack>
                    <Stack alignItems={'center'} direction={'row'}>
                        <Checkbox />
                        <Typography variant='caption'>By signing in, I agree to Bidinn's
                            <span style={styles.links}> Terms of Use </span>
                            and
                            <span style={styles.links}> Privacy Policy</span>
                            .</Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Button variant='contained'>Login</Button>
                        <Typography color={'black'} className='text-center justify-center'>OR</Typography>
                        <Button variant='outlined'>Create Account</Button>
                    </Stack>
                </CardContent>

            </Card>
        </div>
    )
}
const styles = {
    container: { maxWidth: '420px', },
    containerHeader: { pt: 4, pl: 4, backgroundColor: appColors.primary, position: 'relative', color: 'white' },
    links: { color: appColors.primary, fontWeight: 'bold' }
}
