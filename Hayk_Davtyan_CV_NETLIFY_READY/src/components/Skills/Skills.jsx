import React from "react";
import "./style_skil.css";

export default function Skills({ content }) {
  return (
    <section className="cv-skills">
      <p>Skills</p>
      <div>
        <i>Hard Skills</i>
        <ul>
          {content["Hard Skills"].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <i>Soft Skills</i>
        <ul>
          {content["Soft Skills"].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
