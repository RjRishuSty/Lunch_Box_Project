import React from "react";
import { AppBar, Toolbar, Button, Box, Stack } from "@mui/material";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import Search from "./Search";
import Cart from "./Cart";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

const Header = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ justifyContent: "space-between",py:2 }}>
        <Logo />
        <Stack>
          <MenuLinks />
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Search />
          <Cart />
          <Button
            variant="contained"
            endIcon={<LoginRoundedIcon fontSize="medium" color="inherit" />}
          >
            Sign In
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
