import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import MyLoan from "../pages/MyLoan";
// import Register from "../pages/Register";
import Register from "../pages/Register2";
import Loan from "../pages/Loan";
import LoneList from "../pages/LoneList";
import PrivateRoute from './../privateRoute/PrivateRoute';
import Society from "../pages/Society";
import LoanInstallment from "../pages/LoanInstallment";
import Installment from "../pages/Installment";
import InstallmentCreate from "../pages/InstallmentCreate";
import LoanInstallmentCreate from "../pages/LoanInstallmentCreate";
import MainLayout from "../layout/MainLayout";
import Profile from "../pages/Profile";




export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: "/",
    element: <PrivateRoute> <MainLayout /> </PrivateRoute>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/register",
        // element: <Register></Register>,
        element: <Register></Register>,
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
      },
      {
        path: '/society',
        element: <Society />,
      },
      {
        path: '/loanInstallment',
        element: <LoanInstallment />,
      },
      {
        path: '/loanInstallment-create',
        element: <LoanInstallmentCreate />,
      },
      {
        path: '/installment-create',
        element: <InstallmentCreate />,
      },
      {
        path: '/installment',
        element: <Installment />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },

]);