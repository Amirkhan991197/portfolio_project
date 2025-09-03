import { useEffect, useState } from "react";
import axios from "axios";

function Certifications() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/certifications/")
      .then((response) => {
        setCertifications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching certifications:", error);
      });
  }, []);

  return (
    <div
      id="certifications"
      className="container my-5"
      style={{ scrollMarginTop: "100px" }}
    >
      <h1 className="text-center text-dark mb-4">My Certifications</h1>

      <div className="row">
        {certifications.map((cert) => (
          <div key={cert.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-lg bg-dark text-light border-0">
              <img
                src={cert.image}
                className="card-img-top"
                alt={cert.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-info">{cert.title}</h5>
                <p className="card-text text-muted">{cert.provider}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info mt-auto"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
