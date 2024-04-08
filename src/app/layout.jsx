'use client';

import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import Sidenav from '@/components/Sidenav/Sidenav';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Loader from '@/components/Loader/Loader';
import { MaterialUIControllerProvider } from '@/context';
import '@/app/styles/global.css';

const MainContent = styled(Box)(({ theme }) => ({
  marginLeft: '88px',
  padding: '16px',
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,

  [theme.breakpoints.down('md')]: {
    marginLeft: '0px'
  },

  [theme.breakpoints.down('sm')]: {
    padding: '8px'
  }
}));

const inter = Inter({ subsets: ['latin'] });

// const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app'
// };

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const onToggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="ru">
      <body className={inter.className}>
        {/* <Loader /> */}
        <MaterialUIControllerProvider>
          <ThemeRegistry options={{ key: 'mui' }}>
            <Box sx={{ height: '100%' }}>
              <Sidenav onToggle={onToggleSidenav} isOpen={isOpen} />

              <MainContent>
                <Header onToggleSidenav={onToggleSidenav} />

                <Box sx={{ flex: '1 0 auto', mb: 4, mt: 1 }}>{children}</Box>

                <Footer />
              </MainContent>
            </Box>
          </ThemeRegistry>
        </MaterialUIControllerProvider>
      </body>
    </html>
  );
}
