import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import G1 from '../images/G1.png'
import G2 from '../images/G2.png'
import G3 from '../images/G3.png'
import G4 from '../images/G4.png'
import styled from 'styled-components';

const Gallery = () => {

const StyledRoot = styled.div`
    width: 1300px;
    min-height: 600px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //margin-bottom: 100px;
    @media(max-width: 991px) {
        margin: 35px 0px 50px 0px;
    }
    @media(max-width: 1315px) and (min-width: 350px) {
        padding: 0px 15px;
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
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
`;
const StyledButton = styled.button`
    color: #fff;
    width: 184px;
    height: 60px;
    background: #D4B254 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 10px #00000033;
    border-radius: 30px;
    opacity: 1;
    border: 0px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 26px;
    font-size: 15px;
    letter-spacing: 3px;
    line-height: 20px;
    font-family: 'Roboto', sans-serif;
    @media(max-width: 550px) {
        width: 169px;
        height: 45px;
        font-size: 12px;
    }
`;
const StyledImg = styled.img`
    width: 100%;
    display: block;
    @media(max-width: 550px) {
        width: 310px;
        height: 310px;
        marging: 0 auto;
        margin-right: auto;
        margin-left: auto;
    }
`;
    
    return (
        <StyledRoot>
            <Container fluid>
                <Row>
                    <Col>
                        <StyledH2>Customer Gallery</StyledH2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={3} className="mb-3">
                        <StyledImg
                            src={G1}
                            alt="Kitchen1"
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3} className="mb-3">
                        <StyledImg
                            src={G2}
                            alt="Kitchen2"
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3} className="mb-3">
                        <StyledImg
                            src={G3}
                            alt="Kitchen3"
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3} className="mb-3">
                        <StyledImg
                            src={G4}
                            alt="Kitchen4"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledButton>View More</StyledButton>
                    </Col>
                </Row>
            </Container>
        </StyledRoot>
        
    );
}
 
export default Gallery;