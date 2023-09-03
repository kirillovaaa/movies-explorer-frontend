import React from "react";
import "./AboutProject.css";
import textLabels from "../../../constants/textLabels";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="section-header">{textLabels.main.aboutProject.header}</h2>

      <ul className="about-project__table">
        {textLabels.main.aboutProject.projectTable.map((p) => (
          <li key={p.id} className="about-project__table-cell">
            <h3 className="about-project__table-heading">{p.heading}</h3>
            <p className="about-project__table-text">{p.text}</p>
          </li>
        ))}
      </ul>

      <div className="about-project__plans">
        {textLabels.main.aboutProject.plans.map((p) => (
          <div
            key={p.id}
            className={
              p.id === "current"
                ? "about-project__plan about-project__plan_current"
                : "about-project__plan"
            }
          >
            <span className="about-project__plan-item">{p.label}</span>
            <span className="about-project__plan-item">{p.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default AboutProject;
