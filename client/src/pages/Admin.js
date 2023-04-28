import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserCard from "../components/UserCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Room = styled.div`
  background-color: #f1f1f1;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
`;

const RoomTitle = styled.h3`
  margin-bottom: 10px;
`;

const UserTitle = styled.h4`
  margin-top: 20px;
`;

function Admin() {
  const [allRooms, setAllRooms] = useState(null);

  useEffect(() => {
    fetch("/api/rooms/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setAllRooms(data);
      });
  }, []);

  return (
    <div>
      <h1>Admin</h1>
      <Container>
        {allRooms?.map((room) => (
          <Room key={room.id}>
            <RoomTitle>Room: {room.room_title}</RoomTitle>

            <UserTitle>Users</UserTitle>
            <ol>
              {room.users?.length > 0 ? (
                room.users.map((user, index) => (
                  <li key={`${room.id}-${user.id}-${index}`}>
                    <UserCard user={user} />
                  </li>
                ))
              ) : (
                <p>No users for this room.</p>
              )}
            </ol>
          </Room>
        ))}
      </Container>
    </div>
  );
}

export default Admin;
