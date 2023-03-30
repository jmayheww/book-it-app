import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import UserProfileCard from "../components/UserProfileCard";
import EditProfileModal from "../components/EditProfileModal";
import UserContext from "../context/userAuth";

function MyAccount() {
  // const location = useLocation();

  // const basename = location.pathname;
  // console.log("basename: ", basename);

  return (
    <>
      <UserProfileCard />
      {/* <Routes>
        <Route path="/edit" element={<EditProfileModal />} />
      </Routes> */}
    </>
  );
}

export default MyAccount;
