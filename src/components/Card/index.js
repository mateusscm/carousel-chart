import React from "react";
import { ChartBar, ChartLine, ChartPie } from "../Charts";
import * as S from "./style";

function Card({ data, chartData }) {
  const handleTypeChart = (type) => {
    if (type === 'bar') {
      return <ChartBar chartInfo={chartData.slice(1, 50)} />
    } else if (type === 'column') {
      return <ChartLine chartInfo={chartData.slice(1, 50)} />
    } else {
      return <ChartPie chartInfo={chartData.slice(1, 50)} />
    }
  }

  return (
    <S.CardContainer>
      {/* <span>{data?.id}</span>
      <span>{data?.type}</span> */}
      <span className="badge">{data?.text}</span>
      {handleTypeChart(data?.type)}
    </S.CardContainer>
  );
}

export default Card;
