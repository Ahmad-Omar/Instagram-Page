import React from "react";
import "./style.css";
import img from "./../../../assets/1.jpg";

function Header() {
  return (
    <header>
      <div className="header-container">
        <i className="fas fa-camera"></i>
        <div className="search">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div className="profile-section">
          <div className="profile-pic">
            <img src={img} alt="profile-pic" />
          </div>
          <div className="profile-info">
            <h5 className="profile-name">Emma Watson</h5>
            <span>Actress, Model</span>
            <span>Paris, France</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
