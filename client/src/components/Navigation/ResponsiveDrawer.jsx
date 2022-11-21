import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShareIcon from "@mui/icons-material/Share";
import GroupIcon from "@mui/icons-material/Group";
import LinkIcon from "@mui/icons-material/Link";
import ParkIcon from "@mui/icons-material/Park";
import FaceIcon from '@mui/icons-material/Face';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';

import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { ListItemSecondaryAction } from "@mui/material";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import GoogleLogin from "react-google-login";
import { axiosIgnoreInterceptor, axiosPrivate } from "../../api/axios";
import openNotificationWithIcon from "../../util/openNotificationWithIcon";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { auth,setAuth } = React.useContext(AuthContext);
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const onSuccessLogin = async (userData) => {
    const name = userData.profileObj.name;
    const userEmail = userData.profileObj.email;
    const userPassword = userData.googleId;

    // if google email matches with user email, which he logged in with
    if (userEmail == auth.user.email) {
      try {
        
        // if matches then put google verified at wisestamp as true
        await axiosIgnoreInterceptor.post('/users', {
          isGoogleVerifiedAtWisestamp: true
        })
        
        const res = await axiosIgnoreInterceptor.patch("/auth/login-google", {
          name,
          email:userEmail,
          password:userPassword+'-'+userEmail,
        });
        setAuth({ ...res?.data, isAuthenticated: true });
        localStorage.setItem("refresh", res?.data?.tokens?.refresh?.token);
        axiosPrivate.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res?.data?.tokens?.access?.token}`;
        navigate("/");
      } catch (err) {
        setgoogleError(true);
        openNotificationWithIcon('error','',err?.response?.data?.message)
        setError(err?.response?.data?.message);
      }
    }

    else {
      openNotificationWithIcon("error", "Email doesn't matches with the email user logged in with. Please login with the same email")
    }
    
  }

  const onFailureLogin = (res) => {
    console.log(res);
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        {/* <Link to="/" style={{ color: "inherit" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link> */}
        <Link to="/" style={{ color: "inherit" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText primary="Share" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/team" style={{ color: "inherit" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary="Team Members" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/channels/connect" style={{ color: "inherit" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Channels" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/linktree" style={{ color: "inherit" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ParkIcon />
              </ListItemIcon>
              <ListItemText primary="Linktree" />
            </ListItemButton>
          </ListItem>
        </Link>
        {
          !auth.user.isGoogleVerifiedAtWisestamp ?
            <Link style={{ color: "inherit" }}>
              <ListItem disablePadding>
                <ListItemButton>
                <GoogleLogin
                clientId="222485917665-4ma4th0jf3188rs0kr590va1a0395qtb.apps.googleusercontent.com"
                
                buttonText="Sign in with Google"
                render={renderProps=>(
                  <div className="grid grid-cols-[auto_1fr]" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <ListItemIcon>
                    <ExclamationCircleIcon color="red" width={'25px'} />
                  </ListItemIcon>
                  <ListItemText primary="Wisestamp" />
                  </div>
                )}
                onSuccess={onSuccessLogin}
                onFailure={onFailureLogin}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
                </ListItemButton>
              </ListItem>
            </Link>
            :
            <Link to="/wisestamp" style={{ color: "inherit" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Wisestamp" />
                </ListItemButton>
              </ListItem>
            </Link>
        }
        <Link to="/url" style={{ color: "inherit" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="URL Shortener" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/profile" style={{ color: "inherit" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: 'white'
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "64px",
              backgroundColor: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
