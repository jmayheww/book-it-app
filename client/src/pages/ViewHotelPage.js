import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../styles";

function ViewHotelPage({ hotels }) {
  const { hotelId } = useParams();
  const [showRooms, setShowRooms] = useState(false);
  const viewHotel = hotels.find((hotel) => hotel.id === parseInt(hotelId));
  const hotelRooms = viewHotel.rooms;
  console.log("hotelRooms: ", hotelRooms);
  console.log("viewHotel: ", viewHotel);
  const renderRooms = hotelRooms.map((room) => {
    return <div className="room-card">{room.description}</div>;
  });

  function handleRoomsClick() {
    setShowRooms(!showRooms);
  }
  return viewHotel ? (
    <>
      <div className="hotel-info">
        <h1>{viewHotel.name}</h1>
        <Button onClick={() => handleRoomsClick()}>Show Rooms</Button>
      </div>
      {showRooms ? <div className="rooms-list">{renderRooms}</div> : ""}
    </>
  ) : (
    <p>Loading...</p>
  );
}
export default ViewHotelPage;
