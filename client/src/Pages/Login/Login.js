import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-box">
      <Route path="/login">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <Link to="/">
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
