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
          <a href="/services.html" className="footer_link">
            Contact
          </a>
          <a href="/services.html" className="footer_link">
            Support
          </a>
          <a href="/services.html" className="footer_link">
            Sponsorships
          </a>
        </div>
      </div>
      <div id="footer" className="footer_wrapper">
        <div className="footer_links">
          <h2 className="footer_title">People</h2>
          <a href="/services.html" className="footer_link">
            Alumni Survey
          </a>
          <a href="/services.html" className="footer_link">
            Alumni
          </a>
          <a href="/services.html" className="footer_link">
            Women Cell
          </a>
        </div>
        <div className="footer_links">
          <h2 className="footer_title">Social Media</h2>
          <a href="/services.html" className="footer_link">
            Instagram
          </a>
          <a href="/services.html" className="footer_link">
            Facebook
          </a>
          <a href="/services.html" className="footer_link">
            Youtube
          </a>
          <a href="/services.html" className="footer_link">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
