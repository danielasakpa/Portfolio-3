import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import MovingText from "../components/MovingText";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <>
          <Nav />
          <Hero />
          <MovingText />
          <About />
          <MovingText />
          <Projects />
          <MovingText />
          <Skills />
          <MovingText />
          <Contact />
          <Footer />
      </>
    </div>
  );
}

export default Home;
