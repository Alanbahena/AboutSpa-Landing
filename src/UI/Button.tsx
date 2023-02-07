import React from "react";
import clasess from "./Button.module.scss";

interface Props {
  href: string;
  className?: string;
  chidlren?: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <a href={props.href} className={`${clasess.btn} ${props.className}`}>
      {props.chidlren}
    </a>
  );
};

export default Button;
