import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

const MenuBtn = () => {
  return (
    <IconButton sx={{display:{xs:'block',sm:'block',md:'none'}}}>
        <MenuRoundedIcon fontSize='large'/>
    </IconButton>
  )
}

export default MenuBtn