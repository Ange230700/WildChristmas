import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ListCadeaux from "./components/ListCadeaux.jsx";
import ReactDOM from "react-dom/client";
import Cadeau from "./components/cadeau.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ListCadeaux",
    element: <ListCadeaux />,
  },
  {
    path: "/Cadeau",
    element: <Cadeau />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
