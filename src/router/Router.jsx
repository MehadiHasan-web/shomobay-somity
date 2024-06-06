import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import MyLoan from "../pages/MyLoan";
import Users from './../pages/Users';
// import Register from "../pages/Register";
import Register from "../pages/Register2";
import Loan from "../pages/Loan";
import LoneList from "../pages/LoneList";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/register",
        // element: <Register></Register>,
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/myloan',
        element: <MyLoan></MyLoan>
      },
      {
        path: '/loan',
        element: <Loan></Loan>
      },
      {
        path: '/loan-list',
        element: <LoneList />,
      }
    ],
  },

]);