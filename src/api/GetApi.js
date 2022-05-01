/* eslint-disable quotes */
import axios from "axios";

export async function getMovieDetail(imdbID) {

  const result = await axios
    .get(`https://www.omdbapi.com/?apikey=c2de74cd&i=${imdbID}`)
    .then((res) => res.data);
  return result
}

export async function getMovies(title) {

  const results = await axios
    .get(`https://www.omdbapi.com/?apikey=c2de74cd&s=${title}`)
    .then((res) => res.data);
  return results.Search
}
