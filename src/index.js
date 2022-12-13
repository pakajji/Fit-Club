import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import App from "./Components/App/App";
import MenuCalContextProvider from "./Components/Context/MenuCalContextProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ErrorBoundary>
      <MenuCalContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </MenuCalContextProvider>
    </ErrorBoundary>
);
