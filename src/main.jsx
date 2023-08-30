// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom"; // Cambio aquí
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Cambio aquí */}
  </React.StrictMode>
);
