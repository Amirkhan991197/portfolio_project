import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects/")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to fetch projects");
        setLoading(false);
      });
  }, []);

  // Loading UI
  if (loading) {
    return (
      <div className="text-center text-light my-5">
        <div className="spinner-border text-info" role="status"></div>
        <p className="mt-2">Loading Projects...</p>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="text-center text-danger my-5">
        <p>{error}</p>
      </div>
    );
  }

  // Main render
  return (
    <div
      id="projects"
      className="container my-5"
      style={{ scrollMarginTop: "100px" }} // Prevent navbar overlap
    >
      <h1 className="text-center text-dark mb-4">My Projects</h1>

      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-lg bg-dark text-light border-0 hover-card">
              {/* Project Image */}
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />

              {/* Project Details */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-info">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info mt-auto"
                  >
                    View Project
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

export default Projects;
