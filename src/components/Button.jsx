import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button``;
