import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary";
import App from "./Components/App/App";
import MenuCalContextProvider from "./Components/Context/MenuCalContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <MenuCalContextProvider>
        <App />
      </MenuCalContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
