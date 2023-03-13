import React, { Fragment } from "react";

import Doctor1 from "../../assets/images/Dr.jpg";

import clasess from "./Doctors.module.scss";

const Doctors = () => {
  return (
    <Fragment>
      <div className={clasess.background}></div>
      <div className={clasess.container} id="#doctors">
        <div className={clasess["container-content"]}>
          <img src={Doctor1} alt="Doctor"></img>
          <div>
            <h3>DR.MIGUEL MAGAÑA</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
          </div>
        </div>
        <div className={clasess["container-content"]}>
          <div>
            <h3>DR.MIGUEL MAGAÑA</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
          </div>
          <img src={Doctor1} alt="Doctor"></img>
        </div>
      </div>
      <div className={clasess["container-2"]}>
        <div className={clasess["container-content"]}>
          <img src={Doctor1} alt="Doctor"></img>
          <div>
            <h3>DR.MIGUEL MAGAÑA</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
          </div>
        </div>
        <div className={clasess["container-content"]}>
          <div>
            <h3>DR.MIGUEL MAGAÑA</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
          </div>
          <img src={Doctor1} alt="Doctor"></img>
        </div>
      </div>
    </Fragment>
  );
};

export default Doctors;
