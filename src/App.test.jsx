/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import MovieList from "./components/MovieList";
import axios from "axios";
import { getMovies } from "./api/GetApi";

describe("Getflix test suite", () => {
  it("should display the home page", () => {
    const { getByText, getByTestId } = render(<App />);

    expect(getByText("OMDb API")).toBeInTheDocument();
    expect(getByTestId("search-input-field")).toBeInTheDocument();
    expect(
      getByText("The movie list is empty, please search for them.")
    ).toBeInTheDocument();
  });

  it("should trigger get movies after click search button", async () => {
    render(<App />);
    const inputField = screen.getByTestId("search-input-field");
    const searchButton = screen.getByTestId("search-button");

    const mockMovies = {
      Search: [
        {
          Title: "Chinese Zodiac",
          Year: "2012",
          imdbID: "tt1424310",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMDZjODAzMmQtNGNkZC00MmYzLWEzNDUtNGY1ZjhmMTM1MTFhXkEyXkFqcGdeQXVyNTQxMzIzMDc@._V1_SX300.jpg",
        },
      ],
    };

    jest.spyOn(axios, "get").mockReturnValue(
      Promise.resolve({
        data: mockMovies,
      })
    );

    userEvent.type(inputField, "Chinese");
    fireEvent.click(searchButton);

    const movies = await getMovies("Chinese");
    render(<MovieList movieList={movies} />);
    await screen.findByText("Chinese Zodiac");
  });
});
