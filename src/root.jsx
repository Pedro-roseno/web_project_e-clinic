import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/RecuperaçãodeSenha/FormRecuperacao";
import MenuLayout from "./pages/Login/FormLogin";
import Home from "./pages//Home/Home";
import ProfileEdit from "./pages/EditProfile/EditProfile";
import Especialidades from "./pages/Especialidades/Especialidades";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recuperaçãodesenha",
    element: <RecSenha />,
  },
  {
    path: "/Login",
    element: <MenuLayout />,
  },
  {
    path: "/profile_edit",
    element: <ProfileEdit />,
  },
  {
    path: "/especialidades",
    element: <Especialidades />,
  },
]);

export function Root() {
  return <RouterProvider router={router} />;
}
