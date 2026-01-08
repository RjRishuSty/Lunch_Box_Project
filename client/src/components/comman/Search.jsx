import React from "react";
import {IconButton,Tooltip} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = () => {
  return (
    <Tooltip title="Search" placement="bottom">
      <IconButton aria-label="search">
        <SearchRoundedIcon fontSize="medium" sx={{color:'secondary.main'}} />
      </IconButton>
    </Tooltip>
  );
};

export default Search;
