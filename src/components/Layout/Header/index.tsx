import React from "react";
import { ReactComponent as HeaderLogo } from "./header-logo.svg";
import "./index.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <HeaderLogo className="logo" />
      <div className="main-heading">MyPOS</div>
    </header>
  );
};

export default Header;
