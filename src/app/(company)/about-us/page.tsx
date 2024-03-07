/* eslint-disable @next/next/no-img-element */

import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PaymentsIcon from '@mui/icons-material/Payments';
import PlaceIcon from '@mui/icons-material/Place';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Box, Stack, Typography } from '@mui/material';

import { spacing } from '@/constants/spacing';
const Page = () => {
  const styles = {
    bottomstyle: { width: '80%', maxWidth: '140px', paddingTop: '23px' },
    fontsize: { xs: 10, sm: 14, md: 14 },
  };
  const commonStackStyles = {
    alignItems: 'center',
    bgcolor: '#F2F0F2',
    paddingX: { xs: 3, sm: 45 },
    paddingY: 10,
    borderRadius: 5,
    gap: 1.5,
    marginBottom: 5,
  };
  const textFont = {
    fontSize: 20,
    fontWeight: 'bold',
  };

  return (
    <Box>
      {/* top header */}
      <Box sx={{backgroundImage:'url("/images/about-us/about.jpg")', backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'300px', backgroundPosition:'center'}}>
        
      </Box>

      {/* mid-1 */}
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10 }}
        >
          About Us
        </Typography>

        {/* mid-component */}
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          className={spacing.pagePadding}
          gap={13}
          py={12}
        >
          <Stack gap={'15px'} flex={7}>
            <Typography
              variant="subtitle1"
              color={'primary'}
              fontSize={{ xs: 14, sm: 20, md: 20 }}
              fontWeight={'bold'}
            >
              Making your stay perfect, beyond expectations!
            </Typography>
            <Typography variant="body2" fontSize={{ xs: 10, sm: 14, md: 14 }}>
              BidINN is an emerging Indian brand in the hospitality world.
              <br /> We provide a platform for anyone who wishes to list their
              vacant properties with us and rent them to the
              <br /> common public. We solicit a varied range of hotels-leased
              as well as franchised, living arenas and homes.
              <br /> Established in May 2023, BidINN lets you tailor impossible
              bidding opportunities for hotel stays, provide a<br /> direct
              settlement where in you can manage hourly booking ranging from 2-8
              hours, negotiate the price
              <br /> with hotel partners, and avail numerous benefits. You can
              list banquet venues, budget hotels, resorts as
              <br />
              well as service apartments, and properties nearby every railway
              station of India in no time.
              <br /> Our self-tool helps you manage easy check-ins & check-outs
              for a rapid onboarding process.
              <br /> Partner with us and feel the difference.
            </Typography>
            <Stack gap={5}>
              <Stack direction={'row'}>
                <Stack flex={1} direction={'row'} gap={1.5}>
                  <CurrencyRupeeIcon color="primary" />
                  <Typography variant="body1" fontSize={styles.fontsize}>
                    Prices can be negotiated 
                  </Typography>
                </Stack>
                <Stack flex={1} direction={'row'} gap={1.5}>
                  <DataUsageIcon color="primary" />
                  <Typography variant="body1" fontSize={styles.fontsize}>
                    Book with only 20% payment
                  </Typography>
                </Stack>
              </Stack>

              <hr />

              <Stack direction={'row'}>
                <Stack flex={1} direction={'row'} gap={1.5}>
                  <SupportAgentIcon color="primary" />
                  <Typography variant="body1" fontSize={styles.fontsize}>
                    Multilingual support
                  </Typography>
                </Stack>
                <Stack flex={1} direction={'row'} gap={1.5}>
                  <PaymentsIcon color="primary" />
                  <Typography variant="body1" fontSize={styles.fontsize}>
                    Pay at the property
                  </Typography>
                </Stack>
              </Stack>

              <hr />

              <Stack direction={'row'}>
                <Stack flex={1} direction={'row'} gap={1.5}>
                  <TaskAltIcon color="primary" />
                  <Typography variant="body1" fontSize={styles.fontsize}>
                    Pay as per your duration of stay
                  </Typography>
                </Stack>
                <Stack flex={1} direction={'row'} gap={1.5}>
                  <DirectionsTransitIcon color="primary" />
                  <Typography variant="body1" fontSize={styles.fontsize}>
                    Available at every railway station all over India
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Box>
            <img
              src="/images/about-us/sidelayout.jpg"
              alt="side-img"
              style={{ maxWidth: '100%' }}
            />
          </Box>
        </Stack>
      </Box>

      {/* mid-2 */}
      <Stack className={spacing.pagePadding}>
        <Typography
          variant="subtitle2"
          color={'primary'}
          fontSize={{ xs: 20, sm: 27, md: 35 }}
          fontWeight={'bold'}
          textAlign={'center'}
        >
          Better than Property Management
        </Typography>
        <Typography
          variant="caption"
          textAlign={'center'}
          fontSize={{ xs: 10, sm: 14, md: 18 }}
          mt={2}
        >
          We work with 100+ companies to meet accommodation needs in India.
          Offer a dedicated
          <br /> booking manager that can help to find properties for your
          needs.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent={'center'}
          gap={7}
          paddingTop={5}
          flexWrap={'wrap'}
        >
          <Stack {...commonStackStyles}>
            <PlaceIcon style={{ fontSize: 65 }} />
            <Typography {...textFont}>140+</Typography>
            <Typography>Destination</Typography>
          </Stack>

          <Stack {...commonStackStyles}>
            <LocalOfferIcon style={{ fontSize: 65 }} />
            <Typography {...textFont}>500+</Typography>
            <Typography>Hotel listed</Typography>
          </Stack>

          <Stack {...commonStackStyles}>
            <ApartmentIcon style={{ fontSize: 65 }} />
            <Typography {...textFont}>25K+</Typography>
            <Typography>Happy Customer</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack padding={{ xs: 2, sm: 12 }} gap={5}>
        <Typography
          variant="subtitle1"
          color={'primary'}
          fontSize={{ xs: 25, sm: 35 }}
          fontWeight={'bold'}
          textAlign={'center'}
        >
          Our partners
        </Typography>
        <Typography
          variant="caption"
          fontSize={{ xs: 14, sm: 18 }}
          textAlign={'center'}
        >
          See what our partners say about us
        </Typography>
        <Stack
          alignItems={'center'}
          gap={5}
          bgcolor={'#E3C0F9'}
          borderRadius={15}
          padding={{ xs: 3, sm: 12 }}
        >
          <img
            src="/images/about-us/A4.png"
            alt="logo"
            style={styles.bottomstyle}
          />
          <Typography
            textAlign={'center'}
            variant="caption"
            fontSize={{ xs: 13, sm: 18 }}
            fontWeight={'bold'}
            paddingBottom={7}
          >
            Nascetur urna, fusce consectetur massa nulla viverra aenean semper.
            Dignissim nibh sed
            <br /> condimentum eget ac suspendisse eget amet integer. Mattis
            etiam sagittis fermentum fames
            <br /> habitasse. Vulputate volutpat sit est, elementum. Accumsan
            nunc nunc arcu faucibus
            <br />
            aliquam.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Page;
