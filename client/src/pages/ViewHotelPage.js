import React, { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoomCard from "../components/RoomCard";

function ViewHotelPage({ hotels }) {
  const navigate = useNavigate();
  const { hotelId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigate(`/hotels/${hotelId}`); // handle edge case where user refreshes page whilst in modal view

    // set timer to handle indefinite loading on non-existent hotels (e.g. /hotels/9999999999
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // handle redirect to hotels list after loading timer is up
    if (!isLoading && !viewHotel) {
      navigate("/hotels");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  // find hotel by matching hotel id with hotelId from useParams
  const viewHotel = hotels?.find((hotel) => hotel.id === parseInt(hotelId));

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
            {hotelRooms?.map((room) => {
              return (
                <RoomCard key={room.id} room={room} hotelId={viewHotel.id} />
              );
            })}
          </RoomsList>
          <Outlet />
        </>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Hotel not found.. redirecting...</p>
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
