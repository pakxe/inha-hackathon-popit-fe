import React from "react";
import Layout from "../Layout";
import styled from "styled-components";
import Template from "./components/Template";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "20px",
};

const StyledSlider = styled(Slider)`
  &,
  .slick-track .slick-slide,
  .slick-list,
  .slick-slide > div {
    height: 100%;
  }
  .slick-slide > div {
    cursor: pointer;
    margin: auto;
  }
  .slick-dots {
    .slick-active {
      button::before {
        color: #ffc74a;
      }
    }
    button::before {
      color: #d7d7d7;
    }
    bottom: 140px;
  }
`;

const Tutorial = () => {
  return (
    <>
      <Layout white>
        <StyledSlider {...settings}>
          <Template
            image="img/A1.png"
            title="READ"
            content={
              <>
                공부한 것을 한 줄로 정리하고,
                <br />
                타인이 공부한 한 줄 키워드들도
                <br />
                자유롭게 읽어보세요
              </>
            }
          />

          <Template
            image="./img/A2.png"
            src="./img/A2.png"
            title="KEEP"
            content={
              <>
                나의 한 줄 팝들과
                <br />
                다른 사람들의 한 줄 팝들을
                <br />
                나만의 보관함에 보관해보세요
              </>
            }
          />

          <Template
            image="./img/A3.png"
            title="CONNECT"
            content={
              <>
                팔로우,팔로잉을 통해
                <br />
                사람들과 교류해보세요
                <br />
              </>
            }
          />
        </StyledSlider>
      </Layout>
    </>
  );
};

export default Tutorial;
