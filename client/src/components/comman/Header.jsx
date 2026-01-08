import React from "react";
import { AppBar, Toolbar, Button, Box, Stack, useMediaQuery } from "@mui/material";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import Search from "./Search";
import Cart from "./Cart";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import MenuBtn from "./MenuBtn";

const Header = () => {
   const isLaptop = useMediaQuery('(max-width:1270px)');
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between", p: 0.5 }}>
        <Logo
          sx={{
            maxHeight: { xs: 60, sm: 60, md: isLaptop?55:70 },
          }}
        />
        <Stack sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <MenuLinks />
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            gap: { xs: 2, sm: 3, md:isLaptop?2: 5 },
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              gap: { xs: 1, sm: 0.5, md:isLaptop?1: 3 },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Search />
            <Cart />
          </Stack>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{
              display: { xs: "none", sm: "inline-flex", md: "inline-flex" },
              m: { xs: 0, sm: "auto", md: "auto" },
            }}
            endIcon={!isLaptop?<LoginRoundedIcon fontSize="medium" color="inherit" />:null}
          >
            Sign In
          </Button>
          <MenuBtn />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
