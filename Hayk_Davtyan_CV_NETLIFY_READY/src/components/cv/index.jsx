import React, { useEffect, useState } from "react";
import "./styles.css";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import ProfessionalSummary from "../ProfessionalSummary/ProfessionalSummary";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

export default function CV() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);


  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const personalInfo = data.find(
    (item) => item.section === "Personal Information"
  )?.content;
  const professionalSummary = data.find(
    (item) => item.section === "Professional Summary"
  )?.content;
  const education = data.find((item) => item.section === "Education")?.content;
  const skills = data.find((item) => item.section === "Skills")?.content;
  const projects = data.find((item) => item.section === "Projects")?.content;

  return (
    <div className="container">
      <header>{personalInfo && <PersonalInfo content={personalInfo} />}</header>
      <section className="cv-sections">
        {professionalSummary && (
          <ProfessionalSummary content={professionalSummary} />
        )}
        {education && <Education content={education} />}
        {skills && <Skills content={skills} />}
        {projects && <Projects content={projects} />}
      </section>
    </div>
  );
}

