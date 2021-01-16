import styled, {css} from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const ContainerSelectColor = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px;
  width: 100%;
  padding-right: 45px;

  & > div {
    display: flex;
    position: relative;
    width: 7rem;
    margin-left: 10px;
    cursor: pointer;
    
    & span {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);

    }


    
    .azul {
      background-color: #003C96;
      z-index: 1;
    }
    .roxo1 {
      background-color: #59254E;
      position: absolute;
      left: 30px;
      z-index: 2;
    }
    .vermelho {
      background-color: #B40E07;
      position: absolute;
      left: 60px;
      z-index: 3;
    }

    .verde {
      background-color: #08934B;
      z-index: 1;
    }
    .musgo {
      background-color: #6D7A2A;
      position: absolute;
      left: 30px;
      z-index: 2;
    }
    .laranja {
      background-color: #CC620A;
      position: absolute;
      left: 60px;
      z-index: 3;
    }

    .amarelo {
      background-color: #E2BD03;
      z-index: 1;
    }
    .rosa {
      background-color: #B26768;
      position: absolute;
      left: 30px;
      z-index: 2;
    }
    .roxo {
      background-color: #8312CC;
      position: absolute;
      left: 60px;
      z-index: 3;
    }


    
  }
`;
