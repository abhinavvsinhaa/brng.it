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
import Channel from "./components/Channel/Channel";
import ResponsiveNavbar from '../src/components/Layout/Navbar'
import Navbar from "../src/components/Layout/Navbar";
import Calender from "./components/CalenderV1/Calender";
import ConnectNewChannel from "./components/Channel/ConnectNewChannel";
import './App.css'

function App() {
  useEffect(() => {}, []);

  return (
    <CalenderProvider>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PersistLogin />}>
            <Route path="/dashboard" element={<Private Component={Calender} />} />
            <Route path="/dashboard/channels" element={<Channel />} />
            <Route path="/channels/connect" element={<ConnectNewChannel/>} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </CalenderProvider>
  );
}

export default App;
