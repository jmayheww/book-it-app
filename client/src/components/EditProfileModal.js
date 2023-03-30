import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button, Error, Input, FormField, Label } from "../styles";
import UserContext from "../context/userAuth";

function EditProfileModal() {
  const { user } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  function handleChange(e) {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(updatedUser);
  }

  return <h1>Test</h1>;
}

export default EditProfileModal;
