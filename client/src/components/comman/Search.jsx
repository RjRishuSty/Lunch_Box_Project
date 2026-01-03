import React from "react";
import {IconButton,Tooltip} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = () => {
  return (
    <Tooltip title="Search" placement="bottom">
      <IconButton aria-label="">
        <SearchRoundedIcon fontSize="medium" color="inherit" />
      </IconButton>
    </Tooltip>
  );
};

export default Search;
