import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import WishList from "./components/WishList.jsx";
import Cadeau from "./components/Cadeau.jsx";
import ListCadeaux from "./components/ListCadeaux.jsx";

const propsToPass = {
  arrayCadeaux: [],
  setArrayCadeaux: () => {},
};

const propsToPass2 = {
  arrayCadeaux: [],
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home {...propsToPass} />,
  },
  {
    path: "/Cadeau",
    element: <Cadeau />,
  },
  {
    path: "/ListCadeaux",
    element: <ListCadeaux {...propsToPass} />,
  },
  {
    path: "/wishlist",
    element: <WishList {...propsToPass2} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
