import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider variant="success" maxSnack={3} autoHideDuration={1300}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SnackbarProvider>
);
