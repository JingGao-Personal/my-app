/* eslint-disable quotes */
import axios from "axios";

export async function getMovieDetail(imdbID) {
  return axios
    .get(`https://www.omdbapi.com/?apikey=c2de74cd&t=${imdbID}`)
    .then((res) => res.data);
}

export async function getMovies(title) {
  return axios
    .get(`https://www.omdbapi.com/?apikey=c2de74cd&s=${title}`)
    .then((res) => res.data);
}
