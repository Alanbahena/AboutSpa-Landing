import React from "react";
import logo from "../../assets/images/logo-white.png";
import Button from "../../UI/Button";

import clasess from "./Navbar.module.scss";

const NavBar = () => {
  return (
    <div className={clasess.container}>
      <img src={logo} alt="Logo"></img>
      <ul className={clasess.list}>
        <li className={clasess.item}>
          <a href="/" className={clasess.link}>
            Treatments
          </a>
        </li>
        <li className={clasess.item}>
          <a href="/" className={clasess.link}>
            About
          </a>
        </li>
        <li className={clasess.item}>
          <a href="/" className={clasess.link}>
            Contact
          </a>
        </li>
        <Button href="/" chidlren="Book Now"></Button>
      </ul>
    </div>
  );
};

export default NavBar;
