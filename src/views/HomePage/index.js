import React, { useState } from "react";
import Slider from "../../components/Slider";
import * as S from "./style";
import data from "../../data/fake-data";

function HomePage() {
  const [current, setCurrent] = useState(0);
  const length = data.length;
  const [selectedColor, setSelectedColor] = useState("blue");

  const [defaultColor, setDefaultColor] = useState({
    color1: "#003C96",
    color2: "#59254E",
    color3: "#B40E07",
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleChangeColor = (color) => {
    if (color === "green") {
      setDefaultColor({
        color1: "#08934B",
        color2: "#6D7A2A",
        color3: "#CC620A",
      });
      setSelectedColor("green");
    } else if (color === "yellow") {
      setDefaultColor({
        color1: "#E2BD03",
        color2: "#B26768",
        color3: "#8312CC",
      });
      setSelectedColor("yellow");
    } else {
      setDefaultColor({
        color1: "#003C96",
        color2: "#59254E",
        color3: "#B40E07",
      });
      setSelectedColor("blue");
    }
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <S.MainContainer>
      <S.ContainerSelectColor>
        <div
          role="button"
          className={selectedColor === 'blue' ? "btn selected" : "btn-azul"}
          onClick={() => handleChangeColor("blue")}
        >
          <span className="azul" />
          <span className="roxo1" />
          <span className="vermelho" />
        </div>
        <div
          role="button"
          className={selectedColor === 'green' ? "btn selected" : "btn-verde"}
          onClick={() => handleChangeColor("green")}
        >
          <span className="verde" />
          <span className="musgo" />
          <span className="laranja" />
        </div>
        <div
          role="button"
          className={selectedColor === 'yellow' ? "btn selected" : "btn-amarelo"}
          onClick={() => handleChangeColor("yellow")}
        >
          <span className="amarelo" />
          <span className="rosa" />
          <span className="roxo" />
        </div>
      </S.ContainerSelectColor>
      <Slider
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        charts={data}
        current={current}
        setCurrent={setCurrent}
        defaultColor={defaultColor}
      />
    </S.MainContainer>
  );
}

export default HomePage;
