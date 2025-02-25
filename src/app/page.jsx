'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import HomePageSlider from '@/components/HomePageSlider/HomePageSlider';
import About from '@/components/MainPageBlocks/About/About';
import HeroSection from '@/components/MainPageBlocks/HeroSection/HeroSection';
import Production from '@/components/MainPageBlocks/Production/Production';
import WeProduce from '@/components/MainPageBlocks/WeProduce/WeProduce';
import Advantages from '@/components/MainPageBlocks/Advantages/Advantages';
import News from '@/components/MainPageBlocks/News/News';
import Contacts from '@/components/MainPageBlocks/Contacts/Contacts';
import OurBuyers from '@/components/MainPageBlocks/OurBuyers/OurBuyers';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import ScrollableSlider from '@/components/ScrollableSlider/ScrollableSlider';
import Logo from '@/components/SvgIcons/Logo';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import TextLogo from '@/components/SvgIcons/TextLogo';
import { SectionWrapper } from './mainPageStyles';

import Bmw from '@/components/SvgIcons/Cars/bmw';

export default function Home() {
  return (
    <main>
      {/* <Box
        sx={{
          height: '500px'
        }}
      >
        <MapLoader />
      </Box> */}

      <Box sx={{ mb: 3 }}>
        <HomePageSlider />
      </Box>

      {/* <Box sx={{ mb: 5 }}>
        <HeroSection />
      </Box> */}

      <SectionWrapper>
        <Box sx={{ mb: 8 }}>
          <About />

          <Box sx={{ mb: 5, mt: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
                gap: 1
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 2 }}>
                <Logo color="#000" />
                <TextLogo width="140" />
              </Box>

              <Typography variant="h4" fontWeight={700} textAlign="center">
                Соответствует требованиям автопроизводителей
              </Typography>
            </Box>
          </Box>

          <ScrollableSlider />
        </Box>

        <Box sx={{ mb: 8, position: 'relative' }}>
          <Advantages />
          {/* <Box
            sx={{
              position: 'absolute',
              left: '-32px',
              bottom: '-100%',
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url('https://gazpromneft-oil.ru/static/default/img/bg-m.jpg')`
            }}
          ></Box> */}
        </Box>

        {/* <Box sx={{ mb: 8 }}>
          <Production />
        </Box> */}

        <Box sx={{ mb: 8 }}>
          <WeProduce />
        </Box>

        <Box sx={{ mb: 8 }}>
          <OurBuyers />
        </Box>

        <Box sx={{ mb: 8 }}>
          <News />
        </Box>

        <Box sx={{ mb: 8 }}>
          <Contacts />
        </Box>

        <FeedbackBlock />
      </SectionWrapper>
    </main>
  );
}
