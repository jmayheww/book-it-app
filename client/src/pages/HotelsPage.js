import React from "react";
import HotelCard from "../components/HotelCard";

function HotelsPage({ hotels }) {
  const renderHotels = () => {
    return hotels.map((hotel) => {
      return <HotelCard hotel={hotel} key={hotel.id} />;
    });
  };
  return (
    <>
      <h1>Hotels Page</h1>
      {renderHotels()}
    </>
  );
}

export default HotelsPage;
