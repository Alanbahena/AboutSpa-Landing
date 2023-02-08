import React from "react";

import image1 from "../../assets/images/Treatment1.jpg";
import clasess from "./Treatments.module.scss";

const Treatments = () => {
  return (
    <div className={clasess.container}>
      <h2>
        OUR <span>TOP</span> TREATMENTS
      </h2>
      <div className={clasess["container--cards"]}>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={image1} alt=""></img>
            <h3>TREATMENT 1</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={image1} alt=""></img>
            <h3>TREATMENT 1</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={image1} alt=""></img>
            <h3>TREATMENT 1</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={image1} alt=""></img>
            <h3>TREATMENT 1</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={image1} alt=""></img>
            <h3>TREATMENT 1</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={image1} alt=""></img>
            <h3>TREATMENT 1</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
