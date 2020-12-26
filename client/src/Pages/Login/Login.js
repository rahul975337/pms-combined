import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";
import { useStateValue } from "../../Context/StateProvider";
import { actionTypes } from "../../Context/reducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const baseUrl = "http://localhost:3001";
  const [state, dispatch] = useStateValue();

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
    })
      .then((response) => {
        if (response.data.message) {
          return toast(" User already exists", { type: "error" });
        }
        // if (response.data.err) {
        //   return toast(" User already exists", { type: "error" });
        // }
      })
      .catch(toast(" User already exists", { type: "error" }));
  };

  return (
    <div className="login-page">
      <ToastContainer position="bottom-left" />
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
    </div>
  );
}

export default Login;
