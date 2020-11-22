/* eslint-disable array-callback-return */
/* eslint-disable no-debugger */
import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import styled from "styled-components";
import { movieContext } from "./../context/MovieProvider";
import { getAllMovies } from "./../utils/getAllMovies";
import { getMovieImages } from "./../utils/getMovieImages";

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 20px;
    background-color: #edf2f7;
  }
  .MuiOutlinedInput-notchedOutline {
    border-width: 3px;
    border-color: #edf2f7;
  }
`;

const Search: React.FC = () => {
  const { movies: movie, dispatch } = useContext(movieContext);

  const searchMovie = (title: string) => {
    movie.map((data, idx) => {
      if (title === data.title) {
        dispatch({
          type: "setMovies",
          payload: { movies: [movie[idx]] },
        });
      }
    });
  };

  return (
    <div className="w-111 px-8">
      <Autocomplete
        className="text-left"
        id="searchBar"
        autoHighlight={true}
        clearOnEscape={true}
        autoComplete={true}
        onChange={async (_, value) => {
          if (value) {
            searchMovie(value.toString());
          } else {
            const movies = await getAllMovies();
            const imgs = await getMovieImages();
            dispatch({ type: "setMovies", payload: { movies: movies } });
            dispatch({ type: "setImages", payload: { imgs } });
          }
        }}
        options={movie.map((item) => item.title)}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            className="w-full text-base"
            label="Search input"
            margin="none"
            variant="outlined"
            size="small"
          />
        )}
      />
    </div>
  );
};

export default Search;
