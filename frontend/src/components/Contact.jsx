import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      className="container my-5 p-4 rounded"
      style={{ backgroundColor: "#111", color: "white" }}
    >
      {/* Heading */}
      <h2 className="text-center mb-4 fw-bold">Get in Touch</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <p className="text-center lead mb-4">
            Feel free to reach out to me for{" "}
            <span className="text-info fw-semibold">collaboration</span> or just a friendly chat!
          </p>

          {/* Contact List */}
          <ul className="list-unstyled fs-5">
            {/* Email */}
            <li className="d-flex align-items-center mb-3">
              <FaEnvelope className="me-3 fs-3 text-info" />
              <a
                href="khanamir991197.com"
                className="text-white text-decoration-none"
              >
                khanamir991197.com
              </a>
            </li>

            {/* LinkedIn */}
            <li className="d-flex align-items-center mb-3">
              <FaLinkedin className="me-3 fs-3 text-info" />
              <a
                href="https://www.linkedin.com/in/amirkhan9523/"
                className="text-white text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/amirkhan9523
              </a>
            </li>

            {/* GitHub */}
            <li className="d-flex align-items-center mb-3">
              <FaGithub className="me-3 fs-3 text-info" />
              <a
                href="https://github.com/Amirkhan991197"
                className="text-white text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Amirkhan991197
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
