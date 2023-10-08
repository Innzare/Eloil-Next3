'use client';

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import './Loader.css';

export default function Loader({ customClass }) {
  const [activeClass, setActiveClass] = useState('');

  useEffect(() => {
    setActiveClass('active');
  }, []);

  return (
    <Box
      className={customClass}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000,
        backgroundColor: '#fff',
        opacity: 1,
        transition: 'opacity 0.5s ease-out',

        '&.fade-out': {
          opacity: 0
        }
      }}
    >
      <Box sx={{ mt: -7 }}>
        <svg
          className={`loader ${activeClass}`}
          width="415"
          height="201"
          viewBox="0 0 215 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M84.4834 40.7802L81.1084 53.4364H86.7334L100.233 40.7802H111.483L91.9717 59.0614L103.187 80.1552H91.9365L80.7217 59.0614H79.5967L73.9365 80.1552H64.9365L75.4834 40.7802H84.4834Z"
            fill="black"
            className="svg-elem-1"
          ></path>
          <path
            d="M112.46 52.0302C114.476 44.5302 118.858 40.7802 125.608 40.7802H145.858C151.062 40.7802 153.663 43.0067 153.663 47.4598C153.663 48.7723 153.429 50.2958 152.96 52.0302L148.46 68.9052C146.444 76.4052 142.062 80.1552 135.312 80.1552H115.062C109.858 80.1552 107.257 77.9286 107.257 73.4755C107.257 72.163 107.491 70.6395 107.96 68.9052L112.46 52.0302ZM117.312 67.5341C117.171 68.0966 117.101 68.6005 117.101 69.0458C117.101 70.827 118.296 71.7294 120.687 71.7528L134.187 71.7177C137.187 71.7177 139.062 70.3114 139.812 67.4989L143.608 53.4364C143.749 52.8739 143.819 52.37 143.819 51.9247C143.819 50.12 142.624 49.2177 140.233 49.2177L126.733 49.1825C123.733 49.2059 121.858 50.6122 121.108 53.4012L117.312 67.5341ZM163.015 40.7802H172.015L161.468 80.1552H152.468L163.015 40.7802ZM188.046 40.7802L179.749 71.7177H202.249L199.999 80.1552H175.249C171.874 80.1552 170.187 78.5731 170.187 75.4091C170.187 74.3544 170.374 73.1239 170.749 71.7177L179.046 40.7802H188.046Z"
            fill="black"
            className="svg-elem-2"
          ></path>
          <path
            d="M29.7251 36.2663L20.846 67.9329H60.5059L56.9365 79.6552C45.887 79.6552 22.5134 79.5996 14.9366 79.1552C7.35975 78.7107 6.44222 73.1181 7.23147 70.1552C9.59922 61.2663 14.9267 41.7107 17.2944 34.5996C19.6622 27.4885 26.1735 25.3403 29.1332 25.1552H72.9365L69.3849 36.2663H29.7251Z"
            fill="black"
            stroke="black"
            className="svg-elem-3"
          ></path>
          <path
            d="M31.206 57.3774L34.1657 47.3774H60.2109L57.4366 57.3774H31.206Z"
            fill="black"
            stroke="black"
            className="svg-elem-4"
          ></path>
          <path
            d="M92.8008 25.4989L91.1875 31.5145H95.5625L95.125 33.1552H90.3125C89.6562 33.1552 89.3281 32.8475 89.3281 32.2323C89.3281 32.0272 89.3646 31.788 89.4375 31.5145L91.0508 25.4989H92.8008ZM106.768 25.4989H108.518L107.055 30.9677C106.663 32.426 105.811 33.1552 104.498 33.1552H100.561C99.5492 33.1552 99.0434 32.7222 99.0434 31.8563C99.0434 31.6011 99.0889 31.3049 99.1801 30.9677L100.643 25.4989L102.393 25.5057L100.998 30.701C100.971 30.8104 100.957 30.9084 100.957 30.995C100.957 31.3413 101.19 31.5168 101.655 31.5214L104.28 31.5145C104.863 31.5145 105.228 31.2411 105.373 30.6942L106.768 25.4989ZM111.985 25.4989H117.454C118.529 25.4989 119.067 25.8658 119.067 26.5995C119.067 26.759 119.04 26.939 118.985 27.1395L118.691 28.2333C118.591 28.5979 118.372 28.8713 118.035 29.0536C118.427 29.1949 118.623 29.4774 118.623 29.9012C118.623 30.0562 118.596 30.2294 118.541 30.4208L118.322 31.2411C117.98 32.5171 117.196 33.1552 115.971 33.1552H109.934L111.985 25.4989ZM116.21 28.5067C116.647 28.5067 116.916 28.3244 117.016 27.9598L117.085 27.6864C117.103 27.618 117.112 27.5565 117.112 27.5018C117.112 27.2603 116.934 27.1395 116.579 27.1395H113.298L112.122 31.5145H115.841C116.278 31.5145 116.547 31.3322 116.647 30.9677L116.716 30.6942C116.734 30.6259 116.743 30.5643 116.743 30.5096C116.743 30.2681 116.565 30.1473 116.21 30.1473H113.585L113.366 28.5067H116.21ZM127.552 29.327C128.135 29.327 128.5 29.0536 128.646 28.5067L128.796 27.9598C128.823 27.8505 128.837 27.7525 128.837 27.6659C128.837 27.315 128.605 27.1395 128.14 27.1395H124.64L123.027 33.1552H121.277L123.327 25.4989H129.452C130.355 25.4989 130.806 25.8794 130.806 26.6405C130.806 26.8684 130.767 27.1259 130.69 27.413L130.252 29.0536C130.106 29.6005 129.86 29.965 129.514 30.1473C129.669 30.2567 129.746 30.4413 129.746 30.701C129.746 30.856 129.719 31.036 129.664 31.2411L129.152 33.1552H127.402L127.771 31.788C127.798 31.6786 127.812 31.5806 127.812 31.494C127.812 31.1431 127.579 30.9677 127.114 30.9677H124.708L124.489 29.327H127.552ZM134.67 25.4989H136.42L134.369 33.1552H132.619L134.67 25.4989ZM145.711 31.5145C145.419 32.6037 144.622 33.1483 143.318 33.1483L139.805 33.1552C138.793 33.1552 138.287 32.7222 138.287 31.8563C138.287 31.6011 138.333 31.3049 138.424 30.9677L139.299 27.6864C139.691 26.2281 140.47 25.4989 141.637 25.4989H145.355C146.431 25.4989 146.969 25.8658 146.969 26.5995C146.969 26.759 146.941 26.939 146.887 27.1395H142.074C141.491 27.1395 141.126 27.413 140.98 27.9598L140.242 30.701C140.215 30.8104 140.201 30.9084 140.201 30.995C140.201 31.3413 140.434 31.5168 140.898 31.5214L145.711 31.5145ZM154.38 30.4208L154.018 27.6864L150.368 33.1552H148.399L153.512 25.4989H154.606C155.335 25.4989 155.747 25.8635 155.843 26.5927L156.711 33.1552H154.743L154.599 32.0614H152.63L152.412 30.4208H154.38ZM163.761 25.4989C164.344 25.4989 164.781 25.7723 165.073 26.3192L167.397 30.6942L168.792 25.4989H170.542L168.491 33.1552H166.96C166.376 33.1552 165.939 32.8817 165.647 32.3348L163.391 27.6864L161.929 33.1552H160.179L162.229 25.4989H163.761ZM174.009 25.4989H181.009L180.571 27.1395H173.571L174.009 25.4989ZM176.121 27.413L177.728 27.9598L176.333 33.1552H174.583L176.121 27.413ZM186.445 25.4989H189.945C191.02 25.4989 191.558 25.8658 191.558 26.5995C191.558 26.759 191.531 26.939 191.476 27.1395H186.882C186.304 27.1395 185.962 27.3218 185.857 27.6864L185.823 27.8231C185.809 27.8733 185.802 27.9188 185.802 27.9598C185.802 28.1604 185.944 28.2971 186.226 28.37L189.111 28.6434C190.132 28.7893 190.642 29.2382 190.642 29.9901C190.642 30.1633 190.615 30.3524 190.56 30.5575L190.451 30.9677C190.059 32.426 189.207 33.1552 187.894 33.1552H184.394C183.319 33.1552 182.781 32.7883 182.781 32.0546C182.781 31.8951 182.808 31.715 182.863 31.5145H187.457C188.04 31.5145 188.382 31.3322 188.482 30.9677L188.516 30.8309C188.53 30.7808 188.537 30.7352 188.537 30.6942C188.537 30.4937 188.398 30.357 188.12 30.2841L185.235 30.0106C184.255 29.8693 183.765 29.3703 183.765 28.5135C183.765 28.2675 183.806 27.9917 183.888 27.6864L183.963 27.413C184.305 26.1369 185.132 25.4989 186.445 25.4989Z"
            fill="#CC2828"
            className="svg-elem-5"
          ></path>
        </svg>
      </Box>

      <LinearProgress sx={{ width: '40%' }} />
    </Box>
  );
}
