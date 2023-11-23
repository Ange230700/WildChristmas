import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import ListCadeaux from "./components/ListCadeaux.jsx";

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
    path: "/ListCadeaux",
    element: <ListCadeaux />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
