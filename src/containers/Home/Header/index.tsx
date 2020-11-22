import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { Avatar, TextField } from "@material-ui/core";
import InputSearch from "components/InputSearch";
import { getTypeList } from "utils/api";
import styled from "styled-components";
import { movieContext } from "context/MovieProvider";

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 20px;
    background-color: #edf2f7;
  }
  .MuiOutlinedInput-notchedOutline {
    border-width: 3px;
    border-color: #edf2f7;
  }
`;

const Header: React.FC = () => {
  const { dispatch } = useContext(movieContext);
  const [searchVal, setSearchVal] = useState<string | undefined>(undefined);

  const handleSearch = (
    event: any,
    val: string | null,
    reason: any,
    details: any
  ) => {
    console.log(event, reason, details);
    const nextSearchVal = val ?? undefined;
    setSearchVal(nextSearchVal);
    dispatch({
      type: "mergeGetMoviesParams",
      payload: { params: { title: nextSearchVal, offset: 0 } },
    });
  };

  return (
    <div className="shadow flex items-center bg-white w-full z-9999 fixed top-0">
      <FontAwesomeIcon className="ml-16" icon={faFilm} color="gray" size="lg" />
      <div className="tracking-wide text-lg px-2 mr-10 py-4 font-sans text-blue-500 font-black">
        Movie Awesome
      </div>
      {/* <Search /> */}
      <div className="w-111">
        <InputSearch
          value={searchVal || ""}
          className="text-left"
          onChange={handleSearch}
          clearOnEscape={true}
          autoHighlight={true}
          autoComplete={true}
          fetchOptions={async () => {
            return getTypeList("title");
          }}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              className="w-full text-base"
              label="🔍 搜全站"
              margin="none"
              variant="outlined"
              size="small"
            />
          )}
        />
      </div>
      <Avatar
        className="m-2 h-9 w-9 absolute right-25"
        alt="round"
        src="https://i.loli.net/2020/06/01/2uHvPFcdwAb3tRi.png"
      />
    </div>
  );
};

export default Header;
