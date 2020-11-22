import InfoCard from "components/InfoCard";
import InfoPanel from "components/InfoPanel";
import { movieContext, MovieType } from "context/MovieProvider";
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAllMovies } from "utils/getAllMovies";
import { getMovieImages } from "utils/getMovieImages";

const MovieList: React.FC = () => {
  const { movies, dispatch } = useContext(movieContext);
  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);
  const [isInfoPanelOpen, setInfoPanelOpen] = useState(false);

  const getAllMoviesRequest = useCallback(async () => {
    const movies = await getAllMovies();
    const imgs = await getMovieImages();

    dispatch({ type: "setMovies", payload: { movies: movies } });
    dispatch({ type: "setImages", payload: { imgs: imgs } });
  }, [dispatch]);

  useEffect(() => {
    getAllMoviesRequest();
  }, [getAllMoviesRequest]);

  return (
    <div className="flex flex-col mt-8">
      {/* FIXME: remove slice; split pages or load by require */}
      <InfoPanel
        movie={selectedMovie}
        isOpen={isInfoPanelOpen}
        onClose={() => setInfoPanelOpen(false)}
      />
      {movies.slice(0, 10).map((movie) => (
        <InfoCard
          movie={movie}
          onClick={() => {
            setSelectedMovie(movie);
            setInfoPanelOpen(true);
          }}
        />
      ))}
    </div>
  );
};

export default memo(MovieList);
