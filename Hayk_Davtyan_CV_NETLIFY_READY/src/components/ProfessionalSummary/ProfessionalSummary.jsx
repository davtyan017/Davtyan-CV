import React from "react";
import "./style_summ.css"

export default function ProfessionalSummary({ content }) {
  return (
    <section className="cv-summary">
      <p>Professional Summary</p>
      <span>{content}</span>
    </section>
  );
}
