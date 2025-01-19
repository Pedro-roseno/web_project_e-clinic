import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/RecuperaçãodeSenha/FormRecuperacao";
import MenuLayout from "./pages/Login/FormLogin";
import Home from "./pages//Home/Home";
import ProfileEdit from "./pages/EditProfile/EditProfile";
import Especialidades from "./pages/Especialidades/Especialidades";
import GerMedico from "./pages/Ger.Medico/Ger.Medico";
import GerPaciente from "./pages/Ger.Paciente/Ger.Paciente";

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

  {
    path: "/gerenciamentomedico",
    element: <GerMedico />,
  },

  {
    path: "/gerenciamentopaciente",
    element: <GerPaciente />,
  }

]);

export function Root() {
  return <RouterProvider router={router} />;
}
