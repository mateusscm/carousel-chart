import React, { useState } from "react";
import Slider from "../../components/Slider";
import * as S from "./style";
import data from "../../fake-data";

// import { Container } from './styles';

function HomePage() {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <S.MainContainer>
      <div style={{ marginBottom: 20 }}>
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
      <Slider charts={data} current={current} setCurrent={setCurrent} />
    </S.MainContainer>
  );
}

export default HomePage;
