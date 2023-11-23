import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Root from "./components/Root.jsx";
import Home from "./pages/Home.jsx";


function main() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Accueil />,
        },
        {
          path: "/Home",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default main;