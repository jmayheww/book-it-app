import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button, Divider } from "../styles/index";

function Login({ onLogin, showLogin, setShowLogin }) {
  const nav = useNavigate();

  const handleClick = (buttonType) => {
    if (buttonType === "login") {
      setShowLogin(true);
      nav("/login");
    } else {
      setShowLogin(false);
      nav("/signup");
    }
  };

  return (
    <Wrapper>
      <Logo>BookIt</Logo>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => handleClick("signup")}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onSignUp={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => handleClick("login")}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

export default Login;
