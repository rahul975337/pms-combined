import { Button } from "@material-ui/core";
import React from "react";
import { FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

import "./Nav.css";

function Nav() {
  const [state, dispatch] = useStateValue();
  const logout = () => {
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });
  };
  return (
    <nav className="navbar">
      <Link to="/" className="navbar_logo">
        JSS
        <FaUniversity style={{ color: "#f9032f", margin: "2px" }} />
      </Link>

      {/* <div className="navbar_menu"> */}
      <li>
        <Link to="/" className="navbar_link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/companies" className="navbar_link">
          Companies
        </Link>
      </li>
      <li>
        <Link to="/placements" className="navbar_link">
          Placements
        </Link>
      </li>
      <li>
        <btn className="logout-btn" onClick={logout}>
          Logout
        </btn>
      </li>
      <div></div>
    </nav>
  );
}

export default Nav;
