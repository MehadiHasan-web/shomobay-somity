import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const PrivateRoute = ({children}) => {

  const token = localStorage.getItem('token')
  const {user, loading} = useAuth();
  const location = useLocation()

  if(!loading){
    return <p>loading...</p>
  }

  if(!user && !token){
    return <Navigate to="/login" state={{form: location}} replace></Navigate>
  }
  
  return children
};

export default PrivateRoute;