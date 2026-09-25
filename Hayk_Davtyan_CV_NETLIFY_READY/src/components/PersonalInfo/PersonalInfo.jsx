import React from "react";
import img from "/images/joh.jpg";
import "./style_pers.css"

export default function PersonalInfo({ content }) {
  return (
      <div className="name">
        <h1>{content.name}</h1>
        <h2>{content.profession}</h2>
        <div className="Contact">
          <p>Contact</p>
          <ul>
            <li>Phone: {content.contact.phone}</li>
            <li>Address: {content.contact.address}</li>
            <li>Email: {content.contact.email}</li>
            <li>
              GitHub:{" "}
              <a href={content.contact.github} target="_blank" rel="noopener noreferrer">
                {content.contact.github}
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
}
