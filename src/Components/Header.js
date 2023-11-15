import React, { useState } from "react";
import logo from "../logo.svg";
import HamburgerMenu from "./HamburgerMenu";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [jobPosition, setJobPosition] = useState("Front End Developer");

  const changeJobPosition = () => {
    if (jobPosition === "Front End Developer") {
      setJobPosition("Full Stack Developer");
    } else {
      setJobPosition("Front End Developer");
    }
  };
  
  return (
    <nav >
      <img src={logo} className="nav-logo-header" alt="React Logo" onClick={scrollToTop} />
     
      <Link
        className="nav-item-janice-pickron"
        activeClass="active"
        smooth
        spy
        offset={-70}
        duration={500}
        onClick={scrollToTop}
        to="home"
      >  Janice Pickron | {jobPosition}
      </Link>
      <div className={`nav-content ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="nav-item">
            <Link
              activeClass="active"
              smooth
              spy
              offset={-70}
              duration={500}
              to="about"
              onClick={changeJobPosition}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              smooth
              spy
              offset={-70}
              duration={500}
              onClick={changeJobPosition}
              to="skill"
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              smooth
              spy
              offset={-70}
              duration={500}
              onClick={changeJobPosition}
              to="project"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              smooth
              spy
              offset={-70}
              duration={500}
              to="contact"
              onClick={changeJobPosition}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <HamburgerMenu toggleMenu={toggleMenu} />
    </nav>
  );
};
export default Header;
