import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui mini menu">
      <div className="item">
        <Link to="/">
          <h3 className=" header">Streamy</h3>
        </Link>
      </div>
      <div className="right menu">
        <div className="item">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
