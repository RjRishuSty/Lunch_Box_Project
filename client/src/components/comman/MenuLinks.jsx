import React from "react";
import navLinks from "../../data/navLinks";
import {
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const MenuLinks = ({ useIn,scrolled }) => {
  const isLaptop = useMediaQuery("(max-width:1270px)");
  const { pathname } = useLocation();
  const isSidebar = useIn === "sidebar";
  const shortLabels = {
    "About Us": "About",
    "Contact Us": "Contact",
  };

  return (
    <Stack
      sx={{
        flexDirection: isSidebar ? "column" : "row",
        gap: { xs: 2, sm: 2, md: isLaptop ? 1.5 : 3 },
        justifyContent: "center",
        alignItems: isSidebar ? "start" : "center",
      }}
    >
      {navLinks.map(({ id, label, path, children }) => {
        const isActive = pathname === path;
        return (
          <React.Fragment key={id}>
            {children ? (
              <DropdownMenu label={label} children={children} scrolled={scrolled} />
            ) : (
              <Typography
                component={Link}
                variant={isLaptop ? "body2" : "body1"}
                to={path}
                sx={{
                  color: isActive ? "secondary.dark" :scrolled?"text.primary":"#fff",
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
                {isSidebar
                  ? label
                  : isLaptop
                  ? shortLabels[label] || label
                  : label}
              </Typography>
            )}
          </React.Fragment>
        );
      })}
    </Stack>
  );
};

export default MenuLinks;
