import React, { useState, useContext } from "react";
import UserContext from "../context/userAuth";
import { Button, Error, Input, FormField, Label } from "../styles/index";

function SignUpForm() {
  const initialState = {
    email: "",
    password: "",
    password_confirmation: "",
  };

  const [signupFormData, setSignupFormData] = useState(initialState);

  const { signupUser, errors, setErrors, isLoading, setIsLoading } =
    useContext(UserContext);

  function handleUpdateSignupForm(e) {
    setErrors([]);
    setSignupFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    setSignupFormData(initialState);
    setIsLoading(true);
    signupUser(signupFormData);
  }

  return (
    <form onSubmit={handleSignupSubmit}>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={signupFormData.email}
          onChange={handleUpdateSignupForm}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={signupFormData.password}
          onChange={handleUpdateSignupForm}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          value={signupFormData.password_confirmation}
          onChange={handleUpdateSignupForm}
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"} </Button>
      </FormField>
      <FormField>
        {errors.map((error) => {
          console.log("error: ", error);
          return <Error key={error}>{error}</Error>;
        })}
      </FormField>
    </form>
  );
}

export default SignUpForm;
