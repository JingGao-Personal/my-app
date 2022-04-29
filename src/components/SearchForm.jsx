/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
export default function SearchForm() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 950 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search movies"
        inputProps={{ "aria-label": "search movies" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
