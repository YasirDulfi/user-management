import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//Images
import LaLigaImg from "assets/laliga-logo.png";
import PlayersImg from "assets/iniesta.jpg";

type LoginProps = {
  tokenIsValid: boolean;
  isItAuthenticated: boolean;
  checkUserLogin: (userInput: object) => void;
  checkTokenLogin: () => void;
};

export function Login({
  tokenIsValid,
  isItAuthenticated,
  checkUserLogin,
  checkTokenLogin
}: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  let navigate = useNavigate();

  useEffect(() => {
    checkTokenLogin && localStorage.getItem("LaLiga") && checkTokenLogin();
    console.log(tokenIsValid);
    if (tokenIsValid) navigate("/");
    isItAuthenticated === true && navigate("/");
  }, [tokenIsValid, isItAuthenticated, navigate]);

  const onFormSubmit = (userInput) => {
    checkUserLogin(userInput);
  };

  return (
    <Section>
      <Container>
        <Information />
        <Form
          onSubmit={handleSubmit((userInput) => {
            checkUserLogin(userInput);
          })}
        >
          <h4> "email": eve.holt@reqres.in, "password": cityslicka</h4>
          <LaLigaLogo src={LaLigaImg} alt="la liga logo" />
          {/* !!!! isLoginInvalid */}
          {/* <div>
            {isItAuthenticated === false && isItAuthenticated === false && (
              <ErrorInput>The user doesnt exist</ErrorInput>
            )}
          </div> */}
          <InputContainer>
            {/* Email */}
            <InputLable htmlFor="loginUserName" className="form--lable">
              Email
            </InputLable>
            <Input
              type="email"
              id="loginUserName"
              {...register("email", {
                required: {
                  value: true,
                  message: "Se requiere el email"
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "El email no es valido"
                }
              })}
            />
            <ErrorInput>
              {errors.email && <span>{errors.email.message}</span>}
            </ErrorInput>

            {/* password */}
            <InputLable htmlFor="loginInput" className="form--lable">
              Password
            </InputLable>
            <Input
              type="password"
              id="loginPassword"
              autoComplete="true"
              {...register("password", {
                required: {
                  value: true,
                  message: "Se requiere una contraseña"
                },
                // pattern: {
                //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                //   message: "La contraseño no es valida"
                // },
                minLength: {
                  value: 10,
                  message:
                    "La contraseña debe de tener un minimo de 10 caracteres"
                }
              })}
            />
            <ErrorInput>
              {errors.password && <span>{errors.password.message}</span>}
            </ErrorInput>
            <RecoverPassword>Forgot Password?</RecoverPassword>
            {/* submit button */}
            <SubmitBtn type="submit" className="form--button" value="LogIn" />
          </InputContainer>
          <SignInLink>Sign Up</SignInLink>
        </Form>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  background-color: #25282a;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: row nowrap;
  height: 60vh;
  width: 60vw;
  background-color: white;
  border-radius: 7px;
`;

const Information = styled.div`
  width: 55%;
  height: 100%;
  background: url(${PlayersImg}) no-repeat center center;
  background-size: cover;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  width: 45%;
  height: 100%;
  padding: 20px;
`;
const LaLigaLogo = styled.img`
  height: auto;
  width: 150px;
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
  &:focus {
    border-color: blueviolet;
  }
`;

const ErrorInput = styled.div`
  height: 50px;
  font-size: 20px;
  color: red;
`;

const RecoverPassword = styled.h6`
  margin-left: auto;
  margin-bottom: 18px;
`;

const SubmitBtn = styled.input`
  width: 220px;
  height: 50px;
  border-radius: 50px;
`;

const SignInLink = styled.button`
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  border-radius: 7px;
`;
