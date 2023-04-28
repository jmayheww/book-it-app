import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../styles";
import UserContext from "../context/userAuth";
import EditProfileModal from "./EditProfileModal";
import DeleteAccountModal from "./DeleteAccountModal";

function UserProfileCard() {
  const { user, setErrors } = useContext(UserContext);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  if (!user) return null;

  const {
    avatar_url,
    first_name,
    last_name,
    email,
    phone_number,
    passport_number,
    address,
    city,
    state,
    country,
    date_of_birth,
    nationality,
  } = user;

  function handleEditClick() {
    setErrors([]);
    setIsEditOpen(true);
  }

  function handleDeleteAccountClick() {
    setIsDeleteOpen(true);
  }

  return (
    <PageWrapper>
      <ProfileWrapper>
        <Avatar
          src={avatar_url ? avatar_url : ""}
          alt={avatar_url ? `${first_name} ${last_name}` : ""}
        />
        <Name>
          {first_name && last_name ? (
            `${first_name} ${last_name}`
          ) : (
            <p style={{ color: "white" }}>Name:</p>
          )}
        </Name>
        <InfoWrapper>
          <InfoRow>
            <Label>Email:</Label>
            <Value>{email}</Value>
            <Label>Phone:</Label>
            <Value>{phone_number}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Address:</Label>
            <Value>
              {address ? `${address}, ${city}, ${state}, ${country}` : ""}
            </Value>
          </InfoRow>
          <InfoRow>
            <Label>Passport:</Label>
            <Value>{passport_number}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Date of Birth:</Label>
            <Value>{date_of_birth}</Value>
            <Label>Nationality:</Label>
            <Value>{nationality}</Value>
          </InfoRow>
        </InfoWrapper>
        <ButtonsContainer>
          <EditButton onClick={handleEditClick}>Edit Profile</EditButton>
          <DeleteAccountButton onClick={handleDeleteAccountClick}>
            Delete Account
          </DeleteAccountButton>
        </ButtonsContainer>

        {isEditOpen && <EditProfileModal setIsEditOpen={setIsEditOpen} />}
        {isDeleteOpen && (
          <DeleteAccountModal setIsDeleteOpen={setIsDeleteOpen} />
        )}
      </ProfileWrapper>
    </PageWrapper>
  );
}

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #f67280;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const Value = styled.span`
  font-weight: normal;
  color: #f8f9fa;
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 16px;
  background-color: #f7f7f7;
  overflow-y: hidden;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #49beb7;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 100%;
  max-width: 600px;
`;

const Name = styled.h2`
  margin-bottom: 24px;
  font-size: 1.8rem;
  color: #fefefe;
`;

const Label = styled.span`
  font-weight: bold;
  color: #f8f9fa;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;

const EditButton = styled(Button)`
  background-color: white;
  border-color: #f67280;
  border: 2px solid #f67280;
  color: #f67280;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(230, 57, 70, 0.6);
    color: white;
    background: #f67280;
  }
`;

const DeleteAccountButton = styled(Button)`
  background-color: #1d3557;
  color: #f1faee;
  border: 2px solid #1d3557;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #12344d;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default UserProfileCard;
