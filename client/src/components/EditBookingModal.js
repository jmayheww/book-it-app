import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { Error } from "../styles/index";
import UserContext from "../context/userAuth";

function EditBookingModal({
  booking,
  showEditModal,
  setShowEditModal,
  errors,
  setErrors,
}) {
  const [updateBooking, setUpdateBooking] = useState(booking);
  const { userBookings, setUserBookings, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleCloseClick() {
    setShowEditModal(false);
    navigate("/myaccount");
  }

  function handleUpdateBooking(e) {
    setUpdateBooking({ ...updateBooking, [e.target.name]: e.target.value });
  }

  function handleUpdatedTripObj(updatedObj) {
    const updatedBooking = userBookings.map((booking) => {
      if (booking.id === updatedObj.id) {
        return updatedObj;
      } else {
        return booking;
      }
    });
    setUserBookings(updatedBooking);
    setUser((prev) => ({ ...prev, bookings: updatedBooking }));
  }

  function handleSubmitUpdate(e) {
    e.preventDefault();
    setErrors([]);

    fetch(`/api/bookings/${booking.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBooking),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json().then((data) => {
          handleUpdatedTripObj(data);
          setShowEditModal(false);
          navigate("/myaccount");
        });
      } else {
        return resp.json().then((data) => {
          if (data.errors) {
            setErrors(data.errors);
          } else {
            setErrors([data.error]);
          }
        });
      }
    });
  }
  return (
    <>
      {showEditModal && (
        <DarkBG>
          <Centered>
            <ModalHeader>
              <CloseBtn onClick={() => handleCloseClick()}>
                <RiCloseLine />
              </CloseBtn>
              <ModalTitle>Edit Booking</ModalTitle>
            </ModalHeader>
            <ModalHeaderLine />
            <ModalContent>
              <DatePickers>
                <DatePickerWrapper>
                  <Label>Check-in:</Label>
                  <DatePicker
                    type="date"
                    name="check_in"
                    value={updateBooking.check_in}
                    onChange={handleUpdateBooking}
                  />
                </DatePickerWrapper>
                <DatePickerWrapper>
                  <Label>Check-out:</Label>
                  <DatePicker
                    type="date"
                    name="check_out"
                    value={updateBooking.check_out}
                    onChange={handleUpdateBooking}
                  />
                </DatePickerWrapper>
              </DatePickers>
              <div>
                <FormContent>
                  <form onSubmit={handleSubmitUpdate}>
                    <FormGroup>
                      <Label>Guests:</Label>
                      <GuestsPicker
                        name="number_of_guests"
                        value={updateBooking.number_of_guests}
                        onChange={handleUpdateBooking}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </GuestsPicker>
                    </FormGroup>
                    <ModalActions>
                      <SubmitBtn type="submit">Update Booking</SubmitBtn>
                      <CancelBtn type="button" onClick={handleCloseClick}>
                        Cancel
                      </CancelBtn>
                    </ModalActions>
                  </form>
                </FormContent>
                {errors.length > 0 && (
                  <ErrorsWrapper>
                    {errors.map((error, index) => {
                      return <Error key={index}>{error}</Error>;
                    })}
                  </ErrorsWrapper>
                )}
              </div>
            </ModalContent>
          </Centered>
        </DarkBG>
      )}
    </>
  );
}

const fixedCentered = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;

const DarkBG = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 0;
  left: 0;
  ${fixedCentered}
`;

const Centered = styled.div`
  ${fixedCentered}
  z-index: 10;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem;
  width: 500px;
  max-width: 90vw;
  top: calc(15% + 30px);
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1200px) {
    top: calc(15% + 60px);
  }

  @media (max-width: 992px) {
    top: calc(15% + 60px);
  }

  @media (max-width: 768px) {
    top: calc(15% + 60px);
  }

  @media (max-width: 576px) {
    top: calc(15% + 60px);
  }
`;

const ModalContent = styled.div`
  padding: 24px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 1rem;
`;

const ModalHeaderLine = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid #e0e0e0;
  margin-bottom: 1rem;
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

const ModalTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #1d3557;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const DatePickers = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #1d3557;
  margin-bottom: 0.25rem;
`;

const DatePicker = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #1d3557;
  border-radius: 4px;
  color: #1d3557;
  background-color: #f1faee;
  &:focus {
    outline: none;
    border-color: #457b9d;
  }
`;

const FormContent = styled.div``;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const GuestsPicker = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #1d3557;
  border-radius: 4px;
  color: #1d3557;
  background-color: #f1faee;
  &:focus {
    outline: none;
    border-color: #457b9d;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top:
margin-top: 2rem;
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
  margin-left: 1rem;
  &:hover {
    background-color: #1d3557;
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

const ErrorsWrapper = styled.div`
  margin-top: 1rem;
`;

export default EditBookingModal;
