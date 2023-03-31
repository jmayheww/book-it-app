import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Button, Error, Input, FormField, Label } from "../styles";
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

export const TripModal = styled(Modal)`
  width: 600px;
  height: 500px;
`;

export const ModalHeader = styled.div`
  height: 50px;
  background: white;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Heading = styled.h3`
  margin: 0;
  padding: 10px;
  color: #2c3e50;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;
export const ModalContent = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
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

export const Field = styled.div`
  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
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
  color: #fff;
  background: deeppink;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 20, 147, 0.6);
    background: #ff1493;
  }
`;

export const CancelBtn = styled.button`
  ${buttonStyles}
  background-color: white;
  color: indigo;
  border: 2px solid indigo;

  &:hover {
    background: hsl(235deg 85% 97%);
  }

  &:hover {
    box-shadow: none;
    transform: none;
    background: whitesmoke;
  }
`;

export const PrimaryBtn = styled.button`
  ${buttonStyles}
  display: flex;
  justify-content: center;
  margin: 20px;
  width: 10rem;
  color: white;
  background: #308695;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(24, 90, 219, 0.6);
  }
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: 2px solid indigo;
  font-size: 18px;
  color: deeppink;
  background: indigo;
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
