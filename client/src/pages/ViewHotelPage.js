import React from "react";
import { useParams } from "react-router-dom";

function ViewHotel({ hotels }) {
  const { hotelId } = useParams();

  const viewHotel = hotels.find((hotel) => hotel.id === parseInt(hotelId));

  return viewHotel ? (
    <>
      <div>Test</div>
      <h1>{viewHotel.name}</h1>
    </>
  ) : (
    <p>Loading...</p>
  );
}
export default ViewHotel;
