import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserContext from "../context/userAuth";

function Home() {
  const { user } = useContext(UserContext);
  const firstName = user?.first_name;

  return (
    <MainSection>
      <Heading>Welcome{firstName && `, ${firstName}`}</Heading>
      <SubHeading>Discover the Best Hotels</SubHeading>
      <Paragraph>
        Looking for a place to stay during your travels? Look no further than
        Book-It! Our app provides users with a collection of the best hotels to
        choose from. Whether you're looking for luxury accommodations or
        something more budget-friendly, Book-It has a wide variety of options to
        meet your needs. Each hotel page includes specific details about the
        hotel and available rooms, so you can easily compare and select your
        preferred option. Plus, booking a room is easy - simply specify your
        check-in and check-out dates and the number of guests, and we'll take
        care of the rest. With Book-It, you'll find the perfect place to stay
        for your next trip.
      </Paragraph>
      <ButtonWrapper>
        <Button as={Link} to="/hotels">
          View All Hotels
        </Button>
      </ButtonWrapper>
    </MainSection>
  );
}

const MainSection = styled.section`
  background-color: #ffffff;
  padding: 80px 0;
`;

const Heading = styled.h1`
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #f67280;
`;

const SubHeading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333333;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 50px;
  color: #333333;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #f67280;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #df5e6a;
  }

  &:focus {
    outline: none;
  }
`;

export default Home;
