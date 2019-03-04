import React from "react";
import "./styles.scss";
import Logo from "../../assets/vFR1Q.png";

const Header = props => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
