import React from "react";
import Mainbanner from "./Mainbanner";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Mainbanner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;
