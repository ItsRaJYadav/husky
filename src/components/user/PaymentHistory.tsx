import React from 'react'
import { FaCheck, FaWallet } from "react-icons/fa";
import { Box, Card, CardContent, Stack, Typography, useMediaQuery } from '@mui/material'

import { appColors } from '@/constants/colors'

const PaymentHistory = () => {
    const isSmallScreen=useMediaQuery('(max-width:600px)')
    const HistoryItemMD = () => {
        return (
            <Card>
                <CardContent>
                    <Stack direction={'row'} flexWrap={'wrap'}>
                        <Stack direction={'row'} flex={1}>
                            <span style={{backgroundColor:appColors.info, borderRadius:'15px', padding:'20px',height:'fit-content'}}>
                            <FaWallet />    
                            </span>
                            <Stack pl={3}>
                                <Typography variant='body1'>Paid for Booking</Typography>
                                <Typography variant='caption'>Transaction ID: 52545242545</Typography>
                                <Typography variant='caption'>04 June 2022,        3:30pm</Typography>
                            </Stack>
                        </Stack>
                        <Stack alignItems={'center'} flex={1}>
                            <Typography variant='body1'>₹ 5000</Typography>
                        </Stack>
                        <Stack alignItems={'center'} flex={1}>
                            <FaCheck color='green'/>
                            <Typography variant='body2'>Success</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        )
    }
    const HistoryItemSM = () => {
        return (
            <Card>
                <CardContent>
                    <Stack>
                        <Stack direction={'row'} >
                            <span style={{backgroundColor:appColors.info, borderRadius:'15px', padding:'10px',height:'fit-content'}}>
                            <FaWallet />    
                            </span>
                            <Stack pl={1}>
                                <Typography variant='body2'>Paid for Booking</Typography>
                                <Typography variant='caption'>Transaction ID: 52545242545</Typography>
                                <Typography variant='caption'>04 June 2022,        3:30pm</Typography>
                            </Stack>
                        </Stack>
                        <Stack alignItems={'end'} >
                            <Typography variant='body1' color={'green'}>+ ₹ 5000</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        )
    }
    return (
        <Box>
            {
                isSmallScreen ? 
                <Stack spacing={2}>
            {history.map((item,index)=>{
                return(
                    <HistoryItemSM key={index} />
                )
            })}
            </Stack>
                :
                <>
            <Stack direction={'row'} mb={3} sx={{ backgroundColor: appColors.gray, p: 2, px: 5, borderRadius: '15px', textAlign: 'center' }} className="table-header-group">
                <Typography flex={1}>Details</Typography>
                <Typography flex={1}>Amount</Typography>
                <Typography flex={1}>Status</Typography>
            </Stack>
            <Stack spacing={2}>
            {history.map((item,index)=>{
                return(
                    <HistoryItemMD key={index} />
                )
            })}
            </Stack>
            </>}
        </Box>
    )
}
const history=new Array(6).fill(0)

export default PaymentHistory