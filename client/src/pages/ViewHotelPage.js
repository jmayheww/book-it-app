import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../styles";
import RoomCard from "../components/RoomCard";

function ViewHotelPage({ hotels }) {
  const { hotelId } = useParams();
  const [showRooms, setShowRooms] = useState(false);

  // find hotel by matching hotel id with hotelId from useParams
  const viewHotel = hotels.find((hotel) => hotel.id === parseInt(hotelId));

  // assign rooms to hotelRooms variable, conditional chaining to prevent rooms undefined error
  const hotelRooms = viewHotel?.rooms;

  // conditional rendering of rooms list
  function handleRoomsClick() {
    setShowRooms(!showRooms);
  }
  return viewHotel ? (
    <>
      <div className="hotel-info">
        <h1>{viewHotel.name}</h1>
        <Button onClick={() => handleRoomsClick()}>
          {!showRooms ? "Show Rooms" : "Hide Rooms"}
        </Button>
      </div>
      {showRooms ? (
        <div className="rooms-list">
          {hotelRooms.map((hotel) => {
            return <RoomCard key={hotel.id} room={hotel} />;
          })}
        </div>
      ) : (
        ""
      )}
    </>
  ) : (
    <p>Loading...</p>
  );
}
export default ViewHotelPage;
