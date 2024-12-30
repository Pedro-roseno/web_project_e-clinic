import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/Recuperação_Senha/FormRecuperacao.jsx";
//import Home from "./pages/Home/app";
import MenuLayout from "./pages/Tela_chatbot/app";

const router = createBrowserRouter([

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
