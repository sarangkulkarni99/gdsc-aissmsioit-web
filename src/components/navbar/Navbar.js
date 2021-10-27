import React from "react";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import "./Navbar.css";

const Navbar = () => {
  const toggle = () => {
    const mainNav = document.getElementById("main-ul");
    if (mainNav.style.display === "none") mainNav.style.display = "block";
    else mainNav.style.display = "none";
  };

  const responsive = (media) => {
    const mainNav = document.getElementById("main-ul");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    if (media.matches) {
      mainNav.style.display = "block";
      hamburgerIcon.classList.remove("d-none");
    } else {
      mainNav.style.display = "flex";
      hamburgerIcon.classList.add("d-none");
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);

  return (
    <header className="header">
      <h1 className="logo">
        <NavLink className="gdsc-icon" to="/">
          GDSC IOIT
          <MenuOpenIcon
            onClick={toggle}
            className={window.screen.width < 800 ? "" : "d-none"}
            id="hamburger-icon"
          />
        </NavLink>
      </h1>
      <ul id="main-ul" className="main-nav">
        <li>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/workshops">
            Workshops
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/technologies">
            Technologies
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/team">
            Team
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/community">
            Community
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/getintouch">
            Get in touch
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/beamember">
            Be a member
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
