import React from "react";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png";

const Logo = ({ sx }) => {
  return (
    <Box
      component="img"
      src={logo}
      alt="Nirmala Farms"
      sx={{
        // border:'2px solid red',
        py:0.7,
        width: 'auto',
        objectFit: "contain",
        display: "block",
        ...sx,
      }}
    />
  );
};

export default React.memo(Logo);
