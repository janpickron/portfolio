import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
