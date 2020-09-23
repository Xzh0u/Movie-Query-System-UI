import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortNumericUp, faFilter, faCheckCircle, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Divider, TextField, IconButton, MenuItem, Tooltip } from '@material-ui/core';
import styled from 'styled-components'


const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #bfbfbf;
`;

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const SideBar: React.FC = () => {
    const [currency, setCurrency] = React.useState('EUR');
    const handleChange = (event:any) => {
      setCurrency(event.target.value);
    };

    return (
      <div className="flex w-76 h-full z-10 left-0 fixed">
        <div className="mb-64 my-20 mx-4 w-full h-full overflow-y-auto">
          <div className="ml-14 mt-6 text-gray-500 font-lg font-mono font-semibold">
            <StyledFontAwesomeIcon className="mr-3" icon={faFilter} color="gray" size="lg" />
            Filter
          </div>
          <Divider className="mt-4 mb-4"/>
          <TextField
            className="ml-14 mt-3 w-44"
            id="standard-select-currency"
            select
            label="Select the item to sort"
            value={currency}
            onChange={handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>  
          <Tooltip title="sort the item" placement="bottom">
            <IconButton className="my-7 ml-4 focus:outline-none" size="small">
              <FontAwesomeIcon className="m-1" icon={faSortNumericUp} size="lg" />
            </IconButton>
          </Tooltip>
          <TextField
            className="ml-14 mt-3 w-44"
            id="standard-select-currency"
            select
            label="Select the tag to display"
            value={currency}
            onChange={handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
          className="ml-14 w-44 mt-2"
          label="Enter tag value"
          id="mui-theme-provider-outlined-input"
          size="small"
          />
          <Tooltip title="comfirm" placement="bottom">
          <IconButton className="mt-4 ml-4 focus:outline-none" size="small">
            <FontAwesomeIcon className="m-1" icon={faCheckCircle} color="gray" size="lg" />
          </IconButton>
          </Tooltip>

          <div className="ml-14 mt-14 text-gray-500 font-lg font-mono font-semibold">
            <StyledFontAwesomeIcon className="mr-3" icon={faThumbsUp} color="gray" size="lg" />
            Recommend
          </div>
          <Divider className="mt-4 mb-4"/> 
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
