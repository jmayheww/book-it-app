import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Divider } from "../styles/index";
import UserContext from "../context/userAuth";

function NavBar() {
  const { logoutUser } = useContext(UserContext);

  function handleLogoutClick() {
    logoutUser();
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/"> BookIt </Link>
      </Logo>
      <Divider />
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

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
