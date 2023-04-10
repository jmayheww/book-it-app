import React from "react";
import styled from "styled-components";

function BookingCard({ booking }) {
  const {
    id,
    check_in,
    check_out,
    number_of_guests,
    room: { room_title, price_per_night },
    room: {
      hotel: { name, address },
    },
  } = booking;

  return (
    <CardContainer>
      <h3>{name}</h3>
      <p>{address}</p>
      <p>Room: {room_title}</p>
      <p>Price per night: ${price_per_night}</p>
      <p>Check-in: {check_in}</p>
      <p>Check-out: {check_out}</p>
      <p>Number of guests: {number_of_guests}</p>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
  padding: 16px;
`;

export default BookingCard;
