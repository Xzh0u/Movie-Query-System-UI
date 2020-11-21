import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortNumericUp,
  faFilter,
  faCheckCircle,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  Divider,
  TextField,
  IconButton,
  MenuItem,
  Tooltip,
} from "@material-ui/core";
import styled from "styled-components";
import { movieContext } from "context/MovieProvider";
import { getSortedMovies } from "utils/getSortedMovies";
import { getTagedMovies } from "utils/getTagedMovies";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #bfbfbf;
`;

const sortItems = [
  {
    value: "date",
    label: "Date",
  },
  {
    value: "rank",
    label: "Rank",
  },
  {
    value: "score",
    label: "Score",
  },
  {
    value: "clicks",
    label: "Clicks",
  },
];

const Tags = [
  {
    value: "country",
    label: "Country",
  },
  {
    value: "language",
    label: "Language",
  },
  {
    value: "director",
    label: "Director",
  },
  {
    value: "majors",
    label: "Majors",
  },
  {
    value: "type",
    label: "Type",
  },
];
const SideBar: React.FC = () => {
  const [type, setType] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const { dispatch } = React.useContext(movieContext);

  const handleChange = (event: any) => {
    setType(event.target.value);
  };

  const handleContentChange = (event: any) => {
    setContent(event.target.value);
  };

  return (
    <div className="flex w-76 h-full z-10 left-0 fixed">
      <div className="mb-64 my-20 mx-4 w-full h-full overflow-y-auto">
        <div className="ml-14 mt-6 text-gray-500 font-lg font-mono font-semibold">
          <StyledFontAwesomeIcon
            className="mr-3"
            icon={faFilter}
            color="gray"
            size="lg"
          />
          Filter
        </div>
        <Divider className="mt-4 mb-4" />
        <TextField
          className="ml-14 mt-3 w-44"
          id="standard-select-type"
          select
          helperText="Select the item to sort"
          value={type}
          onChange={handleChange}
        >
          {sortItems.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Tooltip title="sort the item" placement="bottom">
          <IconButton
            className="my-7 ml-4 focus:outline-none"
            size="small"
            onClick={async () => {
              // dispatch({ type: 'setAction', payload: {action: 'sort'} });
              // dispatch({ type: 'setActionType', payload: {type: type} });
              const movies = await getSortedMovies(type);
              dispatch({ type: "setMovies", payload: { movies: movies } });
              setContent("");
            }}
          >
            <FontAwesomeIcon className="m-1" icon={faSortNumericUp} size="lg" />
          </IconButton>
        </Tooltip>
        <TextField
          className="ml-14 mt-3 w-44"
          id="standard-select-type"
          select
          helperText="Select the tag to display"
          value={type}
          onChange={handleChange}
        >
          {Tags.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className="ml-14 w-44 mt-2"
          id="mui-theme-provider-outlined-input"
          size="small"
          value={content}
          onChange={handleContentChange}
          helperText="Please enter value of the tag"
        />
        <Tooltip title="comfirm" placement="bottom">
          <IconButton
            className="mt-4 ml-4 focus:outline-none"
            size="small"
            onClick={async () => {
              const movies = await getTagedMovies(type, content);
              dispatch({ type: "setMovies", payload: { movies: movies } });
              dispatch({ type: "setActionType", payload: { type: "" } });
            }}
          >
            <FontAwesomeIcon
              className="m-1"
              icon={faCheckCircle}
              color="gray"
              size="lg"
            />
          </IconButton>
        </Tooltip>

        <div className="ml-14 mt-14 text-gray-500 font-lg font-mono font-semibold">
          <StyledFontAwesomeIcon
            className="mr-3"
            icon={faThumbsUp}
            color="gray"
            size="lg"
          />
          Recommend
        </div>
        <Divider className="mt-4 mb-4" />
        <p className="ml-16 mt-6 text-gray-500 hover:text-gray-600 text-sm font-mono">
          1. 肖申克的救赎
        </p>
        <p className="ml-16 mt-2 text-gray-500 hover:text-gray-600 text-sm font-mono">
          2. 霸王别姬
        </p>
        <p className="ml-16 mt-2 text-gray-500 hover:text-gray-600 text-sm font-mono">
          3. 这个杀手不太冷
        </p>
      </div>
    </div>
  );
};

export default SideBar;
