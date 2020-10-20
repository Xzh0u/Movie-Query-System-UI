/* eslint-disable no-debugger */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { CardMedia, Card } from '@material-ui/core';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { MovieType } from "../context/MovieProvider";
const StyledCard = styled(Card)`
    padding: 1em;
    border: 1px dashed transparent;
    background: linear-gradient(white,white) padding-box,
    repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);
    font-size: 0.85rem;
`;
export interface InfoCardProps {
  // moviePic: string;
  information: any;
}

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #f7b500;
`;

const InfoCard: React.FC<InfoCardProps> = ({information}) => {

  useEffect(() => {
    console.log(information)
    console.log("information")
  }, [information]);

  return (
      <StyledCard
        raised
        variant="outlined"
        className="w-100 h-36 ml-8 mb-6 mb-2 flex">
        <CardMedia
          className="pr-10 w-30"
          component="img"
          alt="movie-picture"
          // image="https://i.loli.net/2020/09/23/4dWZ5sMbOrXxzGB.jpg"
        />
      <div className="font-sm w-80 text-gray-600 ">
          <p className="font-bold">{information[9]}</p>
          <p>导演：{information[2]}</p>
          <p className="truncate ...">主演：{information[6].map((x: any) => <span className="mx-1">{x}</span>)}</p>
          <p>制片国家/地区: {information[0]}</p>
          {/* <p>语言: {information[4]}</p> */}
          <p>上映日期: {information[1]}</p>
          <p>类型：{information[10]}</p>
      </div>
        <div className="flex relative top-0">
          <StyledFontAwesomeIcon className="ml-16" icon={faStar} color="yellow" size="lg" />
        <div className="pl-2 text-yellow-400">{information[8]}</div>
      </div>
      </StyledCard>
  );
};

export default memo(InfoCard);
