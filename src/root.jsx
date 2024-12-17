import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/Recuperação_Senha/App";
// import MenuLayout from "./pages/Tela_chatbot/app";
const router = createBrowserRouter([
  {
    path: "/recuperação_de_senha",
    element: <RecSenha />,
  }
]);

export function Root() {

  return (
    <RouterProvider router={router}/>
  )
}

