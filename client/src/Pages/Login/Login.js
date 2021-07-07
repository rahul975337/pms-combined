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
  const [usn, setUsn] = useState("");
  const [pass, setPass] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  /* eslint-disable */
  const baseUrl = "http://localhost:3001";
  const [{ userState }, dispatchUser] = useStateValue();
  const [{ adminState }, dispatchAdmin] = useStateValue();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const login = () => {
    Axios.post(`${baseUrl}/login`, {
      usn: usn,
      pass: pass,
    }).then((response) => {
      if (response.data.message) {
        return toast("Invalid Username/Password", { type: "error" });
      } else {
        dispatchUser({
          type: actionTypes.SET_USER,
          user: response.data,
        });
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");
      }
    });
  };
  const register = () => {
    Axios.post(`${baseUrl}/register`, {
      usn: usernameReg,
      pass: passwordReg,
    }).then((response) => {
      if (response.data.err) {
        return toast(" User already exists", { type: "error" });
      } else if (response.data.message) {
        return toast("", { type: "error" });
      } else if (response.data) {
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");
        return toast(" Succesfully Registered", { type: "success" });
      }
    });
  };

  const adminLogin = () => {
    Axios.post(`${baseUrl}/admin`, {
      email: adminEmail,
      pass: adminPass,
    }).then((response) => {
      if (response.data.message) {
        return toast("Invalid Username/Password", { type: "error" });
      } else {
        dispatchAdmin({
          type: actionTypes.SET_ADMIN,
          admin: response.data,
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
          <h2>Student Login</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                required="true"
                name=""
                onChange={(e) => setUsn(e.target.value)}
              />
              <label>USN</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name=""
                required="true"
                onChange={(e) => setPass(e.target.value)}
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
              <label>USN</label>
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
                onChange={(e) => setAdminEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name=""
                required="true"
                onChange={(e) => setAdminPass(e.target.value)}
              />
              <label>Password</label>
            </div>
            <btn className="login-btn" onClick={adminLogin}>
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
