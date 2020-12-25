import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";
import { useStateValue } from "../../Context/StateProvider";
import { actionTypes } from "../../Context/reducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <div className="login-box">
      <ToastContainer position="bottom-left" />
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            name=""
            required="true"
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
  );
}

export default Login;
