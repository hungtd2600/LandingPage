import React, { FC } from "react";
import images from "../../../../public/images";
import "./Navbar.scss";

const Navbar: FC = () => {
  return (
    <section className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src={images.logo} alt="" />
          <p>TheBox</p>
        </div>
        <ul className="navbar-menu">
          <li className="menu-item">
            <a href="o#" className="menu-link">
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="o#" className="menu-link">
              About Us
            </a>
          </li>
          <li className="menu-item">
            <a href="o#" className="menu-link">
              Projects
            </a>
          </li>
          <li className="menu-item">
            <a href="o#" className="menu-link">
              Services
            </a>
          </li>
          <li className="menu-item ">
            <a href="o#" className="menu-link active">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
