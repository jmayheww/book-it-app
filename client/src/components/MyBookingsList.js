import React, { useContext, useState } from "react";
import UserContext from "../context/userAuth";
import BookingCard from "./BookingCard";

function MyBookingsList() {
  const { userBookings } = useContext(UserContext);
  const currentDate = new Date();
  console.log("userBookings: ", userBookings);

  const upcomingBookings = userBookings
    ?.filter((booking) => new Date(booking.check_in) > currentDate)
    .sort((a, b) => new Date(a.check_in) - new Date(b.check_in))
    .slice(0, 4);

  const pastBookings = userBookings
    ?.filter((booking) => new Date(booking.check_in) < currentDate)
    .sort((a, b) => new Date(a.check_in) - new Date(b.check_in))
    .slice(0, 4);

  const renderUpcomingBookings = upcomingBookings?.map((booking) => {
    console.log("upcoming bookings: ", booking);
    return <BookingCard key={booking.id} booking={booking} />;
  });

  const renderPastBookings = pastBookings?.map((booking) => {
    console.log("past bookings: ", booking);
    return <BookingCard key={booking.id} booking={booking} />;
  });

  return (
    <div className="booking-list">
      {upcomingBookings && upcomingBookings.length > 0 && (
        <div>
          <h2>Upcoming Bookings</h2>
          {renderUpcomingBookings}
        </div>
      )}
      {pastBookings && pastBookings.length > 0 && (
        <div>
          <h2>Past Bookings</h2>
          {renderPastBookings}
        </div>
      )}
    </div>
  );
}

export default MyBookingsList;
