import React, { useState } from "react";
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Input from "./Input";
import Button from "./Button";
import { app } from "../firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  const handleLoginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User successfully logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Form>
      <Input
        label="Email:"
        id="email_login"
        type="email"
        placeholder="Enter your email address..."
        value={email}
        onInputChange={setEmail}
      />
      <Input
        label="Password:"
        id="password_login"
        type="password"
        placeholder="Enter your password..."
        value={password}
        onInputChange={setPassword}
      />
      <Button onClick={handleLoginUser}>Log me in!</Button>
    </Form>
  );
};

export default LoginForm;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
