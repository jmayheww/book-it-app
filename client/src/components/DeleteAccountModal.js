import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import UserContext from "../context/userAuth";

function DeleteAccountModal({ setIsDeleteOpen }) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function deleteUser() {
    return fetch(`/api/users/${user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data: ", data);
        setUser(null);
        navigate("/signup");
      });
  }

  function handleDeleteClick() {
    deleteUser();
    setIsDeleteOpen(false);
  }

  function handleCloseClick() {
    setIsDeleteOpen(false);
  }

  return (
    <>
      <DarkBG />
      <Centered>
        <DeleteModal>
          <ModalHeader>
            <CloseBtn onClick={() => handleCloseClick()}>
              <RiCloseLine />
            </CloseBtn>
          </ModalHeader>
          <ModalContent>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </ModalContent>
          <ModalActions>
            <ActionsContainer>
              <SubmitBtn type="button" onClick={() => handleDeleteClick()}>
                Delete
              </SubmitBtn>
              <CancelBtn onClick={() => handleCloseClick()}>Cancel</CancelBtn>
            </ActionsContainer>
          </ModalActions>
        </DeleteModal>
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
  background-color: rgba(0, 0, 0, 0.5);
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

const DeleteModal = styled(Modal)`
  width: 400px;
  height: auto;
  background: #f8f8f8;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f8f8f8;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #f8f8f8;
  }

  ::-webkit-scrollbar-track {
    border-radius: 20px;
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
  color: #5c5c5c;
  font-weight: 500;
  font-size: 18px;
`;

export const ModalContent = styled.div`
  padding: 20px;
  font-size: 14px;
  color: #5c5c5c;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  background-color: #f7cac9;
`;

export const ModalActions = styled.div`
  margin-top: auto;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7cac9;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
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
  color: white;
  background: #f67280;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background: #d53e58;
  }
`;

export const CancelBtn = styled.button`
  ${buttonStyles}
  background-color: #f7cac9;
  color: #5c5c5c;
  border: 2px solid #5c5c5c;
  margin-left: 10px;

  &:hover {
    background: #d5d5d5;
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

  &:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translateY(-5px);
  }
`;

export default DeleteAccountModal;
