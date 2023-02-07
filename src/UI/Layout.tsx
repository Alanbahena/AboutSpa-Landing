import React from "react";
import clasess from "./Layout.module.scss";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return <div className={clasess.container}>{props.children}</div>;
};

export default Layout;
