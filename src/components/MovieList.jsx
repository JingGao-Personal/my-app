/* eslint-disable quotes */
import * as React from "react";
import List from "@mui/material/List";
import MovieItem from "./MovieItem";

export default function MovieList(props) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {props.movieList.length > 0 ? (
        props.movieList.map((movie) => <MovieItem movie={movie} />)
      ) : (
        <p>
          {" "}
          The movie list is empty, please search for them.
        </p>
      )}
    </List>
  );
}
