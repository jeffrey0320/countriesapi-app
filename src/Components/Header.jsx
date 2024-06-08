import React from "react";
import moonLogo from "../moon-regular.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <Link className="logoP" to={"/"}>
        Where in the world?
      </Link>
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
