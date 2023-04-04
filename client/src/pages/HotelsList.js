import React from "react";

import HotelCard from "../components/HotelCard";

function HotelsList({ hotels }) {
  const renderHotels = hotels.map((hotel) => {
    return <HotelCard key={hotel.id} hotel={hotel} />;
  });

  return (
    <>
      <div className="hotels-container">
        <div className="hotels-list">
          {hotels ? renderHotels : "Loading..."}
        </div>
        <div className="hotel-detail"></div>
      </div>
    </>
  );
}

export default HotelsList;
