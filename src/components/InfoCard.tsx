import React, { memo } from 'react';
import styled from 'styled-components';
import { CardMedia, Card } from '@material-ui/core';

const StyledCard = styled(Card)`

`;


const InfoCard: React.FC = () => {
  return (
      <StyledCard
        tabIndex={0}
        raised
        variant="outlined"
        className="w-80 h-36 ml-10 mb-2 static focus:outline-none focus:shadow-outline bg-gray-100">
        <CardMedia
          component="img"
        //   alt="ppt"
        //   image={url}
        //   onClick={}
        />
      </StyledCard>
  );
};

export default memo(InfoCard);
