import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/RecuperaçãodeSenha/FormRecuperacao";
import Home from "./pages/Home/Home";
import ProfileEdit from "./pages/EditProfile/EditProfile";


import Forms from "./pages/CadastroLogin/Forms";
import Cadastro from "./pages/CadastroLogin/Cadastro";

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
    path: "/login",
    element: <Forms />,
  },
  {
    path: "/profile_edit",
    element: <ProfileEdit />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);

export function Root() {
  return <RouterProvider router={router} />;
}
