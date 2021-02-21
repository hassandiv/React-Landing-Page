import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import "../App.css";

const StyledRoot = styled.div`
  position: relative;
  width: 100%;
  //min-height: 600px;
  min-height: 550px;
  background: #eeeeee 0% 0% no-repeat padding-box;
  opacity: 1;
  @media (max-width: 991px) {
    min-height: 600px;
  }
`;
const StyledWrapper = styled.div`
  width: 600px;
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`;
const StyledParagraph = styled.p`
  min-height: 18px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 3px;
  color: #d4b254;
  margin-bottom: 17px;
  text-transform: uppercase;
  opacity: 1;
  font-family: "Roboto", sans-serif;
`;
const StyledParagraphText = styled.p`
  min-height: 96px;
  max-width: 600px;
  line-height: 32px;
  font-size: 18px;
  letter-spacing: 0px;
  color: #777777;
  opacity: 1;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  @media (max-width: 600px) {
    line-height: 29px;
    font-size: 15px;
  }
`;
const StyledH2 = styled.h2`
  font-size: 32px;
  line-height: 42px;
  max-width: 600px;
  min-height: 84px;
  letter-spacing: 0px;
  color: #222222;
  opacity: 1;
  margin-bottom: 30px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  @media (max-width: 550px) {
    font-size: 25px;
    line-height: 35px;
    margin-bottom: 15px;
  }
`;
const StyledSpan = styled.span`
  width: 90px;
  height: 20px;
  font-size: 15px;
  line-height: 28px;
  color: #777777;
  opacity: 1;
  font-family: "Roboto", sans-serif;
`;
const StyledButton = styled.button`
  color: #fff;
  width: 419px;
  max-width: 100%;
  height: 60px;
  background: #d4b254 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 10px #00000033;
  border-radius: 30px;
  opacity: 1;
  border: 0px;
  text-transform: uppercase;
  margin-top: 36px;
  font-size: 15px;
  letter-spacing: 3px;
  line-height: 20px;
  font-family: "Roboto", sans-serif;
  @media (max-width: 550px) {
    width: 400px;
    height: 50px;
    font-size: 12px;
  }
  @media (max-width: 951px) {
    margin-top: 80px;
  }
`;

const Testimonials = () => {
  return (
    <StyledRoot>
      <StyledWrapper>
        <StyledParagraph>What Our Customers Say</StyledParagraph>
        <div className="testimonials">
          <Carousel
            //autoPlay={false}
            interval={5000}
            controls={true}
            indicators={true}
            pause="hover"
          >
            <Carousel.Item>
              <StyledH2>
                Over 35 years experience designing handmade kitchens
              </StyledH2>
              <StyledParagraphText>
                Since my first contact I have received a very high level of
                customer service and advice with my kitchen plans. Ben responded
                very quickly to all of my emails and delivery of the kitchen was
                as planned.
              </StyledParagraphText>
              <StyledSpan>Jane, Dundee</StyledSpan>
            </Carousel.Item>
            <Carousel.Item>
              <StyledH2>
                Over 35 years experience designing handmade kitchens
              </StyledH2>
              <StyledParagraphText>
                Since my first contact I have received a very high level of
                customer service and advice with my kitchen plans. Ben responded
                very quickly to all of my emails and delivery of the kitchen was
                as planned.
              </StyledParagraphText>
              <StyledSpan>Jane, Dundee</StyledSpan>
            </Carousel.Item>
            <Carousel.Item>
              <StyledH2>
                Over 35 years experience designing handmade kitchens
              </StyledH2>
              <StyledParagraphText>
                Since my first contact I have received a very high level of
                customer service and advice with my kitchen plans. Ben responded
                very quickly to all of my emails and delivery of the kitchen was
                as planned.
              </StyledParagraphText>
              <StyledSpan>Jane, Dundee</StyledSpan>
            </Carousel.Item>
          </Carousel>
        </div>
        <StyledButton>Frequently Asked Questions</StyledButton>
      </StyledWrapper>
    </StyledRoot>
  );
};

export default Testimonials;
