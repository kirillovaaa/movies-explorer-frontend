import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="section-header">О проекте</h2>

      <ul className="about-project__table">
        <li className="about-project__table-cell">
          <h2 className="about-project__table-heading">
            Дипломный проект включал 5 этапов
          </h2>

          <p className="about-project__table-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>

        <li className="about-project__table-cell">
          <h2 className="about-project__table-heading">
            На выполнение диплома ушло 5 недель
          </h2>

          <p className="about-project__table-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <div className="about-project__plans">
        <div className="about-project__plan about-project__plan_current">
          <span className="about-project__plan-item">1 неделя</span>
          <span className="about-project__plan-item">4 недели</span>
        </div>

        <div className="about-project__plan">
          <span className="about-project__plan-item">Back-end</span>
          <span className="about-project__plan-item">Front-end</span>
        </div>
      </div>
    </section>
  );
};
export default AboutProject;
