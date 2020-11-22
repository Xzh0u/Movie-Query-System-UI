import Header from "containers/Home/Header";
import MovieFilter from "containers/MovieFilter";
// import SideBar from "containers/Home/SideBarOld";
import MovieList from "containers/MovieList";
import React from "react";

const MovieListPage: React.FC = () => {


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
