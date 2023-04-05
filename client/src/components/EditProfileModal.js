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
    return fetch("/api/update_profile", {
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
      <DarkBG />
      <Centered>
        <ModalHeader>
          <CloseBtn onClick={() => handleCloseClick()}>
            <RiCloseLine />
          </CloseBtn>
        </ModalHeader>
        <ProfileModal>
          <ModalContent>Please change the following details:</ModalContent>

          <FormContent>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={updatedUser?.email || ""}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>First Name:</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={updatedUser?.first_name || ""}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={updatedUser?.last_name || ""}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Phone Number:</label>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={updatedUser?.phone_number || ""}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={updatedUser?.address || ""}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={updatedUser?.city || ""}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>State:</label>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={updatedUser?.state || ""}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Country:</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={updatedUser?.country || ""}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Passport Number:</label>
                <input
                  type="text"
                  name="passport_number"
                  placeholder="Passport Number"
                  value={updatedUser?.passport_number || ""}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Date of Birth:</label>
                <input
                  type="date"
                  name="date_of_birth"
                  placeholder="Date of Birth"
                  value={updatedUser?.date_of_birth || ""}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Avatar:</label>
                <input
                  type="text"
                  name="avatar_url"
                  placeholder="Avatar"
                  value={updatedUser?.avatar_url || ""}
                  onChange={handleChange}
                />
              </FormGroup>

              <ModalActions>
                <ActionsContainer>
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                  <CancelBtn>Cancel</CancelBtn>
                </ActionsContainer>
              </ModalActions>
            </form>
          </FormContent>
        </ProfileModal>
      </Centered>
    </>
  );
}

const fixedCentered = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DarkBG = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 0;
  left: 0;
  ${fixedCentered}
`;

export const Centered = styled.div`
  ${fixedCentered}
  z-index: 10;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
`;

export const Modal = styled.div`
  width: 300px;
  height: 200px;
  background: white;
  color: deeppink;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

const ProfileModal = styled(Modal)`
  width: 600px;
  height: 500px;
  background: #49beb7;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-radius: 16px;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f67280;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #f67280;
  }

  ::-webkit-scrollbar-track {
    border-radius: 16px;
    background-color: white;
  }
`;

export const ModalHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  background: #f67280;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
`;

export const Heading = styled.h3`
  margin: 0;
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

export const ModalContent = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #f8f9fa;
  text-align: center;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: auto;
`;

export const FormContent = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #f8f9fa;
  display: flex;
  flex-direction: column;
  height: auto;

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  ::placeholder {
    font-size: large;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const ModalActions = styled.div`
  margin-top: auto;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #49beb7;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  padding: 0 10px;
`;

const buttonStyles = css`
  cursor: pointer;
  font-weight: 500;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  padding: 11px 28px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const SubmitBtn = styled.button`
  ${buttonStyles}
  color: #f67280;
  background: white;
  border: 2px solid #f67280;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(230, 57, 70, 0.6);
    color: white;
    background: #f67280;
  }
`;

export const CancelBtn = styled.button`
  ${buttonStyles}
  background-color: white; // Secondary color
  color: #f67280; // Text color
  border: 2px solid #f67280;

  &:hover {
    background: hsl(235deg 85% 97%);
  }

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(230, 57, 70, 0.6);
    color: white;
    background: #f67280;
  }
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: 2px solid #f67280;
  font-size: 18px;
  color: #f67280;
  background: #f1faee;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translateY(-5px);
  }
`;

export default EditProfileModal;
