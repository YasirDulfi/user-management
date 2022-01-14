import Information from "features/login/Information";
import React from "react";
import styled from "styled-components";

export function Login() {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Information />
      <Form onSubmit={submitHandler}>
        <label>La Liga</label>
        <InputContainer>
          <InputLable htmlFor="loginUserName" className="form--lable">
            User name or Email
          </InputLable>
          <Input type="email" id="loginUserName" required />
          <InputLable htmlFor="loginInput" className="form--lable">
            Password
          </InputLable>
          <Input type="password" id="loginPassword" required />
          <RecoverPassword>Forgot Password?</RecoverPassword>
          <SubmitBtn type="submit" className="form--button" value="LogIn" />
        </InputContainer>
        <OtherOptions>
          <OrMessage>Or</OrMessage>
          <button>Google</button>
          <SignInLink></SignInLink>
        </OtherOptions>
      </Form>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: row nowrap;
  height: 60vh;
  width: 60vw;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  height: 100%;
  padding: 40px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: max;
`;

const InputLable = styled.label`
  width: 100%;
  margin-right: max;
  font-size: 14px;
  color: #3d3d3d;
`;

const Input = styled.input`
  width: 100%;
  margin: 15px 0px 30px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  border-spacing: 0px;
  border-collapse: separate;
`;

const RecoverPassword = styled.h6`
  margin-left: auto;
  margin-bottom: 25px;
`;

const SubmitBtn = styled.input`
  width: 250px;
  height: 60px;
  border-radius: 50px;
`;

const OtherOptions = styled.div`
  height: max;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;
const OrMessage = styled.span`
  width: 100%;
  padding: 0px 0.5rem;
  background-color: white;
  text-align: center;
  position: relative;
  z-index: 1;
  display: inline-block;
  &:after {
    border: 1px solid black;
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: -1;
    border-radius: 20px;
  }
`;
const SignInLink = styled.h6``;
