import styled from 'styled-components';

export const Container = styled.div`
    max-width: 250px;
    align-items: center;
    justify-content: center;

    @media(max-width: 1266px){
        width: 300px;
    }
`;

export const DivImage = styled.div`
    display: flex;
    height: 140px;
    width: 250px;
    align-items: center;
    justify-content: center;

    background-color: #2F3336;

    @media(max-width: 1266px){
        width: 300px;
        height: 140px;
    }

    @media(max-width: 953px){
        width: 270px;
        height: 120px;
    }

    @media(max-width: 859px){
        width: 300px;
        height: 140px;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 10px;
`;

export const UserImage = styled.div`
    display: flex;
    height: 50px;
    margin-right: 10px;

    > div{
        background-color: #7A7A7A;
        border-radius: 50%;
        padding: 10px;
    }
`;

export const UserInfo = styled.div`
    > p{
        font-size: 14px;
        color: #7A7A7A;
        font-weight: 500;

        &:nth-child(1){
            color: #fff;
            font-weight: 600;
            font-size: 16px;
        }
    }
`;

