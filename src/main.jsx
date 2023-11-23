import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Accueil from "./pages/Accueil.jsx";
// import Root from "./components/Root.jsx";
import ListCadeaux from "./components/ListCadeaux.jsx";
import ReactDOM from "react-dom/client";
// import Cadeau from "./components/Cadeau.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ListCadeaux",
    element: <ListCadeaux />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
