/* eslint-disable quotes */
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MovieDetails({movieDetail: {Genre, Director, Writer, Actors, Language, Country}}) {
  return (
    <CardContent>
      <Typography paragraph>Genre: {Genre ?? ""}</Typography>
      <Typography paragraph>Director: {Director ?? ""}</Typography>
      <Typography paragraph>Writer: {Writer ?? ""}</Typography>
      <Typography paragraph>Actors: {Actors ?? ""}</Typography>
      <Typography paragraph>Language: {Language ?? ""}</Typography>
      <Typography paragraph>Country: {Country ?? ""}</Typography>
    </CardContent>
  );
}
