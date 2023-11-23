import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Accueil from "./pages/Accueil.jsx";
// import Root from "./components/Root.jsx";
// import ListCadeaux from "./components/ListCadeaux.jsx";
import Home from "./pages/Home.jsx";
import ReactDOM from "react-dom/client";
// import Cadeau from "./components/Cadeau.jsx";
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
