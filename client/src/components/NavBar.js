import React, { useContext } from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../styles/index";
import UserContext from "../context/userAuth";

function NavBar({ showBackButton }) {
  const { logoutUser, isAdmin } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogoutClick() {
    logoutUser();
  }

  function handleBackClick() {
    navigate("/hotels");
  }

  return (
    <Wrapper>
      <BackButtonWrapper>
        {showBackButton && (
          <BackButton onClick={handleBackClick}>
            <FaArrowLeft />
            Back to Hotels
          </BackButton>
        )}
      </BackButtonWrapper>
      <Logo>
        <Link to="/">BookIt</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/myaccount">
          My Account
        </Button>
        <Button as={Link} to="/hotels">
          Hotels
        </Button>
        {isAdmin && (
          <Button as={Link} to="/admin">
            Admin
          </Button>
        )}
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  padding-bottom: 20px;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1d3557;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 8px 0;
  }
`;

const BackButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 8px;
  }
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: #ff69b4;
  margin: 0;
  line-height: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    position: static;
    transform: none;
    text-align: center;
    margin-bottom: 24px;
  }
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  @media screen and (max-width: 768px) {
    gap: 6px;
    font-size: 14px;
    justify-content: center;
  }
  @media screen and (min-width: 769px) {
    gap: 6px;
  }
`;

const BackButton = styled(Button)`
  background-color: transparent;
  color: #f1faee;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;

  &:hover {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export default NavBar;
