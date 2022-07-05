import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Private = ({ Component }) => {
  const { auth, setAuth } = useAuth();
  console.log(auth.isAuthenticated);
  return auth.isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default Private;
