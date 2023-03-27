import React from "react";

import image1 from "../../assets/images/Treatment1.jpg";
import clasess from "./Treatments.module.scss";

const Treatments = () => {
  return (
    <div className={clasess.container} id="#treatments">
      <h2>
        OUR <span>TOP</span> TREATMENTS
      </h2>
      <div className={clasess["container--cards"]}>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={image1} alt="" loading="lazy"></img>
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
            <img src={image1} alt="" loading="lazy"></img>
            <h3>TREATMENT 2</h3>
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
            <img src={image1} alt="" loading="lazy"></img>
            <h3>TREATMENT 3</h3>
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
            <img src={image1} alt="" loading="lazy"></img>
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
            <img src={image1} alt="" loading="lazy"></img>
            <h3>TREATMENT 4</h3>
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
            <img src={image1} alt="" loading="lazy"></img>
            <h3>TREATMENT 5</h3>
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
