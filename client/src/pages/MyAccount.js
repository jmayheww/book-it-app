import React from "react";
import styled from "styled-components";
import UserProfileCard from "../components/UserProfileCard";

function MyAccount() {
  // const location = useLocation();

  // const basename = location.pathname;
  // console.log("basename: ", basename);

  return (
    <>
      <MyAccountContainer>
        <UserProfileCard />
      </MyAccountContainer>
      {/* <Routes>
        <Route path="/edit" element={<EditProfileModal />} />
      </Routes> */}
    </>
  );
}

const MyAccountContainer = styled.div`
  padding-top: 80px; // Added top padding
`;

export default MyAccount;
