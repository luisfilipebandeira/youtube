import React from 'react';

import Header from '../Header';

import SideBar from '../SideBar';
import MainVideos from '../MainVideos';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
      <Container>
          <Header />

          <Wrapper>
            <SideBar />
            <MainVideos />
          </Wrapper>
      </Container>
  );
}

export default Layout;