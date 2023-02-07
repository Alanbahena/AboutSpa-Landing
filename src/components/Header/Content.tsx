import { Fragment } from "react";
import Button from "../../UI/Button";
import Background from "./Background";

import clasess from "./Content.module.scss";
import NavBar from "./Navbar";

const Content = () => {
  return (
    <Fragment>
      <Background />
      <div className={clasess.container}>
        <NavBar />
        <div className={clasess["container-text"]}>
          <span>MEDICAL SPA</span>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </h1>
          <Button href="/" chidlren="Book Now" className={clasess.btn}></Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
