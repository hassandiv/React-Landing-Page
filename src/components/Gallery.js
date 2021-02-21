import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import G1L from "../images/G1L.png";
import G2L from "../images/G2L.png";
import G3L from "../images/G3L.png";
import G4L from "../images/G4L.png";
import styled from "styled-components";

const StyledRoot = styled.div`
    width: 1300px;
    min-height: 600px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 991px) {
      width: 660px;
      margin: 50px auto;
    }
    @media(max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      width: 100%;
      margin: 50px auto 60px auto;
    }
    @media (max-width: 1315px) and (min-width: 350px) {
      padding: 0px 20px;
    }
`;
const StyledH2 = styled.h2`
    font-size: 32px;
    line-height: 42px;
    height: 32px;
    letter-spacing: 0px;
    color: #222222;
    text-align: center;
    opacity: 1;
    margin-bottom: 38px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
`;
const StyledButton = styled.button`
    color: #fff;
    width: 184px;
    height: 60px;
    background: #d4b254 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 10px #00000033;
    border-radius: 30px;
    opacity: 1;
    border: 0px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
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
const StyledFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
const StyledImg = styled.img`
    width: 310px;
    height: auto;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 100%;
    }
`;

const Gallery = () => {

    return (
        <StyledRoot>
            <Container fluid>
                <Row>
                    <Col>
                        <StyledH2>Customer Gallery</StyledH2>
                    </Col>
                </Row>
                <StyledFlex>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={3} className="IpadPdd">
                            <StyledImg src={G1L} alt="Kitchen1" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} className="IpadPdd">
                            <StyledImg src={G2L} alt="Kitchen2" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} className="IpadPdd">
                            <StyledImg src={G3L} alt="Kitchen3" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} className="IpadPdd">
                            <StyledImg src={G4L} alt="Kitchen4" />
                        </Col>
                    </Row>
                </StyledFlex>
                <Row>
                    <Col>
                        <StyledButton>View More</StyledButton>
                    </Col>
                </Row>
            </Container>
        </StyledRoot>
    );
};

export default Gallery;