import React, { useContext } from "react";
import UserContext from "../context/userAuth";
import BookingCard from "./BookingCard";
import styled from "styled-components";

function MyBookingsList() {
  const { userBookings } = useContext(UserContext);

  const currentDate = new Date();

  const upcomingBookings = userBookings
    ?.filter((booking) => new Date(booking.check_in) > currentDate)
    .sort((a, b) => new Date(a.check_in) - new Date(b.check_in))
    .slice(0, 4);

  const pastBookings = userBookings
    ?.filter((booking) => new Date(booking.check_in) < currentDate)
    .sort((a, b) => new Date(a.check_in) - new Date(b.check_in))
    .slice(0, 4);

  const renderUpcomingBookings = upcomingBookings?.map((booking) => {
    return <BookingCard key={booking.id} booking={booking} />;
  });

  const renderPastBookings = pastBookings?.map((booking) => {
    return <BookingCard key={booking.id} booking={booking} />;
  });

  return (
    <BookingsListWrapper>
      {upcomingBookings && upcomingBookings.length > 0 && (
        <BookingSection>
          <BookingTitle>Upcoming Bookings</BookingTitle>
          <BookingContainer>{renderUpcomingBookings}</BookingContainer>
        </BookingSection>
      )}
      {pastBookings && pastBookings.length > 0 && (
        <BookingSection>
          <BookingTitle>Past Bookings</BookingTitle>
          <BookingContainer>{renderPastBookings}</BookingContainer>
        </BookingSection>
      )}
    </BookingsListWrapper>
  );
}
const BookingsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 32px;
  width: 100%;
`;

const BookingTitle = styled.h2`
  text-align: center;
  width: 100%;
`;

const BookingSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BookingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px;
  margin-top: 0px;
  padding: 0px 20px 20px;

  @media (max-width: 1200px) {
    justify-content: space-evenly;
  }

  @media (max-width: 992px) {
    justify-content: space-evenly;
  }

  @media (max-width: 767px) {
    justify-content: center;
  }
`;
export default MyBookingsList;
