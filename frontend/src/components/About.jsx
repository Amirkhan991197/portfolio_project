function About() {
  return (
    <div
      id="about"
      className="container my-5 p-5 rounded shadow"
      style={{ backgroundColor: "#f8f9fa", color: "#000" }}
    >
      <h2 className="text-center mb-5">About Me</h2>

      <div className="row align-items-center">
        {/* Profile Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="src\assets\portfolio.png"
            alt="Amir Khan"
            className="rounded-circle img-fluid shadow-lg border border-info"
            style={{ width: "220px", height: "220px", objectFit: "cover" }}
          />
        </div>

        {/* About Text */}
        <div className="col-md-8">
          <p className="lead">
            Hello! I'm <b className="text-info">Amir Khan</b>, a passionate{" "}
            <b>Frontend Developer</b> with hands-on experience in building
            responsive and modern web applications using{" "}
            <b>React, Django, Bootstrap, and JavaScript</b>.
          </p>
          <p>
            I enjoy solving real-world problems, writing clean code, and
            constantly learning new technologies to improve my skills.
            My goal is to create web experiences that are{" "}
            <span className="text-info">
              fast, user-friendly, and visually appealing
            </span>.
          </p>

          <a href="#projects" className="btn btn-outline-info mt-3">
            View My Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
