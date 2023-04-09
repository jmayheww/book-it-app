import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles";
import { useNavigate } from "react-router-dom";

function HotelCard({ hotel }) {
  const nav = useNavigate();

  const { id, name, address, description, image_url, website } = hotel;

  function handleDetailsClick(id) {
    nav(`/hotels/${id}`);
  }

  return (
    <Card>
      <ImageWrapper>
        <CardImage src={image_url} alt={`${name}`} />
      </ImageWrapper>
      <CardContent>
        <HotelInfo>
          <HotelName>{name}</HotelName>
          <HotelAddress>{address}</HotelAddress>
        </HotelInfo>
        {website && (
          <WebsiteLink href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </WebsiteLink>
        )}
        <ButtonWrapper>
          <DetailsButton onClick={() => handleDetailsClick(id)}>
            View Hotel
          </DetailsButton>
        </ButtonWrapper>
      </CardContent>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 400px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const HotelName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #49beb7;
`;

const HotelAddress = styled.span`
  font-size: 0.9rem;
  color: #6c757d;
`;

const WebsiteLink = styled.a`
  font-size: 0.9rem;
  color: #6c757d;

  &:hover {
    color: #49beb7;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  justify-content: space-between;
`;

const DetailsButton = styled(Button)`
  background-color: #49beb7;
  color: #fff;

  &:hover {
    background-color: #2a9d8f;
  }
`;

export default HotelCard;
