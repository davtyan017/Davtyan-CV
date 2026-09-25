import React from "react";
import "./style_edu.css";

export default function Education({ content }) {
  return (
    <section className="cv-education">
      <p>Education</p>
      <ul>
        {content.map((item, index) => (
          <li key={index} className="education-item">
            <span className="degree">{item.degree || item.certificate}</span>
            <span className="duration">{item.duration || item.details}</span>
            <span className="institution">
              {item.institution || item.organization}
            </span>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
}
