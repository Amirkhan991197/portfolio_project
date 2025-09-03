import React, { useEffect, useState } from "react";
import AppNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./projects";
import Skills from "./Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import Certifications from "./Certifications";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";  // bootstrap css import

function App() {
  const [darkMode, setDarkMode] = useState(true); // ✅ Dark mode state

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
     <AppNavbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
