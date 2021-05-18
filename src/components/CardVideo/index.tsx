import React from 'react';

import { 
    Container,
    DivImage,
    Info,
    UserImage,
    UserInfo,
} from './styles';

import { FiPlay, FiUsers } from "react-icons/fi";

const CardVideo: React.FC = () => {
  return (
    <Container>
        <DivImage>
            <FiPlay size={25} />
        </DivImage>
        <Info>
            <UserImage>
                <div>
                    <FiUsers size={25} />
                </div>
            </UserImage>
            <UserInfo>
                <p>How to create an interface with react</p>
                <p>Luis Filipe2</p>
                <p>3 mil vizualizações</p>
                <p>2 semanas</p>
            </UserInfo>
        </Info>
    </Container>
  );
}

export default CardVideo;