import React, { useContext } from "react";
import UserContext from "../context/userAuth";

function MyBookingsList() {
  const { user } = useContext(UserContext);
  const userBookings = user?.bookings;
  console.log("userBookings: ", userBookings);

  return <>{user && <div>Test</div>}</>;
}

export default MyBookingsList;
