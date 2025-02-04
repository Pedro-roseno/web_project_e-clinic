import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/RecuperaçãodeSenha/FormRecuperacao";
import Home from "./pages/Home/Home";
import ProfileEdit from "./pages/EditProfile/EditProfile";

import {AdminViews} from "./pages/AdminViews/index";
import {AdminConsultasViews} from "./pages/AdminViews/AdminConsultasViews/AdminConsultasViews";
import {AdminEspecialidadesViews} from "./pages/AdminViews/AdminEspecialidadesViews/AdminEspecialidadesViews";
import {AdminMedicosViews} from "./pages/AdminViews/AdminMedicosViews/AdminMedicosViews";
import {AdminPacientesViews} from "./pages/AdminViews/AdminPacientesViews/AdminPacientesViews";

import { MedicosViews } from "./pages/MedicoViews/MedicoConsultasViews/MedicoConsultasViews";

import { PacientesViews } from "./pages/PacientesViews/PacientesConsultasViews/PacientesConsultasViews";

import { FormLogin } from "../src/pages/FormLogin/FormLogin";

import { FormCadastro } from "./pages/FormCadastro/FormCadastro";

import { TestIcons } from "./components/ActionButtons/testicon";


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
    path: "/adminViews",
    element: <AdminViews/>,
    children:[
      {
        
        index: true,
        element: <AdminEspecialidadesViews/>,
      },
      {
        path:"consultas",
        element: <AdminConsultasViews/>
      },
      {
        path:"medicos",
        element: <AdminMedicosViews/>
      },
      {
        path:"pacientes",
        element: <AdminPacientesViews/>
      },

    ]
  },
  {
    path: "/medicoViews",
    element: <MedicosViews />,
  },
  {
    path: "/pacientesViews",
    element: <PacientesViews />,
  },
  {
    path: "/formLogin",
    element: <FormLogin />,
  },
  {
    path: "/formCadastro",
    element: <FormCadastro />,
  },
  {
    path: "/profile_edit",
    element: <ProfileEdit />,
  },
  {
    path: "/testicons",
    element: <TestIcons />,
  },
]);

export function Root() {
  return <RouterProvider router={router} />;
}
