import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
    padding-bottom: 100px;

    background-color: #0a0a0a;
    
    overflow: scroll;

    > div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    @media(max-width: 1266px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media(max-width: 1121px){
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }

    @media(max-width: 859px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    @media(max-width: 652px){
        grid-template-columns: 1fr;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: -20px;

        height: 100%;
    }
    }
`;
