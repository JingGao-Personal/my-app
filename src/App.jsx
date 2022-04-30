/* eslint-disable quotes */
import React, { useState } from "react";
// import CircularProgress from "@mui/material/CircularProgress";
import { Box, Stack } from "@mui/material";
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";
import { getMovies } from "./api/GetApi";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const search = async () => {
    const resultList = await getMovies(inputValue);
    setMovieList(resultList);
  };

  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
        data-testid="top-box-container"
      >
        <Stack spacing={2}>
          <div>OMDb API</div>
          <SearchForm
            inputValue={inputValue}
            setInputValue={setInputValue}
            search={search}
          />
          {/* <CircularProgress /> */}
          <MovieList movieList={movieList ?? []} />
        </Stack>
      </Box>
    </main>
  );
}
