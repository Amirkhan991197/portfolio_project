import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Amir Khan", "Frontend Developer", "React + Django Enthusiast"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      className="d-flex flex-column justify-content-center align-items-center text-center text-light"
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
      data-aos="fade-in"
    >
      <h1 className="display-3 fw-bold mb-3">
        Hi, I'm <span ref={typedRef} className="text-info" />
      </h1>

      <p className="lead text-light mb-4">
        I build modern, responsive websites using <span className="text-info">React</span> and <span className="text-info">Django</span>.
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        <a href="#projects" className="btn btn-outline-info btn-lg">
          View My Work
        </a>
        <a href="/amirresume.pdf" download className="btn btn-info btn-lg text-light">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
