import React from "react";
import navLinks from "../../data/navLinks";
import { Typography, Stack, Button, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const MenuLinks = () => {
  const isLaptop = useMediaQuery('(max-width:1270px)');
  const { pathname } = useLocation();
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: { xs: 0, sm: 0, md: isLaptop?1.5:3 },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {navLinks.map(({ id, label, path, children }) => {
        const isActive = pathname === path;
        return (
          <React.Fragment key={id}>
            {children ? (
              <DropdownMenu label={label} children={children} />
            ) : (
              <Typography
                component={Link}
                variant={isLaptop?"body2":"body1"}
                to={path}
                sx={{
                  color: isActive ? "secondary.dark" : "text.primary",
                  cursor: "pointer",
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": {
                    color: "secondary.dark",
                    textDecoration: !isActive && "underline",
                    textUnderlineOffset: 5,
                  },
                }}
              >
                {label}
              </Typography>
            )}
          </React.Fragment>
        );
      })}
    </Stack>
  );
};

export default MenuLinks;
