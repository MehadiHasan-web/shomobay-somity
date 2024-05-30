import { createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import MyLoan from "../pages/MyLoan";
import Users from './../pages/Users';
import Loan from "../pages/Loan";
import UserRegister from "../pages/UserRegister";
import Register from "../pages/Register";




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
        path: "/user-register",
        element: <UserRegister></UserRegister>,
      },
      
      {
        path: '/myloan',
        element: <MyLoan></MyLoan>
      },
      {
        path: '/loan',
        element: <Loan></Loan>
      }
    ],
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
]);