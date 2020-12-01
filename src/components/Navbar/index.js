import React, { Component } from "react";
import instagram_text from "./../../assets/Instagram-logo.svg";
import instagram_logo from "./../../assets/Logo.svg";
import "./style.css";

class Navbar extends Component {
  state = {
    navLinks: [
      {
        liName: "Home",
        liLink: "/",
        liIcon: "fas fa-home",
        isActive: true,
      },
      { liName: "Live", liLink: "/", liIcon: "fas fa-satellite-dish" },
      { liName: "Message", liLink: "/", liIcon: "fas fa-comment-alt" },
      { liName: "Notifications", liLink: "/", liIcon: "fas fa-bell" },
      { liName: "Settings", liLink: "/", liIcon: "fas fa-cog" },
      { liName: "Logout", liLink: "/", liIcon: "fas fa-power-off" },
    ],
  };
  render() {
    const { navLinks } = this.state;
    const navLink = navLinks.map((navLink) => {
      return (
        <li className={`nav-item ${navLink.isActive ? "active" : ""}`}>
          <a href={navLink.liLink}>
            <i className={navLink.liIcon}></i> {navLink.liName}
          </a>
        </li>
      );
    });
    return (
      <div className="navbar">
        <div className="logo">
          <img src={instagram_logo} alt="instagram-logo" width="25" />
          <img
            src={instagram_text}
            alt="instagram-text"
            className="inst-text"
            width="98"
          />
        </div>
        <ul className="nav-items">{navLink}</ul>
      </div>
    );
  }
}

export default Navbar;
