import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../images/image1.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie Here</div>
      </Link>
      <div className="user-image">
        <img src={image1} alt="user" />
      </div>
    </div>
  );
};

export default Header;
