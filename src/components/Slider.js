import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "../images/Slider1.png";
import "../App.css";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 3px;
  color: #ffffff;
  margin-bottom: 6px;
  text-shadow: 0px 0px 4px #000000;
  text-transform: uppercase;
  opacity: 1;
  font-family: "Roboto", sans-serif;
  @media (max-width: 600px) {
    width: 350px;
  }
`;
const StyledH1 = styled.h1`
  font-size: 52px;
  line-height: 58px;
  width: 686px;
  max-width: 100%;
  min-height: 110px;
  letter-spacing: -1px;
  color: #ffffff;
  text-shadow: 0px 0px 25px #00000080;
  opacity: 1;
  margin-bottom: 30px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  @media (max-width: 991px) {
    font-size: 45px;
    line-height: 51px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 35px;
    width: 350px;
  }
`;
const StyledButton = styled.button`
  color: #fff;
  //width: 228px;
  //min-height: 60px;
  width: 184px;
  height: 60px;
  background: #d4b254 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 10px #00000033;
  border-radius: 30px;
  opacity: 1;
  border: 0px;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 3px;
  line-height: 20px;
  font-family: "Roboto", sans-serif;
  @media (max-width: 550px) {
    width: 169px;
    height: 45px;
    font-size: 12px;
  }
`;
const StyledImg = styled.img`
  display: block;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 91vh;
    width: auto;
    overflow: hidden;
  }
`;

const Slider = () => {
  return (
    <Carousel
      //autoPlay={false}
      interval={5000}
      controls={false}
      indicators={true}
      pause="hover"
    >
      <Carousel.Item>
        <StyledImg src={Slider1} alt="Fist slide" />
        <Carousel.Caption>
          <StyledParagraph>
            Design and order your new kitchen online today
          </StyledParagraph>
          <StyledH1>Bespoke & made to measure handmade kitchen design</StyledH1>
          <StyledButton>Order Now</StyledButton>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StyledImg src={Slider1} alt="Second slide" />
        <Carousel.Caption>
          <StyledParagraph>
            Design and order your new kitchen online today
          </StyledParagraph>
          <StyledH1>Bespoke & made to measure handmade kitchen design</StyledH1>
          <StyledButton>Order Now</StyledButton>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StyledImg src={Slider1} alt="Third slide" />
        <Carousel.Caption>
          <StyledParagraph>
            Design and order your new kitchen online today
          </StyledParagraph>
          <StyledH1>Bespoke & made to measure handmade kitchen design</StyledH1>
          <StyledButton>Order Now</StyledButton>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
