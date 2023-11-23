import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ListCadeaux from "./components/ListCadeaux.jsx";
import ReactDOM from "react-dom/client";
import Wishlist from "./components/WishList.jsx";

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
    path: "/wishlist",
    element: <Wishlist />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
