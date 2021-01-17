import React, { useState } from "react";
import Slider from "../../components/Slider";
import * as S from "./style";
import data from "../../fake-data";

function HomePage() {
  const [current, setCurrent] = useState(0);
  const length = data.length; 
  
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
    if (color === 'green') {
      setDefaultColor({
        color1: '#08934B',
        color2: '#6D7A2A',
        color3: '#CC620A',
      });
    } else if (color === 'yellow') {
      setDefaultColor({
        color1: '#E2BD03',
        color2: '#B26768',
        color3: '#8312CC',
      });
    } else {
      setDefaultColor({
        color1: "#003C96",
        color2: "#59254E",
        color3: "#B40E07",
      });
    }
  }

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <S.MainContainer>
      <S.ContainerSelectColor>
        <div role="button" className="btn-azul" onClick={() => handleChangeColor('blue')}>
          <span className="azul" />
          <span className="roxo1" />
          <span className="vermelho" />
        </div>
        <div role="button" className="btn-verde" onClick={() => handleChangeColor('green')}>
          <span className="verde" />
          <span className="musgo" />
          <span className="laranja" />
        </div>
        <div role="button" className="btn-amarelo" onClick={() => handleChangeColor('yellow')}>
          <span className="amarelo" />
          <span className="rosa" />
          <span className="roxo" />
        </div>
      </S.ContainerSelectColor>
      <Slider prevSlide={prevSlide} nextSlide={nextSlide} charts={data} current={current} setCurrent={setCurrent} defaultColor={defaultColor} />
    </S.MainContainer>
  );
}

export default HomePage;
