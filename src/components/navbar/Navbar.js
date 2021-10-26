import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <BrowserRouter>
      <header class="header">
        <h1 class="logo">
          <a href="#">GDSC IOIT</a>
        </h1>
        <ul class="main-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Workshops</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Get in touch</a>
          </li>
          <li>
            <a href="#">Be a member</a>
          </li>
        </ul>
      </header>
    </BrowserRouter>
  );
};

export default Navbar;
