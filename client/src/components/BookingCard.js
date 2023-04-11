import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import EditBookingModal from "./EditBookingModal";
import UserContext from "../context/userAuth";

function BookingCard({ booking }) {
  console.log("booking: ", booking);
  const [showEditModal, setShowEditModal] = useState(false);
  const [errors, setErrors] = useState([]);
  const { userBookings, setUserBookings } = useContext(UserContext);
  const navigate = useNavigate();

  function handleEditClick() {
    setShowEditModal(true);
    navigate(`/myaccount/bookings/${booking.id}`);
  }

  function handleDeletedObj(id) {
    const updatedBookings = userBookings.filter((bk) => {
      return bk.id !== id;
    });

    setUserBookings(updatedBookings);
  }

  function handleDeleteClick() {
    fetch(`/api/bookings/${booking.id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          handleDeletedObj(booking.id);
          navigate("/myaccount");
        });
      } else {
        resp.json().then((data) => {
          if (data.errors) {
            setErrors(data.errors);
          } else {
            setErrors([data.error]);
          }
        });
      }
    });
  }

  const renderCardDetails = () => {
    if (!booking) return "Loading...";

    const check_in = booking?.check_in;
    const check_out = booking?.check_out;
    const number_of_guests = booking?.number_of_guests;
    const room_title = booking?.room?.room_title;
    const price_per_night = booking?.room?.price_per_night;
    const name = booking?.room?.hotel?.name;
    const address = booking?.room?.hotel?.address;

    return (
      <CardContainer>
        <CardHeader>
          <HotelName>{name}</HotelName>
          <CardActions>
            <ActionButton onClick={handleEditClick}>Edit</ActionButton>
            <ActionButton onClick={handleDeleteClick}>Delete</ActionButton>
          </CardActions>
        </CardHeader>
        <CardInfo>
          <InfoRow>
            <Label>Address:</Label>
            <Value>{address}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Room:</Label>
            <Value>{room_title}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Price per night:</Label>
            <Value>${price_per_night}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Check-in:</Label>
            <Value>{check_in}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Check-out:</Label>
            <Value>{check_out}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Number of guests:</Label>
            <Value>{number_of_guests}</Value>
          </InfoRow>
        </CardInfo>
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
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  max-width: 400px;
  margin: 8px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const HotelName = styled.h3`
  color: #49beb7;
  margin-bottom: 0;
`;

const CardActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background-color: #49beb7;
  border: none;
  border-radius: 4px;
  color: #f1faee;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 4px 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2a9d8f;
    transform: scale(1.05);
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #1d3557;
`;

const Value = styled.span`
  font-weight: normal;
  color: #1d3557;
`;

export default BookingCard;
