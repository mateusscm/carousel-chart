import styled, { css } from "styled-components";

export const SliderSection = styled.section`
  display: flex;
  flex-direction: column;

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  .container-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;

export const Dots = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0px 5px;
  border: 1px solid #666;
  transition: transform 0.2s ease-in;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  ${({ current }) =>
    current &&
    css`
      background-color: blue;
      border: 1px solid blue;
      transform: scale(1.2);
    `}
`;
