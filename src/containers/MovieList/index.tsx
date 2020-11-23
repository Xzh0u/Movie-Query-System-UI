import { Pagination, Skeleton } from "@material-ui/lab";
import InfoCard, { StyledCard } from "components/InfoCard";
import InfoPanel from "components/InfoPanel";
import { movieContext, MovieType } from "context/MovieProvider";
import React, { memo, useContext, useState } from "react";
import Empty from "./Empty";

const MovieList: React.FC = () => {
  const { movies, pending, getMoviesParams, movieCount, dispatch } = useContext(
    movieContext
  );
  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);
  const [isInfoPanelOpen, setInfoPanelOpen] = useState(false);

  const changePage = (_: any, p: number) =>
    dispatch({
      type: "mergeGetMoviesParams",
      payload: { params: { offset: (p - 1) * getMoviesParams.limit } },
    });

  if (pending) {
    return (
      <div className="flex flex-col mt-8 mx-16 my-4 space-y-6">
        {new Array(3).fill(undefined).map((_, idx) => (
          <StyledCard
            key={idx}
            raised
            variant="outlined"
            className="w-100 h-36 flex items-center"
          >
            <Skeleton variant="rect" className="w-24 h-24 m-4"></Skeleton>
            <div className="font-sm w-80 text-gray-600 space-y-2">
              <Skeleton variant="rect" className="w-32"></Skeleton>
              <Skeleton variant="rect" className="w-48"></Skeleton>
              <Skeleton variant="rect" className="w-64"></Skeleton>
            </div>
          </StyledCard>
        ))}
      </div>
    );
  }

  if (!movies.length) {
    return <Empty />;
  }

  const pageCount = Math.floor(movieCount / getMoviesParams.limit) + 1;

  const page = getMoviesParams.offset / getMoviesParams.limit + 1;

  return (
    <div className="flex flex-col mt-8 mx-16 my-4">
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
      <div className="my-4 space-y-6">
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
