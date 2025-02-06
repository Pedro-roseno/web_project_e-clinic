import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/RecuperaçãodeSenha/FormRecuperacao";
import Home from "./pages/Home/Home";
import ProfileEdit from "./pages/EditProfile/EditProfile";

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