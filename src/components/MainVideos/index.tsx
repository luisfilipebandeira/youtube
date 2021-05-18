import React from 'react';
import CardVideo from '../CardVideo';

import { Container } from './styles';

const MainVideos: React.FC = () => {
  return (
      <Container>
          <div>
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
          </div>
      </Container>
  );
}

export default MainVideos;