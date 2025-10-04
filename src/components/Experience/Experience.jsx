import React from "react";
import { professionalProjects } from "../../constants";

const ProfessionalProjects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-8 bg-gradient-to-br from-[#0f051d] to-[#1f0a35]"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-white font-bold">PROFESSIONAL PROJECTS</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mt-2"></div>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-10">
        {professionalProjects?.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 border border-white p-6 rounded-xl shadow-[0_0_20px_rgba(130,69,236,0.3)] max-w-3xl mx-auto"
          >
            {/* Top Info */}
            <div className="mb-4">
              <h3 className="text-purple-600 text-xl font-semibold">{project.title}</h3>
              <p className="text-white text-sm mt-1">
                Company: {project.company} | Client: {project.client}{" "}
                {project.date ? `| ${project.date}` : ""}
              </p>
            </div>

            {/* Sections */}
            {[
              { title: "Description", items: project.description ? [project.description] : [] },
              { title: "Challenges", items: project.challenges || [] },
              { title: "Strategies", items: project.strategies || [] },
              { title: "Workflow", items: project.workflow || [] },
              { title: "Achievements", items: project.achievements || [] },
            ].map(
              (section, i) =>
                section.items.length > 0 && (
                  <div key={i} className="mt-3">
                    <h5 className="text-purple-600 mb-1">{section.title}:</h5>
                    <ul className="text-white ml-5 list-disc space-y-1 text-sm">
                      {section.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalProjects;
