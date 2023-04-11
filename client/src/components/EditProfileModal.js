import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import UserContext from "../context/userAuth";

function EditProfileModal({ setIsEditOpen }) {
  const { user, setUser } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  function handleChange(e) {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  }

  function updateUser() {
    return fetch(`/api/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateUser();
    setIsEditOpen(false);
  }

  function handleCloseClick() {
    setIsEditOpen(false);
  }

  return (
    <>
      <ModalWrapper>
        <DarkBG />
        <Modal>
          <ModalHeader>
            <CloseBtn onClick={handleCloseClick}>
              <RiCloseLine />
            </CloseBtn>
          </ModalHeader>
          <ModalContent>
            <h2>Edit Profile</h2>
            <ScrollContainer>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <label>Email:</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={updatedUser?.email || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>First Name:</label>
                  <Input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={updatedUser?.first_name || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Last Name:</label>
                  <Input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={updatedUser?.last_name || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Phone Number:</label>
                  <Input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={updatedUser?.phone_number || ""}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Address:</label>
                  <Input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={updatedUser?.address || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>City:</label>
                  <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={updatedUser?.city || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>State:</label>
                  <Input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={updatedUser?.state || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Country:</label>
                  <Input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={updatedUser?.country || ""}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Passport Number:</label>
                  <Input
                    type="text"
                    name="passport_number"
                    placeholder="Passport Number"
                    value={updatedUser?.passport_number || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Date of Birth:</label>
                  <Input
                    type="date"
                    name="date_of_birth"
                    placeholder="Date of Birth"
                    value={updatedUser?.date_of_birth || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Avatar:</label>
                  <Input
                    type="text"
                    name="avatar_url"
                    placeholder="Avatar"
                    value={updatedUser?.avatar_url || ""}
                    onChange={handleChange}
                  />
                </FormGroup>
                <ActionsContainer>
                  <ModalActions>
                    <SubmitBtn type="submit">Submit</SubmitBtn>
                    <CancelBtn onClick={handleCloseClick}>Cancel</CancelBtn>
                  </ModalActions>
                </ActionsContainer>
              </form>
            </ScrollContainer>
          </ModalContent>
        </Modal>
      </ModalWrapper>
    </>
  );
}
const ModalWrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -10%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;

  @media (max-width: 768px) {
    top: 30%;
  }
`;
const DarkBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Modal = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 20;
  width: 50%; // Changed width to 50% to give it more width
  max-width: 600px;
  min-width: 500px; // Added a minimum width to prevent the modal from becoming too narrow
  max-height: 80%;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-height: calc(100% - 40px);
    padding: 20px;
    border-radius: 0;
  }
`;
const ModalHeader = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
`;

const ModalContent = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #333;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-size: 16px;
  }
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.2s ease;
    &:focus {
      outline: none;
      border-color: #49beb7;
    }
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const buttonStyles = css`
  cursor: pointer;
  font-weight: 500;
  border-radius: 4px;
  font-size: 1rem;
  border: none;
  padding: 8px 16px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SubmitBtn = styled.button`
  background-color: #457b9d;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1d3557;
  }
`;
const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d3557;
  transition: color 0.3s ease;
  position: absolute;
  top: -10px;
  right: 0;
  &:hover {
    color: #e63946;
  }
`;

const CancelBtn = styled.button`
  background-color: #e63946;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-left: 1rem;
  &:hover {
    background-color: #9d0208;
  }
`;

// const CloseBtn = styled.button`
//   background-color: transparent;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
//   color: #f44336;
//   transition: all 0.2s ease;

//   &:hover {
//     color: #b71c1c;
//     transform: scale(1.1);
//   }
// `;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  gap: 40px; // Increased the gap from 20px to 40px
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #49beb7;
  }
`;

const ScrollContainer = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 340px); // Adjust the height calculation

  @media (max-width: 768px) {
    max-height: calc(
      100vh - 400px
    ); // Adjust the height calculation for smaller screens
  }
`;
export default EditProfileModal;
