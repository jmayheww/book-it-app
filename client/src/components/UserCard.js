import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  background-color: #e1e1e1;
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
`;

function UserCard({ user }) {
  return (
    <UserContainer>
      <p>
        Name: {user.first_name} {user.last_name}
      </p>

      <p>Email: {user.email}</p>
      <p>Nationality: {user.nationality}</p>
      <p>Account created: {user.created_at}</p>
    </UserContainer>
  );
}

export default UserCard;
