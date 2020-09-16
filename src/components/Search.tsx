import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import styled from "styled-components";

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

const Search: React.FC = () => {
  return (
    <div className="ml-w-48">
      <Autocomplete
        className="ml-text-left"
        id="searchBar"
        autoHighlight={true}
        clearOnEscape={true}
        autoComplete={true}
        options={[1, 2]}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            className="ml-w-11-12 ml-my-2 ml-text-base"
            label="Search input"
            margin="none"
            variant="outlined"
            size="small"
          />
        )}
      />
    </div>
  );
};

export default Search;
