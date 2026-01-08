import React, { useState } from "react";
import {
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const DropdownMenu = ({ label, children,scrolled }) => {
  const isLaptop = useMediaQuery("(max-width:1270px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const { pathname } = useLocation();

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setIsHover(false);
  };

  return (
    <>
      <Typography
        variant={isLaptop ? "body2" : "body1"}
        component={Button}
        endIcon={
          isHover ? (
            <ArrowDropUpRoundedIcon color="text.primary" sx={{ ml: -1 }} />
          ) : (
            <ArrowDropDownRoundedIcon color="text.primary" sx={{ ml: -1 }} />
          )
        }
        onMouseEnter={handleMouseEnter}
        sx={{
          p: 0,
          color: isHover ? "secondary.dark" : scrolled?"text.primary":"#fff",
          fontWeight: 500,
          "&:hover": { color: "secondary.dark" },
        }}
      >
        {label}
      </Typography>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        MenuListProps={{ onMouseLeave: handleMouseLeave }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          sx: {
            bgcolor: "text.disabled",
            borderRadius: 1,
            minWidth: isLaptop ? "auto" : 180,
          },
        }}
      >
        {children.map((child) => {
          const isActive = pathname === child.path;
          return (
            <MenuItem
              key={child.id}
              component={Link}
              to={child.path}
              onClick={handleMouseLeave}
              sx={{
                bgcolor: isActive ? "secondary.light" : "transparent",
                color: isActive ? "white" : "text.primary",
                fontSize: isLaptop ? "0.9rem" : "1rem",
                "&:hover": {
                  bgcolor: "secondary.main",
                  color: "white",
                },
              }}
            >
              {child.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default DropdownMenu;
