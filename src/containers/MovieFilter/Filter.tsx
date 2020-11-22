import { RadioButton } from "components/Button";
import React from "react";
import { GetMoviesParams, getTypeList } from "utils/api";
import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { countryToFlag } from "utils/flag";
import countries from "constants/countries";
import { TextField } from "@material-ui/core";
import InputSearch from "components/InputSearch";

const Label = styled.div.attrs({ className: "font-medium text-sm" })``;
const RadioGroup = styled.div.attrs({
  className: "flex p-2 space-x-2",
})``;

type FilterRadioButtonProps<T extends keyof GetMoviesParams> = {
  label: T;
  value: GetMoviesParams[T];
};

export type CountryType = {
  code: string;
  label: string;
  phone: string;
};

export type FilterProps = {
  getMoviesParams: GetMoviesParams;
  mergeGetMoviesParams: (p: Partial<GetMoviesParams>) => void;
};

const Filter: React.FC<FilterProps> = ({
  getMoviesParams,
  mergeGetMoviesParams,
}) => {
  const FilterRadioButton: React.FC<
    FilterRadioButtonProps<keyof GetMoviesParams>
  > = ({ label, value, children }) => {
    return (
      <RadioButton
        isSelected={getMoviesParams[label] === value}
        onClick={() =>
          mergeGetMoviesParams({
            [label]: getMoviesParams[label] === value ? undefined : value,
          })
        }
      >
        {children}
      </RadioButton>
    );
  };

  const country = countries.find((x) => x.label === getMoviesParams.country);

  return (
    <div className="flex flex-col space-y-2">
      <div>
        <Label>豆瓣评分</Label>
        <RadioGroup>
          {[5, 8, 9].map((val, idx) => (
            <FilterRadioButton key={idx} label="scoreLargerThan" value={val}>
              高于{val}星
            </FilterRadioButton>
          ))}
        </RadioGroup>
      </div>
      <div>
        <Label>名著改编</Label>
        <RadioGroup>
          <FilterRadioButton label="adaptation" value={1}>
            是
          </FilterRadioButton>
          <FilterRadioButton label="adaptation" value={0}>
            否
          </FilterRadioButton>
        </RadioGroup>
      </div>

      <Autocomplete
        value={country}
        onChange={(_, val) =>
          mergeGetMoviesParams({
            country: val ? (val as CountryType).label : undefined,
          })
        }
        options={countries as CountryType[]}
        autoHighlight
        getOptionLabel={(option) => (option as CountryType).label}
        renderOption={(option) => (
          <div className="flex space-x-1">
            <span>{countryToFlag((option as CountryType).code)}</span>
            <span>{(option as CountryType).label}</span>
          </div>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="地域"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <InputSearch value={""} onChange={() => null} fetchOptions={async () => {
        return getTypeList("language");
      }} />
      <div>剧情</div>
      <div>导演</div>
      <div>演员</div>
      <div>语言</div>
    </div>
  );
};

export default Filter;
