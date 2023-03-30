import styled from "styled-components";
import { useContext, useState } from "react";
import { Button } from "../styles/index";
import UserContext from "../context/userAuth";

function UserProfileCard() {
  const { user } = useContext(UserContext);
  console.log("user: ", user);
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(user);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSaveClick = (e) => {
    setIsEditing(false);
  };

  const handleCancelClick = (e) => {
    setIsEditing(false);
  };

  const handleEditClick = (e) => {
    setIsEditing(true);
  };

  return (
    <Wrapper>
      <Card>
        <Avatar src={user.avatarUrl} alt="User Avatar" />
        <Info>
          <Row>
            <Label>First Name:</Label>
            <Value>{user.firstName}</Value>
          </Row>
          <Row>
            <Label>Last Name:</Label>
            <Value>{user.lastName}</Value>
          </Row>
          <Row>
            <Label>Email:</Label>
            <Value>{user.email}</Value>
          </Row>
          <Row>
            <Label>Phone Number:</Label>
            <Value>{user.phoneNumber}</Value>
          </Row>
          <Row>
            <Label>Address:</Label>
            <Value>{user.address}</Value>
          </Row>
          <Row>
            <Label>City:</Label>
            <Value>{user.city}</Value>
          </Row>
          <Row>
            <Label>State:</Label>
            <Value>{user.state}</Value>
          </Row>
          <Row>
            <Label>Country:</Label>
            <Value>{user.country}</Value>
          </Row>
          <Row>
            <Label>Age:</Label>
            <Value>{user.age}</Value>
          </Row>
          <Row>
            <Label>Nationality:</Label>
            <Value>{user.nationality}</Value>
          </Row>
          <Row>
            <Label>Passport Number:</Label>
            <Value>{user.passportNumber}</Value>
          </Row>
          <Row>
            <Label>Date of Birth:</Label>
            <Value>{user.dateOfBirth}</Value>
          </Row>
        </Info>
        {isEditing ? (
          <>
            <Button onClick={handleSaveClick}>Save</Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
          </>
        ) : (
          <Button onClick={handleEditClick}>Edit</Button>
        )}
      </Card>
      {isEditing && (
        <Modal>
          <ModalTitle>Update Profile Information</ModalTitle>
          <ModalLabel>First Name</ModalLabel>
          <ModalInput
            type="text"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
          />
          <ModalLabel>Last Name</ModalLabel>
          <ModalInput
            type="text"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
          />
          <ModalLabel>Email</ModalLabel>
          <ModalInput
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <ModalLabel>Phone Number</ModalLabel>
          <ModalInput
            type="tel"
            name="phoneNumber"
            value={userInfo.phoneNumber}
            onChange={handleChange}
          />
          <ModalLabel>Address</ModalLabel>
          <ModalInput
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
          />
          <ModalLabel>City</ModalLabel>
          <ModalInput
            type="text"
            name="city"
            value={userInfo.city}
            onChange={handleChange}
          />
          <ModalLabel>State</ModalLabel>
          <ModalInput
            type="text"
            name="state"
            value={userInfo.state}
            onChange={handleChange}
          />
          <ModalLabel>Country</ModalLabel>
          <ModalInput
            type="text"
            name="country"
            value={userInfo.country}
            onChange={handleChange}
          />
          <ModalLabel>Age</ModalLabel>
          <ModalInput
            type="number"
            name="age"
            value={userInfo.age}
            onChange={handleChange}
          />

          <ModalLabel>Nationality</ModalLabel>
          <ModalInput
            type="text"
            name="nationality"
            value={userInfo.nationality}
            onChange={handleChange}
          />
          <ModalLabel>Passport Number</ModalLabel>
          <ModalInput
            type="text"
            name="passportNumber"
            value={userInfo.passportNumber}
            onChange={handleChange}
          />
          <ModalLabel>Date of Birth</ModalLabel>
          <ModalInput
            type="date"
            name="dateOfBirth"
            value={userInfo.dateOfBirth}
            onChange={handleChange}
          />
        </Modal>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Info = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: 500;
  margin-right: 20px;
`;

const Value = styled.span`
  font-size: 16px;
`;

const UpdateButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #f50057;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ff4081;
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

const ModalTitle = styled.h2`
  color: #fff;
  font-size: 28px;
  margin-bottom: 20px;
`;

const ModalLabel = styled.label`
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export default UserProfileCard;
