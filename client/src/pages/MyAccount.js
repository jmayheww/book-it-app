import React, { useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import UserProfileCard from "../components/UserProfileCard";
import MyBookingsList from "../components/MyBookingsList";

function MyAccount() {
  const navigate = useNavigate();

  // reset client route if user refreshes page while in modal
  useEffect(() => {
    navigate("/myaccount");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MyAccountContainer>
        <Wrapper>
          <UserProfileCard />
          <MyBookingsList />
        </Wrapper>
        <Outlet />
      </MyAccountContainer>
    </>
  );
}

const MyAccountContainer = styled.div`
  padding-top: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default MyAccount;
