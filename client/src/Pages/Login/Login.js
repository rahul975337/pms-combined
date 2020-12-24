import React, { useState } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";
import Axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const baseUrl = "http://localhost:3001";

  const login = () => {
    Axios.post(`${baseUrl}/login`, {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    });
  };

  return (
    <div className="login-box">
      <Route path="/login">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <Link {...(isLoggedIn ? { to: "/" } : {})} onClick={login}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </Link>
        </form>
      </Route>
    </div>
  );
}

export default Login;
