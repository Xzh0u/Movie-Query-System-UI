import React from "react";
import { GetMoviesParams } from "utils/api";
import { RadioButton } from "components/Button";

export type SorterProps = {
  sortType: GetMoviesParams["sort"];
  setSortType: (p: Partial<GetMoviesParams>) => void;
};

const Sorter: React.FC<SorterProps> = ({ sortType, setSortType }) => {
  return (
    <div className="flex space-x-2">
      <RadioButton
        isSelected={sortType === "date"}
        onClick={() =>
          setSortType({ sort: sortType === "date" ? undefined : "date" })
        }
      >
        最新
      </RadioButton>
      <RadioButton
        isSelected={sortType === "view"}
        onClick={() =>
          setSortType({ sort: sortType === "view" ? undefined : "view" })
        }
      >
        最热
      </RadioButton>
    </div>
  );
};

export default Sorter;
