import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1 className="animate-hero">JSSATE</h1>
        <p className="animate-hero">Placement Management System</p>

        {/* <Link to="/login" className="button animate-hero">
          Signin
        </Link> */}
      </div>
    </div>
  );
}

export default Hero;
