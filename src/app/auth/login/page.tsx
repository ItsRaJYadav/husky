/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, CardContent, Checkbox, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { appColors } from '@/constants/colors';
import { loginAsync, selectLoading } from '@/redux/features/authSlice';

interface FormData {
    email: string;
    password: string;
}

const Page: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<any>();
    const loading = useSelector(selectLoading);
    const navigate = useRouter();
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if (formData.email === '' && formData.password === '') {
            toast.error('Please enter the email and password');
            return;
        }
        if (formData.email === '') {
            toast.error('Please enter the email');
            return;
        }
        if (formData.password === '') {
            toast.error('Please enter the password');
            return;
        }

        dispatch(loginAsync(formData))
            .then((action: unknown) => {
                if (loginAsync.fulfilled.match(action)) {
                    navigate.push('/');
                }
            })
            .catch((error: unknown) => {
                console.error('Error:', error);
                toast.error('An unexpected error occurred');
            });
    };




    return (
        <div className='h-screen flex items-center justify-center'>
            <Card sx={styles.container}>
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
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <Typography variant='h4'>Login</Typography>
                            <Typography variant='caption'>For security, please sign in to access your information</Typography>
                            <TextField
                                variant='outlined'
                                inputMode='email'
                                label='Email Id'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <TextField
                                variant='outlined'
                                type='password'
                                label='Password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <Link href='/auth/forget-password'>
                                <Typography color={'red'}>Forget password?</Typography>
                            </Link>
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
                            <Button disabled={loading} type='submit' variant='contained'> {loading ? "Logging in..." : "Login"}</Button>
                            <Typography color={'black'} className='text-center justify-center'>OR</Typography>
                            <Link href='/auth/register'>
                                <Button variant='outlined' className='w-full'>Create Account</Button>
                            </Link>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

const styles = {
    container: { maxWidth: '420px', },
    containerHeader: { pt: 4, pl: 4, backgroundColor: appColors.primary, position: 'relative', color: 'white' },
    links: { color: appColors.primary, fontWeight: 'bold' }
};

export default Page;
