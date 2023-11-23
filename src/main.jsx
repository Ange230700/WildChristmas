import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListCadeaux from "./components/ListCadeaux.jsx";
import Cadeau from "./components/Cadeau.jsx";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import Wishlist from "./components/WishList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Cadeau",
    element: <Cadeau />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
