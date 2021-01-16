import React from "react";
import { LeftArrow, RightArrow } from "../../assets/icons";
import Card from "../Card";
import * as S from "./style";
import chartData from '../../data.json';

function Slider({ charts, current, setCurrent, prevSlide, nextSlide, defaultColor }) {
  return (
    <S.SliderSection>
        <button className="left" onClick={prevSlide}>
          <LeftArrow />
        </button>
        <button className="right" onClick={nextSlide}>
          <RightArrow />
        </button>
      {charts.map((info, index) => {
        return (
          <div
            key={info?.id}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && <Card data={info} chartData={chartData} defaultColor={defaultColor} />}
          </div>
        );
      })}
      <div className="container-dots">
        {charts.map((idx) => {
          // console.log("idx", idx);
          // console.log("current", current);
          return (
            <S.Dots
              key={idx?.id}
              current={idx.id - 1 === current}
              onClick={() => setCurrent(idx.id - 1)}
            />
          );
        })}
      </div>
    </S.SliderSection>
  );
}

export default Slider;
