import React from 'react';

import { 
    Container,
    LeftHeader,
    Icon4Lines,
    MiddleHeader,
    IconSearch,
    Input,
    IconMic,
    RightHeader,
    IconCamera,
    IconBox,
    IconBell,
    IconAvatar,
} from './styles';

import imgLogo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
        <LeftHeader>
            <Icon4Lines />
            <img src={imgLogo} alt="YouTube" /><span>YouTube</span>
        </LeftHeader>

        <MiddleHeader>
            <Input type="text" placeholder="Pesquisar" />
            <button>
             <IconSearch />
            </button>
            <IconMic />
        </MiddleHeader>
        
        <RightHeader>
            <IconCamera />
            <IconBox />
            <IconBell />
            <span>
                <IconAvatar />
            </span>
        </RightHeader>
    </Container>
 );
}

export default Header;