import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import MyLoan from "../pages/MyLoan";
import Users from './../pages/Users';
import Register from "../pages/Register";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/myloan',
        element: <MyLoan></MyLoan>
      }
    ],
  },
  
]);