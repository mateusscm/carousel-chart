import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const ContainerSelectColor = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px;
  width: 100%;
  padding-right: 45px;

  @media screen and (max-width: 600px) {
    padding-right: 0px;
  }

    .btn.selected > span {
      transform: scale(1.10);
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
      opacity: 1;
    }
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
      box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
      opacity: 0.7;
    }


    .azul {
      background-color: #003c96;
      z-index: 1;
    }
    .roxo1 {
      background-color: #59254e;
      position: absolute;
      left: 30px;
      z-index: 2;
    }
    .vermelho {
      background-color: #b40e07;
      position: absolute;
      left: 60px;
      z-index: 3;
    }

    .verde {
      background-color: #08934b;
      z-index: 1;
    }
    .musgo {
      background-color: #6d7a2a;
      position: absolute;
      left: 30px;
      z-index: 2;
    }
    .laranja {
      background-color: #cc620a;
      position: absolute;
      left: 60px;
      z-index: 3;
    }

    .amarelo {
      background-color: #e2bd03;
      z-index: 1;
    }
    .rosa {
      background-color: #b26768;
      position: absolute;
      left: 30px;
      z-index: 2;
    }
    .roxo {
      background-color: #8312cc;
      position: absolute;
      left: 60px;
      z-index: 3;
    }
  }
`;
