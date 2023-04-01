import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button, Divider } from "../styles";
import UserContext from "../context/userAuth";
import EditProfileModal from "./EditProfileModal";

function UserProfile() {
  const { user } = useContext(UserContext);
  const {
    avatar_url,
    first_name,
    last_name,
    email,
    phone_number,
    address,
    city,
    state,
    country,
    passport_number,
    date_of_birth,
    age,
    nationality,
  } = user;
  console.log("user: ", user);
  const [isEditOpen, setIsEditOpen] = useState(false);

  function handleEditClick() {
    setIsEditOpen(true);
    console.log("Edit Clicked");
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
            `${user.first_name} ${user.last_name}`
          ) : (
            <p style={{ color: "#f67280" }}>Name:</p>
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
            <Label>Age:</Label>
            <Value>{age}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Date of Birth:</Label>
            <Value>{date_of_birth}</Value>
            <Label>Nationality:</Label>
            <Value>{nationality}</Value>
          </InfoRow>
        </InfoWrapper>
        <EditButton onClick={() => handleEditClick()}>Edit Profile</EditButton>

        {isEditOpen && <EditProfileModal setIsEditOpen={setIsEditOpen} />}
      </ProfileWrapper>
    </PageWrapper>
  );
}

// const PageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   padding: 16px;
// `;

// const ProfileWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #f8f9fa;
//   border-radius: 8px;
//   padding: 16px;
//   width: 100%;
//   max-width: 600px;
// `;

// const Avatar = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin-bottom: 16px;
// `;

// const Name = styled.h2`
//   margin-bottom: 16px;
// `;

// const InfoWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   width: 100%;
// `;

// const InfoRow = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 8px;
// `;

// const Label = styled.span`
//   font-weight: bold;
// `;

// const Value = styled.span`
//   font-weight: normal;
// `;

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
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;
  background-color: #f7f7f7; // Background color
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff; // Card background color
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 100%;
  max-width: 600px;
`;

const Name = styled.h2`
  margin-bottom: 24px;
  font-size: 1.8rem;
  color: #333333; // Text color
`;

const Label = styled.span`
  font-weight: bold;
  color: #f67280; // Primary color
`;

const EditButton = styled(Button)`
  margin-top: 24px;
  background-color: #49beb7; // Secondary color
  border-color: #49beb7;
  color: white; // Text color
`;

export default UserProfile;
