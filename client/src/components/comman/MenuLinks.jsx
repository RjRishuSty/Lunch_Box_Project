import React from "react";
import navLinks from "../../data/navLinks";
import { Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const MenuLinks = () => {
    // const {pathname} = useLocation();
  return (
    <Stack sx={{ flexDirection: "row", gap: 6 }}>
      {navLinks.map(({ label, path }, index) => (
        <Typography component={Link} to={path} key={index}>
          {label}
        </Typography>
      ))}
    </Stack>
  );
};

export default MenuLinks;
