import { movieContext } from "context/MovieProvider";
import React, { useContext, useEffect } from "react";
import { getMovies, GetMoviesParams } from "utils/api";
import Filter from "./Filter";
import Sorter from "./Sorter";

const MovieFilter: React.FC = () => {
  const { getMoviesParams, dispatch } = useContext(movieContext);

  const mergeGetMoviesParams = (params: Partial<GetMoviesParams>) =>
    dispatch({
      type: "mergeGetMoviesParams",
      payload: { params: { offset: 0, ...params } },
    });

  useEffect(() => {
    (async () => {
      const { movies, count } = await getMovies(getMoviesParams);
      dispatch({ type: "setMovies", payload: { movies } });
      dispatch({ type: "setMovieCount", payload: { count } });
    })();
  }, [getMoviesParams, dispatch]);

  return (
    <div className="px-8 py-8 space-y-4">
      <Sorter
        sortType={getMoviesParams.sort}
        setSortType={mergeGetMoviesParams}
      />
      <Filter
        getMoviesParams={getMoviesParams}
        mergeGetMoviesParams={mergeGetMoviesParams}
      />
    </div>
  );
};

export default MovieFilter;
