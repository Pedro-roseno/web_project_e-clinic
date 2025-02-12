import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/RecuperaçãodeSenha/FormRecuperacao";
import Home from "./pages/Home/Home";
import EditProfile from "./pages/EditProfile/EditProfile";
import Perfil from "./pages/Perfil/Perfil";

import {AdminViews} from "./pages/AdminViews/index";
import {AdminConsultasViews} from "./pages/AdminViews/AdminConsultasViews/AdminConsultasViews";
import {AdminMedicosViews} from "./pages/AdminViews/AdminMedicosViews/AdminMedicosViews";

import { MedicoViews } from "./pages/MedicoViews/index";

import { PacienteViews } from "./pages/PacienteViews/index";

import { FormCadastro } from "./pages/FormCadastro/FormCadastro";

import { FormLogin } from "./pages/FormLogin/FormLogin";

import {Agendamento} from "./pages/Agendamento/FormAgendamento"

import {Especialidade} from "./pages/Especialidade/FormEspecialidade"

import { TestIcons } from "./components/ActionButtons/testicon";
import { FormLoginMedico } from "./FormLoginMedico/FormLoginMedico";


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
        element: <AdminMedicosViews/>,
      },
      {
        path:"consultas",
        element: <AdminConsultasViews/>
      },
    ]
  },
  {
    path: "/medicoViews",
    element: <MedicoViews/>,
  },
  {
    path: "/pacienteViews",
    element: <PacienteViews/>,
  },
  {
    path: "/formLogin",
    element: <FormLogin />,
  },
  {
    path: "/formLoginMedicos",
    element: <FormLoginMedico />,
  },
  {
    path: "/formCadastro",
    element: <FormCadastro />,
  },
  {
    path: "/editProfile",
    element: <EditProfile />,
  },  
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/testicons",
    element: <TestIcons />,
  },
  {
    path: "/agendamento",
    element: < Agendamento/>,
  },
  {
    path: "/Especialidade",
    element: < Especialidade/>,
  },
]);

export function Root() {
  return <RouterProvider router={router} />;
} 