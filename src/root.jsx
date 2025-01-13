import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecSenha from "./pages/Recuperação_Senha/FormRecuperacao";
import MenuLayout from "./pages/Tela_chatbot/FormLogin";
import Home from "./pages//Home/Home";
import ProfileEdit from "./pages/EditProfile/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recuperação_de_senha",
    element: <RecSenha />,
  },
  {
    path: "/chatbot",
    element: <MenuLayout />,
  },
  {
    path: "/profile_edit",
    element: <ProfileEdit />,
  },
]);

export function Root() {
  return <RouterProvider router={router} />;
}
