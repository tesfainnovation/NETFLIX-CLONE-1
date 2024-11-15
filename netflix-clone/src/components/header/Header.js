import React from "react";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
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
              <ion-icon name="notifications-outline"></ion-icon>{" "}
            </li>
            <li>
              <ion-icon name="person-circle-outline"></ion-icon>{" "}
            </li>
            <li>
              <ion-icon name="caret-down-outline"></ion-icon>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
