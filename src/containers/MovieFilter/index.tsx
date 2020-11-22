import React, { useEffect, useState } from "react";
import { getMovies, GetMoviesParams } from "utils/api";
import Filter from "./Filter";
import Sorter from "./Sorter";

const MovieFilter: React.FC = () => {
  const [getMoviesParams, setGetMoviesParams] = useState<GetMoviesParams>({
    sort: "date",
  });

  useEffect(() => {
    (async () => {
      const data = await getMovies(getMoviesParams);
      console.log(data);
    })();
  }, [getMoviesParams]);

  const mergeGetMoviesParams = (params: Partial<GetMoviesParams>) =>
    setGetMoviesParams({ ...getMoviesParams, ...params });

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
