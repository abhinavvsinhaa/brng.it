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
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import { initGapi } from "./util/gapi";

function App() {
  // const {getAliases,putAliases} = useGapi();
  useEffect(() => {
    initGapi();
  }, []);
  return (
    <CalenderProvider>
      <div className="app">
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/app/login" element={<Login />} />
            <Route path="/app/signup" element={<SignUp />} />
            <Route path="/app/termsofservice" element={<PrivacyPolicy />} />
          </Route>
          <Route path="/t/:uid" element={<TreeUrlRedirect />} />
          <Route path="/:uid" element={<UrlRedirect />} />
          <Route element={<PersistLogin />}>
            {/* <Route path="/" element={<Private Component={Calender} />} /> */}
            <Route path="/app/channels" element={<Private Component={Channel} />} />
            <Route path="/app/profile" element={<Private Component={Profile} />} />
            <Route
              path="/app/channels/connect"
              element={<Private Component={ConnectNewChannel} />}
            />
            <Route path="/app/linktree" element={<TreeTabs />} />
            <Route path="/app/url" element={<UrlTabs />} />
            <Route path="/app" element={<Private Component={Share} />} />
            <Route path="/app/wisestamp" element={<WiseStamp />} />
            <Route path="/app/team" element={<Team />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </CalenderProvider>
  );
}

export default App;
