import { TextField } from "@material-ui/core";
import Autocomplete, { AutocompleteProps } from "@material-ui/lab/Autocomplete";
import React, { memo, useEffect, useState } from "react";

export type InputSearchProps<T> = {
  fetchOptions: () => Promise<T[]>;
  value: T;
  label?: string;
  onChange: AutocompleteProps<string, undefined, undefined, boolean>['onChange'];
} & Partial<AutocompleteProps<string, undefined, undefined, boolean>>;

const InputSearch: React.FC<InputSearchProps<string>> = ({
  fetchOptions,
  value,
  onChange,
  label = "搜索",
  ...rest
}) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const resp = await fetchOptions();
      setOptions(resp);
    })();
  }, [fetchOptions]);

  return (
    <Autocomplete
      value={value}
      onChange={onChange}
      options={options}
      renderInput={(params) => (
        <TextField
            {...params}
            label={label}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
      )}
      {...rest}
    />
  );
};

export default memo(InputSearch);
