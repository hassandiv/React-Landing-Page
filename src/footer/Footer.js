import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';
import FaceBookCir from '../images/FaceBookCir.svg';
import TwitterCir from '../images/TwitterCir.svg';
import InstagramCir from '../images/InstagramCir.svg';
import Slider1 from '../images/Slider1.png'
 
const StyledRoot = styled.div`
    position: relative;
    max-width: 100%;
    min-height: 495px;
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.85);
    }
`;
const StyledBg = styled.div`
    width: 100%;
    min-height: 495px;
    background-image: url(${Slider1});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
const StyledLogo = styled.div`
    position: relative;
    margin-top: 40.47px;
    margin-bottom: 43.26px;
    &:before {
        content: '';
        display: inline-block;
        width: 69.5%;
        border-bottom: 1px solid #FFFFFF;
        opacity: 0.2;
        position: absolute;
        top: 50%;
        left: -26.5%;
    }
    &:after {
        content: '';
        display: inline-block;
        width: 69.5%;
        border-bottom: 1px solid #FFFFFF;
        opacity: 0.2;
        position: absolute;
        top: 50%;
        right: -26.5%;
    }
    @media(max-width: 550px) {
        &:before {
            width: 35%;
            left: 0;
        }
        &:after {
            width: 35%;
            right: 0;
        }
    }
`;
const Title = styled.h6`
    width: 69px;
    height: 24px;
    text-align: left;
    font-size: 24px;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-bottom: 35px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    @media(max-width: 550px) {
        margin-bottom: 20px;
    }
`;
const StyledUl = styled.ul`
    padding: 0px;
    margin: 0px;
`;
const StyledLi = styled.li`
    list-style: none;
    a {
        color: #FFFFFF;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 3px;
        line-height: 30px;
        opacity: 0.8;
        font-family: 'Roboto', sans-serif;
    }
    a:hover {
        text-decoration: none;
    }
`;
const StyledParagraph = styled.p`
    line-height: 26px;
    font-size: 13px;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-align: center;
    opacity: 0.5;
    max-width: 400px;
    height: 44px;
    margin: 0 auto;
    margin-top: 48px;
    margin-bottom: 130px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 768px) {
    }
`;
const StyledWrapper = styled.div`
    width: 850px;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    &:before {
        content: '';
        display: inline-block;
        width: 1300px;
        max-width: 100%;
        border-bottom: 1px solid #FFFFFF;
        opacity: 0.2;
        position: absolute;
        bottom: 10%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    @media(max-width: 550px) {
        &:before {
            width: 93%;
        }
    }
`;
const StyledFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: absolute;
    top: 65px;
    left: 15px;
    @media(max-width: 550px) {
        top: 50px;
    }
`;
const StyledImg = styled.img`
    width: 40px;
    margin-right: 15px;
`;
const Footer = () => {

    return (
        <StyledRoot>
            <StyledBg>
                <Container>
                    <StyledWrapper>
                    <Row>
                        <Col>
                            <StyledLogo>
                                <img className="d-block mx-auto" src={Logo} alt="logo" />
                            </StyledLogo>
                        </Col>
                    </Row>
                    <Row>
                        <Router>
                            <Col xs={6} sm="6" md={3} className="mb-4">
                                <Title>
                                    About
                                </Title>
                                <StyledUl>
                                    <StyledLi><Link to="#">Shop</Link></StyledLi>
                                    <StyledLi><Link to="#">Plan My Kitchen</Link></StyledLi>
                                    <StyledLi><Link to="#">About us</Link></StyledLi>
                                    <StyledLi><Link to="#">Gallery</Link></StyledLi>
                                </StyledUl>
                            </Col>
                            <Col xs={6} sm="6" md={3} className="mb-4">
                                <Title>
                                    Service
                                </Title>
                                <StyledUl>
                                    <StyledLi><Link to="#">FAQ</Link></StyledLi>
                                    <StyledLi><Link to="#">Contact</Link></StyledLi>
                                    <StyledLi><Link to="#">How to buy</Link></StyledLi>
                                    <StyledLi><Link to="#">Downloads</Link></StyledLi>
                                </StyledUl>
                            </Col>
                            <Col xs={6} sm="6" md={3}>
                                <Title>
                                    Info
                                </Title>
                                <StyledUl>
                                    <StyledLi><Link to="#">Delivery</Link></StyledLi>
                                    <StyledLi><Link to="#">Terms</Link></StyledLi>
                                    <StyledLi><Link to="#">Privacy</Link></StyledLi>
                                </StyledUl>
                            </Col>
                            <Col xs={6} sm="6" md={3}>
                                <Title>
                                        Follow
                                </Title>
                                <StyledFlex>
                                    <a href="#"><StyledImg src={FaceBookCir} alt="facebook" /></a>
                                    <a href="#"><StyledImg src={TwitterCir} alt="twitter" /></a>
                                    <a href="#"><StyledImg src={InstagramCir} alt="instagarm" /></a>
                                </StyledFlex>
                            </Col>
                        </Router>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <StyledParagraph>
                                Copyright Online MTC Home Kitchens 2018 - All rights reserved.
                                Responsive website design, Development & Hosting by mtc.
                            </StyledParagraph>
                        </Col>
                    </Row>
                    </StyledWrapper>
                </Container>
            </StyledBg>
        </StyledRoot>
    );
}
 
export default Footer;