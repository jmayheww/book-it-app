import React, { useContext } from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../styles/index";
import UserContext from "../context/userAuth";

function NavBar({ showBackButton }) {
  const { logoutUser } = useContext(UserContext);
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
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

// const Wrapper = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 8px;
//   z-index: 1000;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   background-color: #fff;
//   box-sizing: border-box;
//   width: 100%;
//   height: 70px;
// `;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1d3557; // Updated background color
  box-sizing: border-box;
  width: 100%;
  height: 70px;
`;

const BackButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: #ff69b4;
//   margin: 0;
//   line-height: 1;
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);

//   a {
//     color: inherit;
//     text-decoration: none;
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

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
  }
`;

// const Nav = styled.nav`
//   flex: 1;
//   display: flex;
//   justify-content: flex-end;
//   gap: 16px;

//   @media screen and (max-width: 768px) {
//     gap: 8px;
//     font-size: 14px;
//   }
// `;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  @media screen and (max-width: 768px) {
    gap: 8px;
    font-size: 14px;
  }
`;

// const BackButton = styled(Button)`
//   background-color: transparent;
//   color: #333333;
//   font-weight: bold;
//   font-size: 16px;
//   padding: 10px;

//   &:hover {
//     background-color: #f0f0f0;
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

const BackButton = styled(Button)`
  background-color: transparent;
  color: #f1faee; // Updated font color
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
