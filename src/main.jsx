import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Accueil from "./pages/Accueil.jsx";
// import Root from "./components/Root.jsx";
import ReactDOM from "react-dom/client";
import Cadeau from "./components/Cadeau.jsx";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
