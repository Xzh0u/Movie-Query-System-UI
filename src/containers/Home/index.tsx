/* eslint-disable no-debugger */
import React, { useCallback, useContext, useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBarOld";
import InfoCard from "./../../components/InfoCard";
import BackTop from "./../../components/BackTop";
import { movieContext } from "./../../context/MovieProvider";
import { getAllMovies } from "./../../utils/getAllMovies";
import { getMovieImages } from "./../../utils/getMovieImages";
// import InfoPanel from "components/InfoPanel";

const Home: React.FC = () => {
  const { movies, dispatch } = useContext(movieContext);
  // const [open, setOpen] = React.useState(false);

  const getAllMoviesRequest = useCallback(async () => {
    const _movies = await getAllMovies();
    const imgs = await getMovieImages();

    dispatch({ type: "setMovies", payload: { movies: _movies } });
    dispatch({ type: "setImages", payload: { imgs: imgs } });
  }, [dispatch]);

  useEffect(() => {
    getAllMoviesRequest();
  }, [getAllMoviesRequest]);

  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <div>
          <div className="w-full h-24 top-0 left-0" />
          <div
            id="back-to-top-anchor"
            className="flex flex-col ml-76 overflow-y-auto"
          >
            {movies.map((movie) => (
              <InfoCard movie={movie} />
            ))}
            <BackTop />
            {/* <InfoPanel openPanel={open} setOpenPanel={setOpen} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
