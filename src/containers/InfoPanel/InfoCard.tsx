/* eslint-disable no-debugger */
/* eslint-disable array-callback-return */
import React, { memo } from "react";
import styled from "styled-components";
import { CardMedia, Card } from "@material-ui/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MovieType } from "../../context/MovieProvider";
import { getImgUrl } from "utils/img";
export const StyledCard = styled(Card)`
  padding: 1em;
  border: 1px dashed transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(
      -45deg,
      #ccc 0,
      #ccc 0.25em,
      white 0,
      white 0.75em
    );
  font-size: 0.85rem;
`;
export interface InfoCardProps {
  // moviePic: string;
  movie: MovieType;
  onClick?: () => void;
}

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #f7b500;
`;

const InfoCard: React.FC<InfoCardProps> = ({
  movie: { country, director, majors, date, type, title, score, image_url },
  onClick,
}) => {
  return (
    <StyledCard
      raised
      variant="outlined"
      className="w-111 flex items-center"
      onClick={onClick}
    >
      <CardMedia
        className="w-32 h-32 m-2 rounded-md"
        component="img"
        alt="movie-picture"
        image={getImgUrl(image_url)}
      />
      <div className="ml-2 font-sm w-80 text-gray-600">
        <div className="font-bold hover:text-blue-500">{title}</div>
        <p>
          <label className="font-medium text-xs">导演:</label>{" "}
          {director.map((x: any) => (
            <span className="mx-1">{x}</span>
          ))}
        </p>

        <p className="truncate ...">
          <label className="font-medium text-xs">主演: </label>
          {majors.map((x: any) => (
            <span className="mx-1">{x}</span>
          ))}
        </p>
        <p>
          <label className="font-medium text-xs">制片国家/地区:</label>{" "}
          {country.map((x: any) => (
            <span className="mx-1">{x}</span>
          ))}
        </p>
        <p>
          <label className="font-medium text-xs">上映日期:</label> {date}
        </p>
        <p>
          <label className="font-medium text-xs">类型:</label>{" "}
          {type.map((x: any) => (
            <span className="mx-1">{x}</span>
          ))}
        </p>
      </div>
      <div className="flex relative top-0 mb-28 ml-6">
        <StyledFontAwesomeIcon
          className="ml-16"
          icon={faStar}
          color="yellow"
          size="lg"
        />
        <div className="pl-2 text-yellow-400">{score}</div>
      </div>
    </StyledCard>
  );
};

export default memo(InfoCard);
