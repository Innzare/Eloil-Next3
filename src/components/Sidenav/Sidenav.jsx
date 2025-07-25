'use client';

import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { Divider, Box } from '@mui/material';
import Logo from '@/components/SvgIcons/Logo';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SidenavList from './SidenavList';
import TextLogo from '@/components/SvgIcons/TextLogo';
import ThemeModeSwitch from '@/components/ThemeModeSwitch/ThemeModeSwitch';
import { IconButton, SidenavWrapper, Backdrop, OnlyTextLogoWrapper, SidenavTop } from './styles';

export default function Sidenav(props) {
  const { onToggle, isOpen } = props;

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Backdrop open={isOpen} onClick={onToggle} />

      <SidenavWrapper isOpen={isOpen}>
        <SidenavTop>
          <Link href="/" onClick={onToggle}>
            <Box sx={{ textAlign: 'center' }}>
              <Logo color={theme.palette.common.mode} />
            </Box>

            <OnlyTextLogoWrapper isOpen={isOpen}>
              <TextLogo width="140" height="40" />
            </OnlyTextLogoWrapper>
          </Link>

          <Divider
            sx={{
              my: 2,
              width: '100%'
            }}
          />

          {/* <IconButton size="small" variant="outlined" onClick={onToggle}>
            {isOpen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
          </IconButton> */}

          <SidenavList isOpen={isOpen} onClick={onToggle} />
        </SidenavTop>

        {/* <ThemeModeSwitch /> */}
      </SidenavWrapper>
    </>
  );
}
