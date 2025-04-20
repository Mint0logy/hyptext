import React, { useState } from "react";
import styled from "styled-components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Input from "./Input";
import Button from "./Button";
import { app } from "../firebase";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Form>
      <Input
        label="Email:"
        id="email_signup"
        type="email"
        placeholder="Enter your email address..."
        value={email}
        onInputChange={setEmail}
      />
      <Input
        label="Password:"
        id="password_signup"
        type="password"
        placeholder="Enter your password..."
        value={password}
        onInputChange={setPassword}
      />
      <Button onClick={handleCreateUser}>Sign Up!</Button>
    </Form>
  );
};

export default SignUpForm;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
