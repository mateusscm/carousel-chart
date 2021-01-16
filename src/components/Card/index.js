import React from "react";
import { ChartBar, ChartLine, ChartPie } from "../Charts";
import * as S from "./style";

function Card({ data, chartData, defaultColor }) {
  const handleTypeChart = (type) => {
    if (type === 'bar') {
      return <ChartBar chartInfo={chartData} defaultColor={defaultColor} />
    } else if (type === 'column') {
      return <ChartLine chartInfo={chartData} defaultColor={defaultColor} />
    } else {
      return <ChartPie chartInfo={chartData} defaultColor={defaultColor} />
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
