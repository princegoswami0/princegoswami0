import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      style={{
        padding: "80px 8vw",
        background: "linear-gradient(to bottom right, #0f051d, #1f0a35)",
      }}
    >
      {/* Section Title */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "36px", color: "white" }}>EDUCATION</h2>
        <div
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: "#8245ec",
            margin: "10px auto",
          }}
        ></div>
        <p
          style={{
            color: "gray",
            fontSize: "16px",
            maxWidth: "600px",
            margin: "auto",
          }}
        >
          Here are the details of my academic background.
        </p>
      </div>

      {/* Vertical Line */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            backgroundColor: "white",
            top: "0",
            bottom: "0",
          }}
        ></div>

        {/* Timeline Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            style={{
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
              marginBottom: "40px",
              position: "relative",
            }}
          >
            {/* Card */}
            <div
              style={{
                backgroundColor: "#111827",
                border: "1px solid white",
                padding: "20px",
                borderRadius: "18px",
                boxShadow: "0 0 20px rgba(130, 69, 236, 0.3)",
                width: "100%",
                maxWidth: "500px",
                marginLeft: index % 2 === 0 ? "30px" : "0",
                marginRight: index % 2 !== 0 ? "30px" : "0",
              }}
            >
              {/* Top Info */}
              <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ color: "white", margin: "0", fontSize: "20px" }}>
                    {edu.degree}
                  </h3>
                  <h4 style={{ color: "gray", margin: "4px 0", fontSize: "13px" }}>
                    {edu.school}
                  </h4>
                  <p style={{ color: "gray", margin: "0", fontSize: "12px" }}>
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  color: "gray",
                  marginTop: "10px",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
