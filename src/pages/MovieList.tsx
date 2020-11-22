import Header from "containers/Home/Header";
import MovieFilter from "containers/MovieFilter";
// import SideBar from "containers/Home/SideBarOld";
import MovieList from "containers/MovieList";
import { movieContext } from "context/MovieProvider";
import React, { useContext, useEffect } from "react";
import { getMovies } from "utils/api";

const MovieListPage: React.FC = () => {
  const { getMoviesParams, dispatch } = useContext(movieContext);
  useEffect(() => {
    (async () => {
      const movies = await getMovies(getMoviesParams);
      dispatch({ type: "setMovies", payload: { movies } });
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="w-full h-full bg-gray-100">
      <Header />
      <div className="flex h-full" style={{ paddingTop: 68 }}>
        <div className="bg-red-100 w-76 h-full fixed">
          <MovieFilter />
        </div>
        <div className="flex-1 ml-76 overflow-y-auto">
          <MovieList />
        </div>
      </div>
    </div>
  );
};

export default MovieListPage;
