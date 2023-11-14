// HamburgerMenu.js
import React from "react";
import { FaBars } from "react-icons/fa";

const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <div className="hamburger-menu" onClick={toggleMenu}>
      <FaBars />
    </div>
  );
};

export default HamburgerMenu;
