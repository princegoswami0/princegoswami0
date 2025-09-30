import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        background: "#0f051d",
        color: "#ccc",
        padding: "50px 10vw",
        borderTop: "1px solid #555",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" }, 
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#ccc",
                fontSize: "14px",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#a855f7")}
              onMouseOut={(e) => (e.target.style.color = "#ccc")}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/princegoswami0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ccc",
              fontSize: "20px",
              transition: "transform 0.3s, color 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#a855f7";
              e.target.style.transform = "scale(1.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "#ccc";
              e.target.style.transform = "scale(1)";
            }}
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            href="mailto:prince00goswami@gmail.com"
            style={{
              color: "#ccc",
              fontSize: "22px",
              transition: "transform 0.3s, color 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#a855f7";
              e.target.style.transform = "scale(1.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "#ccc";
              e.target.style.transform = "scale(1)";
            }}
          >
            <MdEmail />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/prince_goswa.mi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ccc",
              fontSize: "22px",
              transition: "transform 0.3s, color 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#a855f7";
              e.target.style.transform = "scale(1.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "#ccc";
              e.target.style.transform = "scale(1)";
            }}
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div style={{ fontSize: "12px", color: "#777", textAlign: "center" }}>
          © 2025 Prince Goswami. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
