import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <BrowserRouter>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                laboriosam mollitia dolor officiis labore consequatur
                architecto, inventore provident blanditiis omnis, nemo, qui
                amet! Distinctio ex repellendus accusantium doloribus? Debitis
                veniam a dignissimos velit esse nostrum tempore dolor unde
                laboriosam tempora porro neque, aliquid ratione qui dolore
                corrupti vitae officia itaque.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Teams</h6>
              <ul className="footer-links">
                <li>
                  <Link href="#">Web Team</Link>
                </li>
                <li>
                  <Link href="#">Android Team</Link>
                </li>
                <li>
                  <Link href="#">PHP</Link>
                </li>
                <li>
                  <Link href="#">Java</Link>
                </li>
                <li>
                  <Link href="#">Android</Link>
                </li>
                <li>
                  <Link href="#">Templates</Link>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Workshops</Link>
                </li>
                <li>
                  <Link href="#">Team</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
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
                <Link href="#"> GDSC IOIT</Link>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <Link className="github" href="#">
                    <i className="fa fa-github"></i>
                  </Link>
                </li>
                <li>
                  <Link className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="instagram" href="#">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default Footer;
