import Autocomplete, { AutocompleteProps } from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from "react";

export type InputSearchProps<T> = {
  fetchOptions: () => Promise<T[]>;
  value: T;
  onChange: (v: T) => void;
} & AutocompleteProps<unknown, undefined, undefined, undefined>;

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
    />
  );
};

export default InputSearch;
