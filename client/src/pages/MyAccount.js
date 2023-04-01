import React from "react";
import UserProfileCard from "../components/UserProfileCard";

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
