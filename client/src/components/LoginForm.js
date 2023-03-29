import React, { useState, useContext } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";
import UserContext from "../context/userAuth";

function LoginForm() {
  const initialState = {
    email: "",
    password: "",
  };

  const [loginFormData, setLoginFormData] = useState(initialState);
  const { loginUser, errors, isLoading, setIsLoading } =
    useContext(UserContext);

  function handleLoginSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    loginUser(loginFormData);
    setLoginFormData(initialState);
  }

  function updateLoginForm(e) {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={loginFormData.email}
          onChange={updateLoginForm}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          value={loginFormData.password}
          onChange={updateLoginForm}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors.map((error) => {
          return <Error key={error}>{error}</Error>;
        })}
      </FormField>
    </form>
  );
}

export default LoginForm;
