import React from "react";
import computer_pad from "../computer-pad.png";
import logo from "../logo.svg";

const Home = () => {
  return (
    <div className={"section-dark"} id="home">
      <div className={"section-content"}>
        <p className="intro">
          Hi, my name is Janice.{" "}
          <img src={logo} className="nav-logo" alt="Logo" /> I code, design, and
          build.{" "}
        </p>
        {/* <p className="code-design-build">I CODE, DESIGN, and BUILD</p> */}
        <img src={computer_pad} alt="Janice" className="computer_pad" />
      </div>
    </div>
  );
};

export default Home;
