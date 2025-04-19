import React from "react";
import styled from "styled-components";
import LogoImage from "../assets/Logo.svg"


const Landing = () =>{
    return (<Container>
        <Logo />
    </Container>);
}

export default Landing;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.img.attrs({src: `${LogoImage}`})`
    max-width: 25vw;
`