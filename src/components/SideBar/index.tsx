import React from 'react';

import { 
    Container,
    Begin,
    Library,
    Subscribers,
    Link
 } from './styles';

import {
    FiHome, 
    FiNavigation, 
    FiPlayCircle,
    FiFolder,
    FiCornerDownLeft,
    FiClock,
    FiUser,
} from 'react-icons/fi';

import {BiLike} from 'react-icons/bi';

const SideBar: React.FC = () => {
  return (
    <Container>
        <Begin>
            <Link>
                <FiHome size={20} style={{marginRight:'20px'}} /> 
                Inicio
            </Link>
            <Link>
                <FiNavigation size={20} style={{marginRight:'20px'}} /> 
                Explorar
            </Link>
            <Link>
                <FiPlayCircle size={20} style={{marginRight:'20px'}} /> 
                Inscrições
            </Link>
        </Begin>

        <Library>
            <Link>
                <FiFolder size={20} style={{marginRight:'20px'}} /> 
                Inicio
            </Link>
            <Link>
                <FiCornerDownLeft size={20} style={{marginRight:'20px'}} /> 
                Histórico
            </Link>
            <Link>
                <FiPlayCircle size={20} style={{marginRight:'20px'}} /> 
                Seus Videos
            </Link>
            <Link>
                <FiClock size={20} style={{marginRight:'20px'}} /> 
                Assistir Mais Tarde
            </Link>
            <Link>
                <BiLike size={20} style={{marginRight:'20px'}} />  
                Videos Marcados c...
            </Link>
        </Library>

        <Subscribers>
            <p>Inscrições</p>
        <Link>
                <FiUser size={20} style={{marginRight:'20px'}} />  
                Primo Rico
            </Link>
            <Link>
                <FiUser size={20} style={{marginRight:'20px'}} />  
                RocketSeat
                </Link>
            <Link>
                <FiUser size={20} style={{marginRight:'20px'}} />  
                Ressaca F1
            </Link>
            <Link>
                <FiUser size={20} style={{marginRight:'20px'}} />  
                Manual do Mundo
            </Link>
            <Link>
                <FiUser size={20} style={{marginRight:'20px'}} />  
                Jovem Nerd
            </Link>
            <Link>
                <FiUser size={20} style={{marginRight:'20px'}} />  
                Bruno Perini
            </Link>
            <Link>
                <FiUser size={20} style={{marginRight:'20px'}} />  
                Flow Podcast
            </Link>
            <Link>
                <FiUser size={20} style={{marginRight:'20px'}} />  
                PodPah
            </Link>
        </Subscribers>
    </Container>
  );
}

export default SideBar;