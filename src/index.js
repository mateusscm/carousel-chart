import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/global";
import HomePage from "./views/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);
