import { Box } from '@mui/material'
import React from 'react'
import heroVideo from '../../assets/video/intro.mp4';

const CustomVideo = () => {
  return (
    <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        src={heroVideo}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      />
  )
}

export default CustomVideo