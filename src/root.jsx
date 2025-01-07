import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/Recuperação_Senha/FromRecuperacao";
//import Home from "./pages/Home/app";
import MenuLayout from "./pages/Tela_chatbot/FormLogin";
import GerenciamentoMedico from "./pages/Ger.Medico/Ger.Medico";

const router = createBrowserRouter([

  {
    path: "/recuperação_de_senha",
    element: <RecSenha />,
  },
  {
    path: "/chatbot",
    element: <MenuLayout />,
  },

  {
    path: "/GerenciamentoMedico",
    element: <GerenciamentoMedico />,
  }
]);

export function Root() {
  return <RouterProvider router={router} />;
}
