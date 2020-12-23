import React from "react";
import { FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
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
      {/* </div> */}
      <div></div>
    </nav>
  );
}

export default Nav;
