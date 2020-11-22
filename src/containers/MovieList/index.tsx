import { Pagination } from "@material-ui/lab";
import InfoCard from "components/InfoCard";
import InfoPanel from "components/InfoPanel";
import { movieContext, MovieType } from "context/MovieProvider";
import React, { memo, useContext, useState } from "react";

const MovieList: React.FC = () => {
  const { movies, getMoviesParams, movieCount, dispatch } = useContext(
    movieContext
  );
  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);
  const [isInfoPanelOpen, setInfoPanelOpen] = useState(false);

  const changePage = (_: any, p: number) =>
    dispatch({
      type: "mergeGetMoviesParams",
      payload: { params: { offset: (p - 1) * getMoviesParams.limit } },
    });

  if (!movies.length) {
    return null;
  }

  const pageCount = Math.floor(movieCount / getMoviesParams.limit) + 1;
  // console.log(tmp)
  // const pageCount = 1;

  const page = getMoviesParams.offset / getMoviesParams.limit + 1;

  return (
    <div className="flex flex-col mt-8 mx-16">
      <InfoPanel
        movie={selectedMovie}
        isOpen={isInfoPanelOpen}
        onClose={() => setInfoPanelOpen(false)}
      />
      <Pagination
        count={pageCount}
        page={page}
        onChange={changePage}
        shape="rounded"
      />
      <div className="my-4">
        {movies.map((movie) => (
          <InfoCard
            movie={movie}
            onClick={() => {
              setSelectedMovie(movie);
              setInfoPanelOpen(true);
            }}
          />
        ))}
        <Pagination
          count={pageCount}
          page={page}
          onChange={changePage}
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default memo(MovieList);
