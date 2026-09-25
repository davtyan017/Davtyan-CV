import React from "react";
import "./Projects.css";

export default function Projects({ content }) {
  return (
    <section className="projects">
      <p>Projects</p>
      <ul>
        {content.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
