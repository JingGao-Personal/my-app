/* eslint-disable quotes */
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Stack } from "@mui/material";
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <SearchForm />
          {/* <CircularProgress /> */}
          <MovieList />
        </Stack>
      </Box>
    </main>
  );
}
