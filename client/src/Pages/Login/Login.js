import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";
import { useStateValue } from "../../Context/StateProvider";
import { actionTypes } from "../../Context/reducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    color: "white",
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    marginTop: "20%",
    marginLeft: "20%",
  },
}));

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const baseUrl = "http://localhost:3001";
  const [state, dispatch] = useStateValue();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const login = () => {
    Axios.post(`${baseUrl}/login`, {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        return toast("Invalid Username/Password", { type: "error" });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: response.data,
        });
      }
    });
  };
  const register = () => {
    Axios.post(`${baseUrl}/register`, {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      // if (response.data.message) {
      //   return toast(" User already exists", { type: "error" });
      // }
      if (response.data.err) {
        return toast(" User already exists", { type: "error" });
      }
    });
  };

  const admin = () => {
    Axios.post(`${baseUrl}/admin`, {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        return toast("Invalid Username/Password", { type: "error" });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: response.data,
        });
      }
    });
  };

  return (
    <div className={classes.root}>
      <ToastContainer position="bottom-center" />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {" "}
        <Tab label="Login" {...a11yProps(0)} />
        <Tab label="Register" {...a11yProps(1)} />
        <Tab label="Admin Login" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className=" login-box login-box-1">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                required="true"
                name=""
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name=""
                required="true"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <btn className="login-btn" onClick={login}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </btn>
          </form>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="login-box login-box-2">
          <h2>Register</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                name=""
                required="true"
                onChange={(e) => setUsernameReg(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name=""
                required="true"
                onChange={(e) => setPasswordReg(e.target.value)}
              />
              <label>Password</label>
            </div>
            <btn className="login-btn" onClick={register}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Register
            </btn>
          </form>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className=" login-box login-box-3">
          <h2>Admin Login</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                required="true"
                name=""
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name=""
                required="true"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <btn className="login-btn" onClick={admin}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </btn>
          </form>
        </div>
      </TabPanel>
    </div>
  );
}

export default Login;
