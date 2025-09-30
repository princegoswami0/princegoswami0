import React from "react";
import { professionalProjects } from "../../constants";

const ProfessionalProjects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 8vw",
        background: "linear-gradient(to bottom right, #0f051d, #1f0a35)",
      }}
    >
      {/* Section Title */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "36px", color: "white" }}>PROFESSIONAL PROJECTS</h2>
        <div
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: "#8245ec",
            margin: "10px auto",
          }}
        ></div>
      </div>

      {/* Projects */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {professionalProjects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: "#111827",
              border: "1px solid white",
              padding: "25px",
              borderRadius: "18px",
              boxShadow: "0 0 20px rgba(130, 69, 236, 0.3)",
              width: "100%",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {/* Top Info */}
            <div style={{ marginBottom: "15px" }}>
              <h3 style={{ color: "#8245ec", margin: "0", fontSize: "22px" }}>
                {project.title}
              </h3>
              <p style={{ color: "white", margin: "4px 0", fontSize: "14px" }}>
                Company: {project.company} | Client: {project.client} | {project.date}
              </p>
            </div>

            {/* Bullet Points Sections */}
            {[
              { title: "Description", items: [project.description] },
              { title: "Challenges", items: project.challenges },
              { title: "Strategies", items: project.strategies },
              { title: "Workflow", items: project.workflow },
              { title: "Achievements", items: project.achievements },
            ].map((section, i) => (
              <div key={i} style={{ marginTop: "12px" }}>
                <h5 style={{ color: "#8245ec", marginBottom: "6px" }}>
                  {section.title}:
                </h5>
                <ul
                  style={{
                    color: "white", // ✅ changed gray → white
                    marginLeft: "20px",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  {section.items.map((item, index) => (
                    <li key={index} style={{ marginBottom: "6px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalProjects;
