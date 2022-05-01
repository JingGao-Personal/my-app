/* eslint-disable quotes */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MovieDetails from "./MovieDetail";
import { getMovieDetail } from "../api/GetApi";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieItem(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [movieDetail, setMovieDetail] = React.useState(null);

  const handleExpandClick = async () => {
    const result = await getMovieDetail(props.movie.imdbID);
    setMovieDetail(result);
    setTimeout(10000)
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardHeader title={props.movie.Title} subheader={props.movie.Year} />
      <CardMedia
        component="img"
        height="194"
        image={props.movie.Poster}
        alt="movie poster"
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <MovieDetails movieDetail={movieDetail} />
      </Collapse>
    </Card>
  );
}
