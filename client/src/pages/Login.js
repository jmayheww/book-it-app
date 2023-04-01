import { useContext } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button, Divider } from "../styles/index";
import UserContext from "../context/userAuth";

function Login() {
  const { showLogin, buttonClickResponseHandler } = useContext(UserContext);

  return (
    <Wrapper>
      <Logo>BookIt</Logo>
      {showLogin ? (
        <>
          <LoginForm />
          <Divider />

          <p>
            Don't have an account? &nbsp;
            <SecondaryBtn onClick={() => buttonClickResponseHandler("signup")}>
              Sign Up
            </SecondaryBtn>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <Divider />

          <p>
            Already have an account? &nbsp;
            <SecondaryBtn onClick={() => buttonClickResponseHandler("login")}>
              Log In
            </SecondaryBtn>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: #f67280;
  margin: 8px 0 16px;
  text-align: center;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const SecondaryBtn = styled(Button)`
  background-color: #e5596a;
  color: white;
  border: 1px solid #f67280;
  padding: 6px 12px;
  margin-left: 8px;
  font-size: 0.9rem;
  border-radius: 4px;
  transition: all 0.25s ease;

  &:hover {
    background-color: #e5596a;
    cursor: pointer;
  }
`;

export default Login;
