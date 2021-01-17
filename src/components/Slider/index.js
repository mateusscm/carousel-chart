import PropTypes from "prop-types";
import React from "react";
import { LeftArrow, RightArrow } from "../../assets/icons";
import Card from "../Card";
import * as S from "./style";
import chartData from "../../data/data";

function Slider({
  charts,
  current,
  setCurrent,
  prevSlide,
  nextSlide,
  defaultColor,
}) {
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
            {index === current && (
              <Card
                data={info}
                chartData={chartData}
                defaultColor={defaultColor}
              />
            )}
          </div>
        );
      })}
      <div className="container-dots">
        {charts.map((idx) => {
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

Slider.propTypes = {
  charts: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  defaultColor: PropTypes.objectOf(PropTypes.string).isRequired,
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default Slider;
