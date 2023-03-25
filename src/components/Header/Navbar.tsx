import React from "react";
import logo from "../../assets/images/logo-white.png";
import Button from "../../UI/Button";

import clasess from "./Navbar.module.scss";

const NavBar = () => {
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

  return (
    <div className={clasess.container}>
      <img src={logo} alt="Logo"></img>
      <ul className={clasess.list}>
        <li className={clasess.item} onClick={handleClickTreatments}>
          Treatments
        </li>
        <li className={clasess.item} onClick={handleClickDoctors}>
          Doctors
        </li>
        <li className={clasess.item} onClick={handleClickContact}>
          Contact
        </li>
        <Button href="https://wa.me/526633218306" chidlren="Book Now"></Button>
      </ul>
    </div>
  );
};

export default NavBar;
