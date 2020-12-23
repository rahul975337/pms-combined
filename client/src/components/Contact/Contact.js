import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div id="contact" className="email">
      <div className="email_content">
        <h1 className="animate-email">Contact us</h1>
        <p className="animate-email">
          Drop Your Email here we will contact you for back
        </p>
        <form action="#" className="animate-email">
          <div className="form_wrap">
            <label htmlFor="email">
              <input type="text" placeholder="Enter your email" id="email" />
            </label>
            <button className="button" type="submit">
              Contact Me
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
