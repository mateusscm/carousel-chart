import React from "react";
import Card from "../Card";
import * as S from "./style";

function Slider({ charts, current, setCurrent }) {
  return (
    <S.SliderSection>
      {charts.map((info, index) => {
        return (
          <div
            key={info?.id}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && <Card data={info} />}
          </div>
        );
      })}
      <div className="container-dots">
        {charts.map((idx) => {
          console.log("idx", idx);
          console.log("current", current);
          return (
            <S.Dots
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
