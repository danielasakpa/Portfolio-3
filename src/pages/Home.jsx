import React, { useEffect, useState } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import MovingText from "../components/MovingText";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3400);

    return () => clearTimeout(timeout);
  }, []);

  const isMobile = window.innerWidth <= 1023;

  return (
    <div>
      {loading && isMobile ? (
        <LoadingScreen />
      ) : (
        <>
          {" "}
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
      )}
    </div>
  );
}

export default Home;
