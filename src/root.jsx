import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gerenagendamento from "./pages/Agendamento/FormAgenda";



const router = createBrowserRouter([
  

  {
    path: "/Agendamento",
    element: <Gerenagendamento />,
  },
 


]);

export function Root() {
  return <RouterProvider router={router} />;
}
