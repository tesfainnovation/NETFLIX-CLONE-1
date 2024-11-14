import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-youtube"></ion-icon>
        </div>

        <div className="footer_data">
          <div>
            <ul>Audio Description</ul>
            <ul>Investor Relations</ul>
            <ul>Legal Notices</ul>
          </div>

          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms Of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="service_code">
          <p>Service Code</p>
        </div>

        <div className="footer_copyright">&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
