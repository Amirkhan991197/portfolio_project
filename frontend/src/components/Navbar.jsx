import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Scrollspy from "react-scrollspy";

function AppNavbar({ darkMode, setDarkMode }) {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // ✅ Updated Nav Items
  const navItems = ["home", "about", "skills", "projects", "certifications", "contact"];

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: darkMode
          ? "linear-gradient(90deg, #0d6efd, #0dcaf0)"
          : "linear-gradient(90deg, #f8f9fa, #dee2e6)",
      }}
      className="shadow"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="#home"
          className={darkMode ? "fw-bold text-light" : "fw-bold text-dark"}
          style={{ fontSize: "1.5rem" }}
        >
          Amir Khan
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* ✅ Updated Scrollspy Items */}
          <Nav as="ul" className="mx-auto align-items-center">
            <Scrollspy
              items={navItems}
              currentClassName="active-nav"
              offset={-120}
              componentTag="div"
              className="d-flex flex-row"
            >
              {navItems.map((item) => (
                <Nav.Item as="li" key={item}>
                  <Nav.Link
                    href={`#${item}`}
                    className={`mx-2 fw-semibold nav-link-custom ${
                      darkMode ? "text-light" : "text-dark"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Scrollspy>
          </Nav>

          {/* Right Side Icons + Resume + Toggle */}
          <div className="d-flex align-items-center">
            <a
              href="https://github.com/Amirkhan991197"
              target="_blank"
              rel="noreferrer"
              className={darkMode ? "text-light mx-2 fs-5" : "text-dark mx-2 fs-5"}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/amirkhan9523"
              target="_blank"
              rel="noreferrer"
              className={darkMode ? "text-light mx-2 fs-5" : "text-dark mx-2 fs-5"}
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:khanamir991197@gmail.com"
              className={darkMode ? "text-light mx-2 fs-5" : "text-dark mx-2 fs-5"}
            >
              <FaEnvelope />
            </a>

            {/* Resume Button */}
            <a href="/amirresume.pdf" download>
              <Button
                variant={darkMode ? "light" : "dark"}
                size="sm"
                className="ms-3 fw-bold"
              >
                Download Resume
              </Button>
            </a>

            {/* 🌗 Light/Dark Toggle Button */}
            <Button
              variant={darkMode ? "outline-light" : "outline-dark"}
              size="sm"
              className="ms-3"
              onClick={toggleTheme}
              title="Toggle Light/Dark Mode"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>

      {/* Hover underline CSS */}
      <style>{`
        .nav-link-custom {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link-custom:hover {
          color: ${darkMode ? "#fff" : "#000"} !important;
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0%;
          height: 2px;
          background: ${darkMode ? "#fff" : "#000"};
          transition: width 0.3s ease;
        }

        .nav-link-custom:hover::after {
          width: 100%;
        }

        .active-nav .nav-link-custom {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </Navbar>
  );
}

export default AppNavbar;
