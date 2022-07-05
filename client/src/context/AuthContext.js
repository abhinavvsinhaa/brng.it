import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const { data } = useFetch("/auth/me");
  const [auth, setAuth] = useState(data);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
