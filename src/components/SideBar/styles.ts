import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 16%;
  height: 100vh;

  overflow: scroll;

  /* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px black;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 2px;
}

  @media(max-width: 1266){
    width: 18%;
  }

  @media(max-width: 1139px){
        width: 15%;
    }

  @media(max-width: 1121px){
    display: none;
  }
`;

export const Begin = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  border-bottom: 1px solid #202327; 
`;

export const Library = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  border-bottom: 1px solid #202327;
`;

export const Subscribers = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  border-bottom: 1px solid #202327;

  > p{
    padding: 0 0 5px 20px;
    font-weight: 700;
    color: #7A7A7A;
  }
`;

export const Link = styled.a`
    display: flex;
    padding: 10px 0 15px 20px;

    align-items: center;

    text-decoration: none;
    font-size: 15px;
    font-weight: 600;

    &:hover{
        background-color: #202327;
    }
`;

