/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Box, Button, Card, CardContent, Checkbox, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import { appColors } from '@/constants/colors'

export default function Page() {
    return (
        <div className='h-screen flex items-center justify-center' >
            <Card sx={styles.container} >
                <Box sx={styles.containerHeader}>
                    <Typography>On your <br />First Booking</Typography>
                    <Typography variant='h3'>50% Off</Typography>
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
                        <Typography variant='h4'>Register</Typography>
                        <Typography variant='caption'>For security, please sign in to access your information</Typography>
                        <TextField variant='outlined' inputMode='email' label='Email Id' />
                        <TextField variant='outlined' type='password' label='Password' />
                        <TextField variant='outlined' type='password' label='Confirm Password' />
                        <Typography variant='caption'>To verify your Email, we will send you a text message with a temporary code.</Typography>
                        <Typography color={'red'}>Password not matched</Typography>
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

                        <Button variant='contained'>Register</Button>
                        <Typography color={'black'} className='text-center justify-center'>OR</Typography>
                        <Link href='/auth/login'>
                            <Button variant='outlined' className='w-full'>Login</Button>
                        </Link>

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
