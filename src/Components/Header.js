import React from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav">
      <img src={logo} className="nav-logo" alt="React Logo" onClick={scrollToTop} />
      <Link
        className="nav-item-janice-pickron"
        activeClass="active"
        smooth
        spy
        offset={-70}
        duration={500}
        onClick={scrollToTop}
        to="home"
      >
        {" "}
        Janice Pickron | Full Stack/Front End Developer
      </Link>
      <div className="nav-content">
        <ul>
          <li className="nav-item">
            <Link
              activeClass="active"
              smooth
              spy
              offset={-60}
              duration={500}
              to="about"
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
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
