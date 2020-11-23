import Header from "containers/Header";
import MovieFilter from "containers/MovieFilter";
import MovieList from "containers/MovieList";
import React from "react";

const MovieListPage: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex h-full" style={{ paddingTop: 68 }}>
        <div className="w-76 h-full fixed">
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
