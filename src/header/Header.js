import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import Logo from '../images/Logo.svg';
import Fb from '../images/Fb.svg';
import Tw from '../images/Tw.svg';
import In from '../images/In.svg';

const StyledHeader = styled.div`
    position: absolute;
    width: 100%;
    @media(max-width: 991px) {
        position: relative;
    }
`;
const StyledFlex = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 1200px;
    max-width: 100%;
    height: 90px;
    @media(max-width: 991px) {
        display: block;
        height: 100%;
    }
`;
const StyledImg = styled.img`
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    @media(max-width: 991px) {
        position: relative;
        top: auto;
        display: block;
        height: 39px;
    }
    @media(max-width: 550px) {
        height: 25px;
    }
`;
const StyledLi = styled.li`
    list-style: none;
    padding: 5px 0px;
    a {
        color: #FFFFFF;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 3px;
        line-height: 18px;
        opacity: 1;
        font-family: 'Roboto', sans-serif;
    }
    a:hover {
        text-decoration: none;
    }
`;
const StyledButton = styled.button`
    position: absolute;
    top: 26px;
    right: 0%;
    color: #fff;
    width: 162px;
    height: 45px;
    background: transparent;
    border-radius: 25px;
    opacity: 1;
    border: 1px solid #FFFFFF;
    text-transform: uppercase;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    @media(max-width: 991px) {
        top: 0px;
        width: 150px;
        height: 38.5px;
    }
    @media(max-width: 550px) {
        width: 60px;
        height: 40px;
        border: 0px;
    }
`;
const StyledSoicalImg = styled.img`
    display: block;
    width: 17px;
    height: 17px;
    margin-right: 15px;
`;
const StyledSocialFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;
    top: 40px;
    left: 0px;
    // top: 35px;
    // left: 30px;
    @media(max-width: 991px) {
        position: relative;
        top: 170px;
        //top: 140px;
        bottom: 0px;
        left: 0px;
        z-index: 9999;
        justify-content: flex-start;
    }
`;

const Header = () => {

    return (  
        <Router>
        <StyledHeader>
            <Navbar expand="lg" className="">
                    <StyledFlex>
                        <Navbar.Brand href="#home">
                            <StyledImg className="d-block mx-auto" src={Logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <StyledSocialFlex>
                                <a href="#"><StyledSoicalImg src={Fb} alt="facebook" /></a>
                                <a href="#"><StyledSoicalImg src={Tw} alt="twitter" /></a>
                                <a href="#"><StyledSoicalImg src={In} alt="instagrame" /></a>
                            </StyledSocialFlex>
                        <ul>
                            <Nav>
                                <StyledLi>
                                    <Link to="#">Shop</Link>
                                </StyledLi>
                                <StyledLi>
                                    <Link to="#">Plan My Kitchen</Link>
                                </StyledLi>
                                <StyledLi>
                                    <Link to="#">About us</Link>
                                </StyledLi>
                                <StyledLi>
                                    <Link to="#">Gallery</Link>
                                </StyledLi>
                            </Nav>
                        </ul>
                        </Navbar.Collapse>
                        <StyledButton className="cart"><span>My Order</span></StyledButton>
                    </StyledFlex>
                </Navbar>
            </StyledHeader>
        </Router>
    );
}
 
export default Header;