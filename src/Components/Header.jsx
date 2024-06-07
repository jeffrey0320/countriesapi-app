import React from "react";
import moonLogo from "../moon-regular.svg";

const Header = () => {
  return (
    <div className="navbar">
      <p className="logoP">Where in the world?</p>
      <div className="colorMode">
        <button className="modeBtn">
          <img src={moonLogo} />
        </button>
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
