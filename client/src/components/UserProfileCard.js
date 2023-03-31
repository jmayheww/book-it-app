import React, { useContext, useState } from "react";

import styled from "styled-components";
import { Divider, Button } from "../styles";
import UserContext from "../context/userAuth";
import EditProfileModal from "./EditProfileModal";

function UserProfile() {
  const { user, navigate } = useContext(UserContext);
  const [isEditOpen, setIsEditOpen] = useState(false);

  function handleEditClick() {
    setIsEditOpen(true);
    console.log("Edit Clicked");
  }

  return (
    // <Wrapper>
    //   {/* <Avatar
    //     src={user.avatar_url}
    //     alt={`${user.first_name} ${user.last_name}`}
    //   /> */}
    //   <Title>
    //     {user.first_name} {user.last_name}
    //   </Title>
    //   <Divider />
    //   <Info>
    //     <Item>
    //       <Label>Email:</Label> {user.email}
    //     </Item>
    //     <Item>
    //       <Label>Phone Number:</Label> {user.phone_number}
    //     </Item>
    //     <Item>
    //       <Label>Address:</Label>{" "}
    //       {`${user.address}, ${user.city}, ${user.state}, ${user.country}`}
    //     </Item>
    //     <Item>
    //       <Label>Age:</Label> {user.age}
    //     </Item>
    //     <Item>
    //       <Label>Nationality:</Label> {user.nationality}
    //     </Item>
    //     <Item>
    //       <Label>Passport Number:</Label> {user.passport_number}
    //     </Item>
    //     <Item>
    //       <Label>Date of Birth:</Label> {user.date_of_birth}
    //     </Item>
    //   </Info>

    <>
      <h1>Profile</h1>
      <Button onClick={() => handleEditClick()}>Edit Profile</Button>
      {isEditOpen && <EditProfileModal setIsEditOpen={setIsEditOpen} />}
    </>

    // </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
`;

const Title = styled.h2`
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;
  color: deeppink;
  margin: 0;
  line-height: 1;
`;

const Info = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
  &:nth-child(odd) {
    background-color: #f1f1f1;
  }
`;

const Label = styled.span`
  font-weight: bold;
`;

export default UserProfile;
