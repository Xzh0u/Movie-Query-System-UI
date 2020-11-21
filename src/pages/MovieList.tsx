import Header from "containers/Home/Header";
import MovieList from "containers/MovieList";
import React from "react";

const MovieListPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <Header />
      <div className="flex h-full" style={{ paddingTop: 68 }}>
        <div className="bg-red-200 w-76 h-56 fixed">A</div>
        <div className="bg-blue-200 flex-1 ml-76 mt-8">
          <MovieList />
        </div>
      </div>
    </div>
  );
};

export default MovieListPage;
