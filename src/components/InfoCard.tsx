import React, { memo } from 'react';
import styled from 'styled-components';
import { CardMedia, Card } from '@material-ui/core';

const StyledCard = styled(Card)`
    padding: 1em;
    border: 1px dashed transparent;
    background: linear-gradient(white,white) padding-box,
    repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);
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
        className="w-111 h-36 ml-8 mb-6 mb-2 static">
        <CardMedia
          component="img"
          alt="movie-picture"
          // image="https://i.loli.net/2020/09/23/4dWZ5sMbOrXxzGB.jpg"
        />
      </StyledCard>
  );
};

export default memo(InfoCard);
