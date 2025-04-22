// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    // catch‑all so you don’t get a 404 if someone refreshes on a nested route
    { path: "*", element: <App /> },
  ],
  {
    // this tells React Router that everything lives under `/qa-qc-checklists/`
    // in dev this will automatically be `/`
    basename: import.meta.env.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
