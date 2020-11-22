import InfoCard from "components/InfoCard";
import InfoPanel from "components/InfoPanel";
import { movieContext, MovieType } from "context/MovieProvider";
import React, {
  memo,
  useContext,
  useState,
} from "react";

const MovieList: React.FC = () => {
  const { movies } = useContext(movieContext);
  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);
  const [isInfoPanelOpen, setInfoPanelOpen] = useState(false);

  return (
    <div className="flex flex-col mt-8">
      {/* FIXME: remove slice; split pages or load by require */}
      <InfoPanel
        movie={selectedMovie}
        isOpen={isInfoPanelOpen}
        onClose={() => setInfoPanelOpen(false)}
      />
      {movies.map((movie) => (
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
