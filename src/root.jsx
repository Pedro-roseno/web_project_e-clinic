import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/Recuperação_Senha/FormRecuperacao";
//import Home from "./pages/Home/app";
import MenuLayout from "./pages/Tela_chatbot/FormLogin";

import Gerenagendamento from "./pages/Geren_Agendas/FormAgenda";
import  Detalhes  from "./components/Detalhes/Formdetalhes";

const router = createBrowserRouter([
  {
    path: "/Detalhes",
    element: <Detalhes />,
  },
  {
    path: "/Geren_Agendas",
    element: <Gerenagendamento />,
  },
  {
    path: "/recuperação_de_senha",
    element: <RecSenha />,
  },
  {
    path: "/chatbot",
    element: <MenuLayout />,
  },
]);

export function Root() {
  return <RouterProvider router={router} />;
}
