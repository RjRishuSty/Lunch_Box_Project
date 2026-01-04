import React from "react";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png";

const Logo = ({ width, maxHeight, sx }) => {
  return (
    <Box
      component="img"
      src={logo}
      alt="Nirmala Farms"
      sx={{
        width: width || 200,
        maxHeight: maxHeight || 70,
        objectFit: "contain",
        display: "block",
        ...sx,
      }}
    />
  );
};

export default React.memo(Logo);
