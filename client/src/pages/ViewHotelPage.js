import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { Button } from "../styles";
// import { FaArrowLeft } from "react-icons/fa";
import RoomCard from "../components/RoomCard";

function ViewHotelPage({ hotels }) {
  const { hotelId } = useParams();
  const history = useNavigate();

  // find hotel by matching hotel id with hotelId from useParams
  const viewHotel = hotels.find((hotel) => hotel.id === parseInt(hotelId));

  // assign rooms to hotelRooms variable, conditional chaining to prevent rooms undefined error
  const hotelRooms = viewHotel?.rooms;

  // function handleBackClick() {
  //   history(-1);
  // }

  return (
    <MainContainer>
      {viewHotel ? (
        <>
          <div className="hotel-info">
            {/* <BackButton onClick={handleBackClick}>
              <FaArrowLeft />
              Back to Hotels List
            </BackButton> */}
            <h1>{viewHotel.name}</h1>
          </div>
          <RoomsList>
            {hotelRooms.map((hotel) => {
              return <RoomCard key={hotel.id} room={hotel} />;
            })}
          </RoomsList>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </MainContainer>
  );
}
export default ViewHotelPage;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 80px;
`;

const RoomsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1200px; // Adjust this value based on your design requirements
  padding: 0 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
