import React, { memo } from 'react';
import styled from 'styled-components';
import { CardMedia, Card } from '@material-ui/core';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledCard = styled(Card)`
    padding: 1em;
    border: 1px dashed transparent;
    background: linear-gradient(white,white) padding-box,
    repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);
    font-size: 0.85rem;
`;
export interface InfoCardProps {
  moviePic: string;
  information: any;
}

const InfoCard: React.FC = () => {
  return (
      <StyledCard
        raised
        variant="outlined"
        className="w-100 h-36 ml-8 mb-6 mb-2 flex">
        <CardMedia
          className="pr-10 w-30"
          component="img"
          alt="movie-picture"
          image="https://i.loli.net/2020/09/23/4dWZ5sMbOrXxzGB.jpg"
        />
      <div className="font-sm w-88">
        <p >导演：弗兰克·德拉邦特</p>
        <p>主演：蒂姆·罗宾斯 / 摩根·弗里曼 / 鲍勃·冈顿 / …</p>
        <p>制片国家/地区: 美国</p>
        <p>语言: 英语</p>
        <p>上映日期: 1994-09-10</p>
        <p>类型：剧情 / 犯罪 / 名著改编</p>
      </div>
        <div className="flex relative top-0">
          <FontAwesomeIcon className="ml-16" icon={faStar} color="yellow" size="lg" />
        <div className="pl-2 text-yellow-400">9.7</div>
      </div>
      </StyledCard>
  );
};

export default memo(InfoCard);
