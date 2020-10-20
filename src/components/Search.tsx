/* eslint-disable array-callback-return */
/* eslint-disable no-debugger */
import React, { useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import styled from "styled-components";
import {movieContext} from "./../context/MovieProvider";
import {getAllMovies} from "./../utils/getAllMovies";

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
  const { movie, dispatch } = useContext(movieContext);

  useEffect(() => {
    console.log(movie)
}, [movie]);

  const searchMovie = (title: string) => {
    movie.map((data, idx) => {
      if (title === data.title) {
        dispatch({
          type: 'setMovies',
          payload: { movie: [movie[idx]] },
        })
        console.log("set!");
      }
      console.log("!!!");
    })
  }
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
            dispatch({ type: 'setMovies', payload: {movie: movies} })
          }

        }}
        options={movie.map(item => item.title)}
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
