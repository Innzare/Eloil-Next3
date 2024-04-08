'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const FEATURES = [
  {
    icon: BoltIcon,
    title: 'Lorem ipsum dolar',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    icon: CheckCircleOutlineIcon,
    title: 'Lorem ipsum dolar',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    icon: AccessTimeIcon,
    title: 'Lorem ipsum dolar',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    icon: SettingsIcon,
    title: 'Lorem ipsum dolar',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    icon: PeopleIcon,
    title: 'Lorem ipsum dolar',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    icon: EngineeringIcon,
    title: 'Lorem ipsum dolar',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  }
];

export default function Advantages() {
  return (
    <Box
      sx={{
        // background: '#0575E6',
        // background: '-webkit-linear-gradient(to right, #021B79, #0575E6)',
        // background: 'linear-gradient(to right, #021B79, #0575E6)',
        background: '#000428',
        background: '-webkit-linear-gradient(to right, #004e92, #000428)',
        background: 'linear-gradient(to right, #004e92, #000428)',
        mx: -4,
        px: 4,
        py: 6
      }}
    >
      <SectionTitle isLight text="Наши преимущества" />

      <Grid container spacing={4} alignItems="center">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;

          return (
            <Grid item xs={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 3
                }}
              >
                <Icon fontSize="large" color="error" sx={{ mb: 2 }} />
                <Typography variant="h6" color="#fff" fontWeight="700" sx={{ mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body" color="#aaa" fontWeight="500" align="center">
                  {feature.text}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
