import React, { useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoomCard from "../components/RoomCard";

function ViewHotelPage({ hotels }) {
  const navigate = useNavigate();
  const { hotelId } = useParams();

  // handle edge case where user refreshes page whilst in modal view
  useEffect(() => {
    navigate(`/hotels/${hotelId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // find hotel by matching hotel id with hotelId from useParams
  const viewHotel = hotels.find((hotel) => hotel.id === parseInt(hotelId));

  // assign rooms to hotelRooms variable, conditional chaining to prevent rooms undefined error
  const hotelRooms = viewHotel?.rooms;

  return (
    <MainContainer>
      {viewHotel ? (
        <>
          <HotelInfo>
            <h1>{viewHotel.name}</h1>
            <p>{viewHotel.description}</p>
            <HotelDetails>
              <HotelDetailItem>
                <strong>Phone: </strong> {viewHotel.phone}
              </HotelDetailItem>
              <HotelDetailItem>
                <strong>Website: </strong>{" "}
                <a
                  href={viewHotel.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {viewHotel.website}
                </a>
              </HotelDetailItem>
            </HotelDetails>
          </HotelInfo>
          <RoomsList>
            {hotelRooms.map((room) => {
              return (
                <RoomCard key={room.id} room={room} hotelId={viewHotel.id} />
              );
            })}
          </RoomsList>
          <Outlet />
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

const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const HotelDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px;
  justify-content: center;
`;

const HotelDetailItem = styled.li`
  font-size: 1.1rem;
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
