import React from "react";
import styled from "styled-components";
import HotelCard from "../components/HotelCard";

function HotelsList({ hotels }) {
  const renderHotels = hotels.map((hotel) => {
    return <HotelCard key={hotel.id} hotel={hotel} />;
  });

  return (
    <>
      <div className="hotels-container">
        <HotelsListContainer>
          {hotels ? renderHotels : "Loading..."}
        </HotelsListContainer>
        <div className="hotel-detail"></div>
      </div>
    </>
  );
}

const HotelsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px;
  padding: 80px 20px 20px; // Added top padding

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

export default HotelsList;
