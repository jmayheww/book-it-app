import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Home = ({ user }) => {
  return (
    <MainSection>
      <Heading>Welcome{user && `, ${user.firstName}`}</Heading>
      <SubHeading>Discover the Best Hotels</SubHeading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
        hendrerit urna, sed finibus ipsum. Sed euismod leo ut libero pretium
        pharetra. Aliquam ut maximus ex.
      </Paragraph>
      <ButtonWrapper>
        <Button as={Link} to="/hotels">
          View All Hotels
        </Button>
      </ButtonWrapper>
    </MainSection>
  );
};

export default Home;
