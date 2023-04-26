import React, { Fragment, useRef } from "react";

import logo from "../../assets/images/logo-white.png";
import instagram from "../../assets/images/instagram.png";
import fb from "../../assets/images/fb.png";
import tik from "../../assets/images/tiktok.png";

import clasess from "./Footer.module.scss";

const Footer = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickTreatments = () => {
    document
      .getElementById("#treatments")!
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleClickDoctors = () => {
    document.getElementById("#doctors")!.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickContact = () => {
    document.getElementById("#contact")!.scrollIntoView({ behavior: "smooth" });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current?.value !== "") {
      inputRef.current!.value = "";
    }
  };

  return (
    <Fragment>
      <div className={clasess.background}></div>
      <div className={clasess.container}>
        <div className={clasess["container-links"]}>
          <img src={logo} alt="logo"></img>
          <div>
            <span onClick={handleClickTreatments}>Treatments</span>
            <span onClick={handleClickDoctors}>About</span>
            <span onClick={handleClickContact}>Contact</span>
          </div>
        </div>
        <div className={clasess["container-newsletter"]}>
          <h3>Sign up for our Newsletter</h3>
          <div className={clasess["container-newsletter__form"]}>
            <form onSubmit={submitHandler}>
              <input
                ref={inputRef}
                placeholder="Email"
                required
                autoComplete="off"
                type="email"
                id="email"
              ></input>
              <button>Sign Up</button>
            </form>
          </div>
        </div>
        <div className={clasess["container-social"]}>
          <a href="https://www.instagram.com/aboutme.tj/">
            <img src={instagram} alt="Icon 1" className={clasess.icons}></img>
          </a>
          <a href="https://www.facebook.com/Aboutme.medspa">
            <img src={fb} alt="Icon 2" className={clasess.icons}></img>
          </a>
          <a href="https://www.tiktok.com/@aboutme.tj">
            <img src={tik} alt="Icon 2" className={clasess.icons}></img>
          </a>
        </div>
        <span>© 2023 AboutMe. All Rights Reserved.</span>
      </div>
    </Fragment>
  );
};

export default Footer;
