import React from "react";
import { Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <Container>
        {/* Footer Nav Links */}
        <Nav className="justify-content-center mb-3">
          <Nav.Link href="#home" className="text-light mx-3 footer-link">
            Home
          </Nav.Link>
          <Nav.Link href="#projects" className="text-light mx-3 footer-link">
            Projects
          </Nav.Link>
          <Nav.Link href="#certifications" className="text-light mx-3 footer-link">
            Certifications
          </Nav.Link>
          <Nav.Link href="#about" className="text-light mx-3 footer-link">
            About
          </Nav.Link>
          <Nav.Link href="#contact" className="text-light mx-3 footer-link">
            Contact
          </Nav.Link>
        </Nav>

        {/* Copyright */}
        <p className="mb-0">
          © {new Date().getFullYear()} Amir Khan. All rights reserved.
        </p>
      </Container>

      {/* Hover Effect */}
      <style>{`
        .footer-link {
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #0dcaf0;
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
