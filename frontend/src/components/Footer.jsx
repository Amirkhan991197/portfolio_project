import React from "react";
import { Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <Container>
        {/* ✅ Footer Navigation Links */}
        <Nav className="justify-content-center mb-3">
          {["home", "about", "skills", "projects", "certifications", "contact"].map(
            (section, index) => (
              <Nav.Link
                key={index}
                href={`#${section}`}
                className="text-light mx-3 footer-link"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            )
          )}
        </Nav>

        {/* ✅ Copyright */}
        <p className="mb-0">
          © {new Date().getFullYear()} <strong>Amir Khan</strong>. All rights reserved.
        </p>
      </Container>

      {/* ✅ Hover Effect Styling */}
      <style>{`
        .footer-link {
          transition: color 0.3s ease, text-decoration 0.3s ease;
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
