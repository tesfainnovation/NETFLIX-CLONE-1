import React, { useState } from "react";
import NetflixLogo from "../../assets/images/NetflixLogo.png"; // Full Netflix logo
import "./header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            {/* Large logo for desktop */}
            <li className="logo-large">
              <img src={NetflixLogo} alt="Netflix Logo" width="120" />
            </li>
            {/* Small logo for mobile - external URL */}
            <li className="logo-small">
              <a href="/" aria-label="Go to homepage">
                <img
                  src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
                  alt="N Logo"
                  width="80"
                />
              </a>
            </li>
            {/* Navigation links */}
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li>
              <ion-icon name="search-outline"></ion-icon>
            </li>
            <li>
              <ion-icon name="notifications-outline"></ion-icon>
            </li>
            <li>
              <ion-icon name="person-circle-outline"></ion-icon>
            </li>
            <li>
              <ion-icon name="caret-down-outline"></ion-icon>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <ion-icon
            name={isSidebarOpen ? "close-outline" : "menu-outline"}
          ></ion-icon>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen  && (
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
