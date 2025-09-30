import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const sectionStyle = {
  padding: "80px 10vw",
  background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
  fontFamily: "sans-serif",
};

const cardStyle = {
  background: "rgba(30, 30, 30, 0.9)",
  border: "1px solid white",
  borderRadius: "20px",
  padding: "30px",
  marginBottom: "30px",
  boxShadow: "0 0 20px rgba(130,69,236,0.3)",
  width: "100%",
  maxWidth: "500px",
};

const headingStyle = {
  textAlign: "center",
  color: "white",
  fontSize: "36px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const subHeadingStyle = {
  textAlign: "center",
  color: "gray",
  fontSize: "18px",
  marginBottom: "40px",
};

const categoryTitleStyle = {
  textAlign: "center",
  color: "#ccc",
  fontSize: "24px",
  marginBottom: "20px",
};

const skillsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
};

const skillBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  border: "1px solid gray",
  borderRadius: "30px",
  padding: "10px 14px",
  minWidth: "120px",
  fontSize: "14px",
  color: "lightgray",
  backgroundColor: "rgba(50,50,50,0.6)",
};

const Skills = () => {
  return (
    <section id="skills" style={sectionStyle}>
      {/* Section Title */}
      <div>
        <h2 style={headingStyle}>SKILLS</h2>
        <div
          style={{
            width: "100px",
            height: "3px",
            backgroundColor: "#8245ec",
            margin: "auto",
          }}
        ></div>
        <p style={subHeadingStyle}>
          Highlighting my professional skills and tools for business development and sales.
        </p>
      </div>

      {/* Skill Categories */}
      <div style={skillsContainerStyle}>
        {SkillsInfo.map((category) => (
          <div key={category.title} style={cardStyle}>
            <h3 style={categoryTitleStyle}>{category.title}</h3>
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                  gap: "15px",
                }}
              >
                {category.skills.map((skill) => (
                  <div key={skill.name} style={skillBoxStyle}>
                    {skill.name}
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
