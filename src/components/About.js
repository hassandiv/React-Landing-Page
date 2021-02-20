import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImage from '../images/AboutImage.png'
import styled from 'styled-components';

const StyledFlex = styled.div`
  padding-left: 55px;
  max-width: 100%;
  @media(max-width: 1250px) {
    margin: 30px 0px;
    padding-left: 0px;
  }
  @media(max-width: 991px) {
    margin: 60px 0px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    padding: 0px 15px;
  }
  // @media(max-width: 550px){
  //   height: 600px;
  // }
`;
const StyledParagraph = styled.p`
  line-height: 18px;
  font-size: 13px;
  letter-spacing: 3px;
  color: #D4B254;
  margin-bottom: 15px;
  text-transform: uppercase;
  opacity: 1;
  font-family: 'Roboto', sans-serif;
`;
const StyledParagraphText = styled.p`
  min-height: 84px;
  max-width: 589px;
  line-height: 28px;
  font-size: 15px;
  letter-spacing: 0px;
  color: #777777;
  opacity: 1;
  font-family: 'Roboto', sans-serif;
`;
const StyledH2 = styled.h2`
  line-height: 52px;
  font-size: 42px;
  width: 485px;
  max-width: 100%;
  min-height: 94px;
  letter-spacing: 0px;
  color: #222222;
  opacity: 1;
  margin-bottom: 33px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  @media(max-width: 991px) {
    margin-right: auto;
    margin-left: auto;
  }
  @media(max-width: 550px) {
    line-height: 45px;
    font-size: 35px;
    min-height: 87px;
  }
`;
const StyledButton = styled.button`
  color: #fff;
  // width: 211px;
  // min-height: 60px;
  width: 184px;
  height: 60px;
  background: #D4B254 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 10px #00000033;
  border-radius: 30px;
  opacity: 1;
  border: 0px;
  text-transform: uppercase;
  margin-top: 27px;
  font-size: 15px;
  letter-spacing: 3px;
  line-height: 20px;
  @media(max-width: 550px) {
    width: 169px;
    height: 45px;
    font-size: 12px;
  }
`;

const About = () => {

    return (  
        <Container fluid>
            <Row>
              <Col md={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}
                className="
                  d-flex
                  justify-content-center
                  align-items-start
                  flex-column
                ">
                  <StyledFlex>
                    <StyledParagraph>Quality Craftmanship from build to delivery</StyledParagraph>
                    <StyledH2>Discover the beauty of a handmade kitchen</StyledH2>
                    <StyledParagraphText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.</StyledParagraphText>
                    <StyledButton>About us</StyledButton>
                  </StyledFlex>
              </Col>
              <Col md={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} >
                <img
                  className="d-block w-100"
                  src={AboutImage}
                  alt="About us"
                />
              </Col>
            </Row>
        </Container>
    )
}
 
export default About;