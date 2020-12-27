import React from "react";
import { FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";
import { actionTypes } from "../../Context/reducer";
import { useStateValue } from "../../Context/StateProvider";
import "./Nav.css";

function Nav() {
  const [user, dispatchUser] = useStateValue();
  const [admin, dispatchAdmin] = useStateValue();
  const logout = () => {
    dispatchUser({
      type: actionTypes.SET_USER,
      user: null,
    });
    dispatchAdmin({
      type: actionTypes.SET_ADMIN,
      admin: null,
    });
  };
  return (
    <nav className="navbar">
      <Link to="/" className="navbar_logo">
        JSS
        <FaUniversity style={{ color: "#f9032f", margin: "2px" }} />
      </Link>

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
