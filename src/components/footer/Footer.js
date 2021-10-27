import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              laboriosam mollitia dolor officiis labore consequatur architecto,
              inventore provident blanditiis omnis, nemo, qui amet! Distinctio
              ex repellendus accusantium doloribus? Debitis veniam a dignissimos
              velit esse nostrum tempore dolor unde laboriosam tempora porro
              neque, aliquid ratione qui dolore corrupti vitae officia itaque.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Teams</h6>
            <ul className="footer-links">
              <li>
                <NavLink to="#">Web Team</NavLink>
              </li>
              <li>
                <NavLink to="#">Android Team</NavLink>
              </li>
              <li>
                <NavLink to="#">ML Team</NavLink>
              </li>
              <li>
                <NavLink to="#">Cloud Team</NavLink>
              </li>
              <li>
                <NavLink to="#">Management Team</NavLink>
              </li>
              <li>
                <NavLink to="#">Social Media Team</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <NavLink to="/workshops">Workshops</NavLink>
              </li>
              <li>
                <NavLink to="/technologies">Technologies</NavLink>
              </li>
              <li>
                <NavLink to="/community">Community</NavLink>
              </li>
              <li>
                <NavLink to="/getintouch">Get In Touch</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <NavLink to="#"> GDSC IOIT</NavLink>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <NavLink className="github" to="#">
                  <i className="fa fa-github"></i>
                </NavLink>
              </li>
              <li>
                <NavLink className="facebook" to="#">
                  <i className="fa fa-facebook"></i>
                </NavLink>
              </li>
              <li>
                <NavLink className="instagram" to="#">
                  <i className="fa fa-instagram"></i>
                </NavLink>
              </li>
              <li>
                <NavLink className="linkedin" to="#">
                  <i className="fa fa-linkedin"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
