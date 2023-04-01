import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./context/userAuth";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: sans-serif;
    background-color: #f7f7f7; // Background color
  }
`;

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <UserProvider>
      <App />
    </UserProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
