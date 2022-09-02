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
import UrlTabs from "./components/UrlFront/Tabs";
import TreeTabs from "./components/UrlFront/TreeTabs";
import UrlRedirect from "./components/UrlRedirectPage/UrlRedirect";
import TreeUrlRedirect from "./components/TreeUrlRedirect/TreeUrlRedirect";
import WiseStamp from "./components/WiseStamp/WiseStamp";

import "./App.css";
import Share from "./components/Share/Share";
import WithNav from "./components/WithNav";
import Team from "./components/Team/Team";

function App() {
  useEffect(() => {}, []);

  return (
    <CalenderProvider>
      <div className="app">
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/tree/:uid" element={<TreeUrlRedirect />} />
          <Route path="url/:uid" element={<UrlRedirect />} />
          <Route element={<PersistLogin />}>
            <Route path="/" element={<Private Component={Calender} />} />
            <Route path="/channels" element={<Private Component={Channel} />} />
            <Route path="/profile" element={<Private Component={Profile} />} />
            <Route
              path="/channels/connect"
              element={<Private Component={ConnectNewChannel} />}
            />
            <Route path="/linktree" element={<TreeTabs />} />
            <Route path="/url" element={<UrlTabs />} />
            <Route path="/share" element={<Share />} />
            <Route path="/wisestamp" element={<WiseStamp />} />
            <Route path='/team' element={<Team />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </CalenderProvider>
  );
}

export default App;
