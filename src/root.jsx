import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/RecuperaçãodeSenha/FormRecuperacao";
import Home from "./pages/Home/Home";
import ProfileEdit from "./pages/EditProfile/EditProfile";
import Especialidades from "./pages/Especialidades/Especialidades";

import {AdminViews} from "./pages/AdminViews/index";
import {AdminConsultasViews} from "./pages/AdminViews/AdminConsultasViews/AdminConsultasViews";
import {AdminEspecialidadesViews} from "./pages/AdminViews/AdminEspecialidadesViews/AdminEspecialidadesViews";
import {AdminMedicosViews} from "./pages/AdminViews/AdminMedicosViews/AdminMedicosViews";
import {AdminPacientesViews} from "./pages/AdminViews/AdminPacientesViews/AdminPacientesViews";


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
