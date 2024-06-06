import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

  //user
  const [user, setUser] = useState(null)

  // loading
  const [loading, setLoading] = useState(true)

  //Base Url
  const baseUrl = "http://somobay.xcode.com.bd/api/v1"

  // const authIn
  const authInfo = {user, setUser, loading, setLoading, baseUrl}


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;