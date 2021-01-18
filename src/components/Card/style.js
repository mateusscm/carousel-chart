import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 400px;
  border-radius: 20px;
  
  /* overflow: hidden; */

  .badge {
    position: absolute;
    display: inline-block;
    right: -10px;
    top: 0;
    margin: 5px 0px;
    border-radius: 4px;
    text-transform: capitalize;
    color: #fff;
    background-color: #7e8aad;
    padding: 5px 10px;
    font-size: 0.9rem;
    font-weight: bold;

    &::after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background-color: #999;
      position: absolute;
      right: 4px;
      bottom: -3px;
      z-index: -1;
      transform: rotate(45deg);
    }
  }
`;
