import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import EditBookingModal from "./EditBookingModal";

function BookingCard({ booking }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleEditClick() {
    setShowEditModal(true);
    navigate(`/myaccount/bookings/${booking.id}`);
  }

  const renderCardDetails = () => {
    if (!booking) return "Loading...";

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
        <button onClick={handleEditClick}>Edit</button>
      </CardContainer>
    );
  };

  return (
    <div className="booking-detail">
      {renderCardDetails()}
      {showEditModal ? (
        <EditBookingModal
          booking={booking}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          errors={errors}
          setErrors={setErrors}
        />
      ) : (
        ""
      )}
    </div>
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
