import React from "react";
import styled from "styled-components";
import LogoImage from "../assets/Logo.svg";
import LoginForm from "../components/LoginForm";

const Landing = () => {
  return (
    <Container>
      <Logo />
      <Motto>
        Write together. Create better. This real-time collaborative editor lets
        your ideas flow freely—anytime, anywhere, with anyone.
      </Motto>
      <LoginForm />
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  width: 30%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const Logo = styled.img.attrs({ src: `${LogoImage}` })`
  width: 100%;
`;

const Motto = styled.p``;
