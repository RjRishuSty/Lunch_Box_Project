import React from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Tooltip, IconButton, Badge } from "@mui/material";

const Cart = () => {
  return (
    <Badge badgeContent={4} color="secondary">
      <Tooltip title="Cart">
        <ShoppingCartRoundedIcon fontSize="medium" color="inherit" />
      </Tooltip>
    </Badge>
  );
};

export default Cart;
