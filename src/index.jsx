import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./services/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
