import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import MenuLinks from "./MenuLinks";

const Sidebar = ({ isOpen, isClose }) => {
  return (
    <Drawer open={isOpen} onClose={isClose}>
      <Stack sx={{ minWidth: 250, p: 2 }}>
        <MenuLinks useIn="sidebar" />
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
