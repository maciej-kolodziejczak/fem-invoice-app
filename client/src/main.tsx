import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Main } from "@/components/Main";

import "@/styles/main.scss";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
