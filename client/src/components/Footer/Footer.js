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
          <h2 className="footer_title">Contact Us</h2>
          <p className="footer_link">Contact</p>
          <p className="footer_link">Support</p>
          <p className="footer_link">Sponsorships</p>
        </div>
      </div>
      <div id="footer" className="footer_wrapper">
        <div className="footer_links">
          <h2 className="footer_title">People</h2>
          <p className="footer_link">Alumni Survey</p>
          <p className="footer_link">Alumni</p>
          <p className="footer_link">Women Cell</p>
        </div>
        <div className="footer_links">
          <h2 className="footer_title">Social Media</h2>
          <p className="footer_link">Instagram</p>
          <p className="footer_link">Facebook</p>
          <p className="footer_link">Youtube</p>
          <p className="footer_link">Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
