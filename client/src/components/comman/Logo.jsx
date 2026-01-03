import React from 'react';
import {Box, Typography} from '@mui/material';
import logo from '../../assets/logo.webp';

const Logo = () => {
  return (
    <Box component='img' src={logo} alt='LunchBox' sx={{width:180,height:'auto'}} />
  )
}

export default Logo