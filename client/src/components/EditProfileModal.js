import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import UserContext from "../context/userAuth";

function EditProfileModal({ setIsEditOpen }) {
  const { user } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  function handleChange(e) {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditOpen(false);
    console.log(updatedUser);
  }

  function handleCloseClick() {
    setIsEditOpen(false);
  }

  return (
    <>
      <DarkBG />
      <Centered>
        <TripModal>
          <ModalHeader>
            <Heading>Edit Trip</Heading>
          </ModalHeader>
          <CloseBtn onClick={() => handleCloseClick()}>
            <RiCloseLine />
          </CloseBtn>
          <ModalContent>Please change the following details:</ModalContent>
          <FormContent>
            <form onSubmit={handleSubmit}>
              {/* Add input fields here */}
              {/* ... */}
              <ModalActions>
                <ActionsContainer>
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                  <CancelBtn>Cancel</CancelBtn>
                </ActionsContainer>
              </ModalActions>
            </form>
          </FormContent>
        </TripModal>
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
  ${fixedCentered}
`;

export const Centered = styled.div`
  ${fixedCentered}
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

const TripModal = styled(Modal)`
  width: 600px;
  height: 500px;
  background: #49beb7; // Card background color
`;

export const ModalHeader = styled.div`
  height: 50px;
  background: white;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: #f67280; // Primary color
`;

export const Heading = styled.h3`
  margin: 0;
  padding: 10px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;
export const ModalContent = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #f8f9fa; // Lighter color for better readability
  text-align: center;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const FormContent = styled(ModalContent)`
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

export const ModalActions = styled.div`
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  margin-top: 10px;
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
  border: 2px solid #e63946;
  font-size: 18px;
  color: #e63946;
  background: #f1faee;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;

  &:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-4px, 4px);
  }
`;

export default EditProfileModal;
