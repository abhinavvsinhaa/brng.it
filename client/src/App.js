import Navigation from "./components/Navigation/Navigation";
import CalenderProvider from "./context/CalanderProvider";
import "./api/Interceptor/index";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Private from "./components/protectedRoute";
import Error from "./components/Error";
import { useEffect } from "react";
import PersistLogin from "./components/persistLogin";

function App() {
  useEffect(() => {}, []);

  return (
    <CalenderProvider>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PersistLogin />}>
            <Route path="/" element={<Private Component={Navigation} />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </CalenderProvider>
  );
}

export default App;
