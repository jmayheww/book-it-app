import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles";
import { useNavigate } from "react-router-dom";

function HotelCard({ hotel }) {
  const nav = useNavigate();

  const { id, name, address, description, image_url, phone, website, rating } =
    hotel;

  function handleDetailsClick(id) {
    nav(`/hotels/${id}`);
  }

  return (
    <Card>
      <ImageWrapper>
        <CardImage src={image_url} alt={`${name}`} />
      </ImageWrapper>
      <CardContent>
        <HotelName>{name}</HotelName>
        <HotelLocation>{address}</HotelLocation>

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

const HotelName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #49beb7;
`;

const HotelLocation = styled.span`
  font-size: 0.9rem;
  color: #6c757d;
`;

const HotelPrice = styled.span`
  font-weight: bold;
  color: #f67280;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const DetailsButton = styled(Button)`
  background-color: #49beb7;
  color: #fff;

  &:hover {
    background-color: #2a9d8f;
  }
`;

const BookNowButton = styled(Button)`
  background-color: #f67280;
  color: #fff;

  &:hover {
    background-color: #e63946;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const DetailsLabel = styled.span`
  font-weight: bold;
  color: #6c757d;
`;

const Details = styled.span`
  font-size: 0.9rem;
`;

export default HotelCard;
