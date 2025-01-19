import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RecSenha from "./pages/RecuperaçãodeSenha/FormRecuperacao";
import ChatbotScreen from "./pages/Chatbot/chatbot";
import Home from "./pages//Home/Home";
import ProfileEdit from "./pages/EditProfile/EditProfile";
import Especialidades from "./pages/Especialidades/Especialidades";
import Gerenagendamento from "./pages/Agendamento/FormAgenda";

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
    element: <ChatbotScreen />,
  },
  {
    path: "/Agendamento",
    element: <Gerenagendamento />,
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
