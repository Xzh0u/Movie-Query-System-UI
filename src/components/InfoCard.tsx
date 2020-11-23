/* eslint-disable no-debugger */
/* eslint-disable array-callback-return */
import React, { memo, useContext, useMemo } from "react";
import styled from "styled-components";
import { CardMedia, Card } from "@material-ui/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { movieContext, MovieType } from "../context/MovieProvider";
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
  movie: { country, director, majors, date, type, image_url, title, score },
  onClick,
}) => {
  const { imgs } = useContext(movieContext);
  const imageUrls = useMemo(() => {
    let urls = "";
    imgs.map((images) => {
      if (images.pic_names === image_url.split("/").slice(-1)[0]) {
        urls = images.url;
      }
    });
    return urls;
  }, [imgs, image_url]);

  return (
    <StyledCard
      raised
      variant="outlined"
      className="w-100 h-36 flex items-center"
      onClick={onClick}
    >
      <CardMedia
        className="w-32 h-32 m-4"
        component="img"
        alt="movie-picture"
        image={imageUrls}
      />
      <div className="font-sm w-80 text-gray-600">
        <p className="font-bold">{title}</p>
        <p>导演：{director}</p>
        <p className="truncate ...">
          主演：
          {majors.map((x: any) => (
            <span className="mx-1">{x}</span>
          ))}
        </p>
        <p>制片国家/地区: {country}</p>
        {/* <p>语言: {information[4]}</p> */}
        <p>上映日期: {date}</p>
        <p>类型：{type}</p>
      </div>
      <div className="flex relative top-0">
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
