import React from "react";
import styled from "styled-components";

function RoomCard({ room }) {
  const {
    id,
    room_title,
    description,
    price_per_night,
    image_url,
    is_available,
    max_guests,
  } = room;

  return (
    <CardContainer>
      <RoomCardWrapper>
        <ImageWrapper>
          <RoomImage src={image_url} alt={`${room_title}`} />
        </ImageWrapper>
        <RoomContent>
          <RoomTitle>{room_title}</RoomTitle>
          <RoomDescription>{description}</RoomDescription>
          <RoomPrice>${price_per_night} per night</RoomPrice>
          <RoomDetails>
            <MaxGuests>Max guests: {max_guests}</MaxGuests>
            <Availability>
              {is_available ? "Available" : "Not Available"}
            </Availability>
          </RoomDetails>
        </RoomContent>
      </RoomCardWrapper>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RoomCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RoomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

const RoomTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #49beb7;
`;

const RoomDescription = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

const RoomPrice = styled.span`
  font-weight: bold;
  color: #f67280;
`;

const RoomDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const MaxGuests = styled.span`
  font-size: 0.9rem;
  color: #6c757d;
`;

const Availability = styled.span`
  font-size: 0.9rem;
  color: ${(props) => (props.available ? "#49beb7" : "#f67280")};
`;

export default RoomCard;
