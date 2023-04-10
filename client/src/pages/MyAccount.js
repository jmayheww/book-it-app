import React, { useState, useContext } from "react";
import styled from "styled-components";

import UserProfileCard from "../components/UserProfileCard";
import MyBookingsList from "../components/MyBookingsList";
import DeleteAccountModal from "../components/DeleteAccountModal";

function MyAccount() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  function activateDeleteAccountModal() {
    setIsDeleteOpen(true);
    console.log("Delete Account Clicked");
  }

  return (
    <>
      <MyAccountContainer>
        <UserProfileCard />
        <MyBookingsList />
      </MyAccountContainer>
      {/* <Routes>
        <Route path="/edit" element={<EditProfileModal />} />
      </Routes> */}

      <IrreversibleButton onClick={activateDeleteAccountModal}>
        Delete Account
      </IrreversibleButton>

      {isDeleteOpen && <DeleteAccountModal setIsDeleteOpen={setIsDeleteOpen} />}
    </>
  );
}

const MyAccountContainer = styled.div`
  padding-top: 80px; // Added top padding
`;

const IrreversibleButton = styled.button`
  background-color: #1d3557; // Updated background color to match NavBar
  color: #f1faee; // Updated font color to match NavBar's BackButton
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #12344d; // Updated hover background color for better contrast
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default MyAccount;
