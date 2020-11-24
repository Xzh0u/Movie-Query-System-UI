import { RadioButton } from "components/Button";
import React, { useContext, useState } from "react";
import { GetMoviesParams, getTypeList } from "utils/api";
import styled from "styled-components";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import { countryToFlag } from "utils/flag";
// import countries from "constants/countries";
// import { TextField } from "@material-ui/core";
import InputSearch from "components/InputSearch";
import { movieContext } from "context/MovieProvider";

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

  const [countryVal, setCountryVal] = useState<string | undefined>(undefined);
  const [languageVal, setLanguageVal] = useState<string | undefined>(undefined);
  const [typeVal, setTypeVal] = useState<string | undefined>(undefined);
  const [directorVal, setDirectorVal] = useState<string | undefined>(undefined);
  const [majorVal, setMajorVal] = useState<string | undefined>(undefined);
  const { dispatch } = useContext(movieContext);
  const handleCountryVal = (
    event: any,
    val: string | null,
    reason: any,
    details: any
  ) => {
    console.log(event, reason, details);
    const nextSearchVal = val ?? undefined;
    setCountryVal(nextSearchVal);
    dispatch({
      type: "mergeGetMoviesParams",
      payload: { params: { country: nextSearchVal, offset: 0 } },
    });
  };

  const handleTypeVal = (
    event: any,
    val: string | null,
    reason: any,
    details: any
  ) => {
    console.log(event, reason, details);
    const nextSearchVal = val ?? undefined;
    setTypeVal(nextSearchVal);
    dispatch({
      type: "mergeGetMoviesParams",
      payload: { params: { type: nextSearchVal, offset: 0 } },
    });
  };

  const handleDirectorVal = (
    event: any,
    val: string | null,
    reason: any,
    details: any
  ) => {
    console.log(event, reason, details);
    const nextSearchVal = val ?? undefined;
    setDirectorVal(nextSearchVal);
    dispatch({
      type: "mergeGetMoviesParams",
      payload: { params: { director: nextSearchVal, offset: 0 } },
    });
  };

  const handleLanguageVal = (
    event: any,
    val: string | null,
    reason: any,
    details: any
  ) => {
    console.log(event, reason, details);
    const nextSearchVal = val ?? undefined;
    setLanguageVal(nextSearchVal);
    dispatch({
      type: "mergeGetMoviesParams",
      payload: { params: { language: nextSearchVal, offset: 0 } },
    });
  };

  const handleMajorVal = (
    event: any,
    val: string | null,
    reason: any,
    details: any
  ) => {
    console.log(event, reason, details);
    const nextSearchVal = val ?? undefined;
    setMajorVal(nextSearchVal);
    dispatch({
      type: "mergeGetMoviesParams",
      payload: { params: { major: nextSearchVal, offset: 0 } },
    });
  };
  // const country = countries.find((x) => x.label === getMoviesParams.country);

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

      {/* <Autocomplete
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
      /> */}
      <div className="text-gray-500 ml-4">
        ----------- 按条件筛选 -----------
      </div>
      <InputSearch
        label={"国家/地区"}
        value={countryVal || ""}
        onChange={handleCountryVal}
        fetchOptions={async () => {
          return getTypeList("country");
        }}
      />
      <InputSearch
        label={"语言"}
        value={languageVal || ""}
        onChange={handleLanguageVal}
        fetchOptions={async () => {
          return getTypeList("language");
        }}
      />
      <InputSearch
        label={"剧情"}
        value={typeVal || ""}
        onChange={handleTypeVal}
        fetchOptions={async () => {
          return getTypeList("type");
        }}
      />
      <InputSearch
        label={"导演"}
        value={directorVal || ""}
        onChange={handleDirectorVal}
        fetchOptions={async () => {
          return getTypeList("director");
        }}
      />
      <InputSearch
        label={"演员"}
        value={majorVal || ""}
        onChange={handleMajorVal}
        fetchOptions={async () => {
          return getTypeList("major");
        }}
      />
    </div>
  );
};

export default Filter;
