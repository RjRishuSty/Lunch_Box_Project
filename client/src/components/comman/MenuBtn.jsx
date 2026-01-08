import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";

const MenuBtn = () => {
  const isTablet = useMediaQuery("(max-width:899px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleOpenSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <IconButton
        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        onClick={handleOpenSidebar}
      >
        <MenuRoundedIcon fontSize="large" />
      </IconButton>
      {isSidebarOpen && isTablet && (
        <Sidebar isOpen={isSidebarOpen} isClose={handleOpenSidebar} />
      )}
    </>
  );
};

export default MenuBtn;
