import { Fragment, useState, useEffect } from "react";
import bkg1 from "../../assets/images/bkg.jpg";
import bkg2 from "../../assets/images/bkg2.jpg";
import clasess from "./Background.module.scss";

const Background = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < 1) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setIndex(0);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Fragment>
      <img
        src={index === 0 ? bkg1 : bkg2}
        alt="Background"
        className={clasess.image}
      ></img>
      <div className={clasess.layer}></div>
      <div className={clasess["dots-container"]}>
        {index === 0 ? (
          <div className={clasess["dot-selected"]}>&nbsp;</div>
        ) : (
          <div className={clasess.dot}>&nbsp;</div>
        )}

        {index === 1 ? (
          <div className={clasess["dot-selected"]}>&nbsp;</div>
        ) : (
          <div className={clasess.dot}>&nbsp;</div>
        )}
      </div>
    </Fragment>
  );
};

export default Background;
