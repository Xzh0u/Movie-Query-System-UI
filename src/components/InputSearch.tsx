import { TextField } from "@material-ui/core";
import Autocomplete, { AutocompleteProps } from "@material-ui/lab/Autocomplete";
import React, { memo, useEffect, useState } from "react";

export type InputSearchProps<T> = {
  fetchOptions: () => Promise<T[]>;
  value: T;
  onChange: (v: T) => void;
} & Partial<AutocompleteProps<unknown, undefined, undefined, undefined>>;

const InputSearch: React.FC<InputSearchProps<string>> = ({
  fetchOptions,
  value,
  onChange,
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
      {...rest}
      value={value}
      onChange={onChange}
      options={options}
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
  );
};

export default memo(InputSearch);
