import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="flexItem">
          <a href="/" className="link">
            <img
              className="image"
              src={process.env.PUBLIC_URL + "/FindHotel.svg"}
              alt="logo"
            />
          </a>
        </div>
        <div className="flexItem" />
      </div>
    </header>
  );
};
