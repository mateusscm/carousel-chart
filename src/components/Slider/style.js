import styled, { css } from "styled-components";

export const SliderSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px 45px;
  width: 100%;

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
    transform: translateX(0px);
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
  }

  .container-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  button {
    border: none;
    display: flex;
    align-items: center;
    width: 30px;
    justify-content: center;
    height: 30px;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    background-color: blue;

    &:hover {
      background-color: darkblue;
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    }

    &:active {
      background-color: darkblue;
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    }

    & svg > path {
      fill: white;
    }
  }

  .right {
    position: absolute;
    right: -13px;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;

    & > svg {
      padding-left: 3px;
    }
  }

  .left {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;

    & > svg {
      padding-right: 3px;
    }
  }
`;

export const Dots = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0px 5px;
  transition: transform 0.2s ease-in;
  background-color: #666;
  cursor: pointer;
  
  ${({ current }) =>
    current &&
    css`
      background-color: blue;
      border: 1px solid blue;
      transform: scale(1.2);
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    `}
`;
