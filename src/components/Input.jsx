import React from "react";
import styled from "styled-components";

const Input = ({ label, type, id, placeholder, value, onInputChange }) => {
  return (
    <InputContianer>
      <Label htmlFor={id}>{label}</Label>
      <InputField
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </InputContianer>
  );
};

export default Input;

const InputContianer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
`;

const InputField = styled.input`
  padding: 0.6em;
  border: 1px solid var(--primary-color);
  border-radius: 0.5em;
  font-size: 1rem;
  background-color: var(--background-color);
  color: #000;
`;
