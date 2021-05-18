import styled from 'styled-components';
import {FiAlignJustify, FiSearch, FiMic, FiGrid, FiVideo, FiUser, FiBell} from 'react-icons/fi';

/* =============== DIV ========== */

export const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    height: 60px;
    border-bottom: 2px solid #2F3336;

    background-color: #121317;
    
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
`;

export const LeftHeader = styled.div`
    display: flex;
    align-items: center;

    > img {
        height: 25px;
        width: 25px;
        margin-left: 15px;
    }

    >span {
        font-weight: 700;
        font-size: 18px;
        margin-left: 5px;
    }
`;

export const MiddleHeader = styled.div`
    display: flex;
    align-items: center;

    >button {
        padding: 6px 20px 6px 20px;
        background-color: #2F3336;

        @media(max-width: 1139px){
        display: none;
    }
    }
`;

export const RightHeader = styled.div`
    display: flex;
    align-items: center;

    >span {
        padding: 10px;
        border-radius: 50%;
        background-color: #2F3336;

        @media(max-width: 1139px){
        display: none;
        }
    }
`;


/* ============= Others =========== */
export const Input = styled.input`
    background-color: #BEC7C7;
    padding: 5px;
    width: 500px;
    font-size: 15px;
    outline: none;
    font-weight: 600;

    @media(max-width: 1139px){
        display: none;
    }
`;


/* =========== Icons ============ */
export const Icon4Lines = styled(FiAlignJustify)`
    width: 25px;
    height: 25px;
`;

export const IconSearch = styled(FiSearch)`
    width: 15px;
    height: 15px;

    @media(max-width: 1139px){
        display: none;
    }
`;

export const IconMic = styled(FiMic)`
    margin-left: 10px;
    width: 20px;
    height: 20px;

    @media(max-width: 1139px){
        display: none;
    }
`;

export const IconCamera = styled(FiVideo)`
    margin-right: 30px;
    width: 20px;
    height: 20px;
`;
export const IconBox = styled(FiGrid)`
    margin-right: 30px;
    width: 20px;
    height: 20px;
`;
export const IconBell = styled(FiBell)`
    margin-right: 30px;
    width: 20px;
    height: 20px;
`;
export const IconAvatar = styled(FiUser)`
    width: 20px;
    height: 20px;
`;
