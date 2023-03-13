import React, { Fragment } from "react";

import logo from "../../assets/images/logo-white.png";
import instagram from "../../assets/images/instagram.png";
import fb from "../../assets/images/fb.png";
import clasess from "./Footer.module.scss";

const Footer = () => {
  const handlerSubmit = () => {
    console.log("Hello From the client side");
  };
  return (
    <Fragment>
      <div className={clasess.background}></div>
      <div className={clasess.container}>
        <div className={clasess["container-links"]}>
          <img src={logo} alt="logo"></img>
          <div>
            <span>Treatments</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        <div className={clasess["container-newsletter"]}>
          <h3>Sign up for our Newsletter</h3>
          <div className={clasess["container-newsletter__form"]}>
            <form>
              <input
                placeholder="Email"
                required
                autoComplete="off"
                type="email"
                id="email"
              ></input>
              <button type="submit" onClick={handlerSubmit}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className={clasess["container-social"]}>
          <a href="https://www.instagram.com/aboutme.tj/">
            <img src={instagram} alt="Icon 1"></img>
          </a>
          <a href="https://www.facebook.com/Aboutme.medspa">
            <img src={fb} alt="Icon 2"></img>
          </a>
        </div>
        <span>© 2023 AboutMe. All Rights Reserved.</span>
      </div>
    </Fragment>
  );
};

export default Footer;
