import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_desc">
          <h1>JSSATE</h1>
          <p>JSS ACADEMY OF TECHNICAL EDUCATION BENGALURU</p>
          <p id="phone">305 - 123 - 4567</p>
        </div>
        <div className="footer_links">
          <h2 className="footer_title">About JSSATE</h2>
          <a
            href="https://jssateb.ac.in/faculty-list/"
            target="blank"
            className="footer_link"
          >
            Faculty List of All Dept
          </a>
          <a
            href="https://jssateb.ac.in/nirf-details/"
            target="blank"
            className="footer_link"
          >
            NIRF Details
          </a>
          <a
            href="https://jssateb.ac.in/campus-life/clubs/verve/"
            target="blank"
            className="footer_link"
          >
            VERVE
          </a>
          <a
            href="https://jssateb.ac.in/admission/"
            target="blank"
            className="footer_link"
          >
            Admission
          </a>
        </div>
      </div>
      <div id="footer" className="footer_wrapper">
        <div className="footer_links">
          <h2 className="footer_title">Placements</h2>
          <a
            href="https://jssateb.ac.in/placements/"
            target="blank"
            className="footer_link"
          >
            Placements
          </a>
          <a
            href="https://jssateb.ac.in/placements/campus-placement/"
            target="blank"
            className="footer_link"
          >
            Campus Placements
          </a>
          <a
            href="https://jssateb.ac.in/placements/additional-placements/"
            target="blank"
            className="footer_link"
          >
            Additional Placements
          </a>
        </div>
        <div className="footer_links">
          <h2 className="footer_title">Get in Touch</h2>
          <a
            href="https://jssateb.ac.in/"
            target="blank"
            className="footer_link"
          >
            JSSATEB
          </a>
          <a
            href="https://www.facebook.com/JSSATEBlore"
            target="blank"
            className="footer_link"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/watch?v=MRw-MADIXe0"
            target="blank"
            className="footer_link"
          >
            Youtube
          </a>
          <a
            href="https://twitter.com/jssateb"
            target="blank"
            className="footer_link"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
