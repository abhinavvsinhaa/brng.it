import { useEffect } from "react";
import CalenderProvider from "./context/CalanderProvider";
import "./api/Interceptor/index";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Private from "./components/protectedRoute";
import Error from "./components/Error";
import PersistLogin from "./components/persistLogin";
import Channel from "./components/Channel/Channel";
import Navbar from "../src/components/Layout/Navbar";
import Calender from "./components/CalenderV1/Calender";
import ConnectNewChannel from "./components/Channel/ConnectNewChannel";
import Profile from "./components/Profile/Profile";
import UrlFront from "./components/UrlFront/UrlFront";
import UrlRedirect from "./components/UrlRedirectPage/UrlRedirect";
import TreeUrlRedirect from "./components/TreeUrlRedirect/TreeUrlRedirect";

import "./App.css";
import Share from "./components/Share/Share";
import LinkTree from "./components/UrlFront/LinkTree";

function App() {
  useEffect(() => {}, []);

  return (
    <CalenderProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PersistLogin />}>
            <Route path="/" element={<Private Component={Calender} />} />
            <Route path="/channels" element={<Private Component={Channel} />} />
            <Route path="/profile" element={<Private Component={Profile} />} />
            <Route
              path="/channels/connect"
              element={<Private Component={ConnectNewChannel} />}
            />
            <Route path="/share" element={<Share />} />
            <Route path="*" element={<Error />} />
            <Route path="/tree/:uid" element={<TreeUrlRedirect />} />
            <Route path="/linktree" element={<LinkTree />} />
            <Route path="/url" element={<UrlFront />} />
            <Route path="url/:uid" element={<UrlRedirect />} />
          </Route>
        </Routes>
      </div>
    </CalenderProvider>
  );
}

export default App;
