import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Root from "./components/Root.jsx";
import ListCadeaux from "./components/ListCadeaux.jsx";


function main() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          elment: <Accueil />,
        },
        {
          path: "/ListCadeaux",
          element: <ListCadeaux />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default main;