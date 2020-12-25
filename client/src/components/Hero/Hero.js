// import { Button } from "@material-ui/core";

import React from "react";
// import { actionTypes } from "../../reducer";
// import { useStateValue } from "../../StateProvider";
import "./Hero.css";
import Typewriter from "typewriter-effect";

function Hero() {
  // const [state, dispatch] = useStateValue();
  // const logout = () => {
  //   dispatch({
  //     type: actionTypes.SET_USER,
  //     user: null,
  //   });
  // };
  return (
    <div className="hero">
      <div className="hero_content">
        <h1 className="animate-hero">JSSATE</h1>
        <p className="animate-hero">
          <Typewriter
            options={{
              strings: [
                "Placement Management System",
                "Developed by Rahul & Shivang",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </p>

        {/* <btn className="button " onClick={logout}>
          Logout
        </btn> */}
      </div>
    </div>
  );
}

export default Hero;
