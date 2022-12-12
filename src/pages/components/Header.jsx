import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-300 py-5 text-white flex justify-around text-lg font-bold">
      <Link to="/">
        {" "}
        <h1>Home</h1>
      </Link>

      <Link to="/about">
        {" "}
        <h1>About</h1>
      </Link>
      <Link to="/contacts">
        {" "}
        <h1>Contact</h1>
      </Link>
      <Link to="/details">
        {" "}
        <h1>Details</h1>
      </Link>
    </div>
  );
};

export default Header;
