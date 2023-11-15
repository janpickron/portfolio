import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import "./App.css";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
