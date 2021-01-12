import React from "react";
import * as S from "./style";

// import { Container } from './styles';

function Card({ data }) {
  return (
    <S.CardContainer>
      <span>{data?.id}</span>
      <span>{data?.type}</span>
      <span className="badge">{data?.text}</span>
    </S.CardContainer>
  );
}

export default Card;
