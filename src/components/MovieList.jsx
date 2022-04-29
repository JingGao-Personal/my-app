/* eslint-disable quotes */
import * as React from "react";
import List from "@mui/material/List";
import MovieItem from "./MovieItem";

export default function MovieList(movieList) {
  return (
    <List sx={{ width: "100%", maxWidth: 950, bgcolor: "background.paper" }}>
      {movieList.length > 0 ? (
        movieList.map((movie) => <MovieItem movie={movie} />)
      ) : (
        <p>
          {" "}
          Couldn&apos;t find any movie. Please search again using another search
          criteria.
        </p>
      )}
      <MovieItem />
    </List>
  );
}
