import { useContext } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button, Divider } from "../styles/index";
import UserContext from "../context/userAuth";

function Login() {
  const { showLogin, buttonClickResponseHandler } = useContext(UserContext);

  // const handleClick = (buttonType) => {
  //   if (buttonType === "login") {
  //     setShowLogin(true);
  //     navigate("/login");
  //   } else {
  //     setShowLogin(false);
  //     navigate("/signup");
  //   }
  // };

  return (
    <Wrapper>
      <Logo>BookIt</Logo>
      {showLogin ? (
        <>
          <LoginForm />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button
              color="secondary"
              onClick={() => buttonClickResponseHandler("signup")}
            >
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button
              color="secondary"
              onClick={() => buttonClickResponseHandler("login")}
            >
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
