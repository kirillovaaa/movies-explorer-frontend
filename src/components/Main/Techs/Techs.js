import React from "react";
import "./Techs.css";
import textLabels from "../../../constants/textLabels";

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <h2 className="section-header">{textLabels.main.techs.header}</h2>
      <h3 className="techs__title">{textLabels.main.techs.title}</h3>

      <p className="techs__subtitle">{textLabels.main.techs.subtitle}</p>

      <ul className="techs__items">
        {textLabels.main.techs.items.map((item) => (
          <li key={item.id} className="techs__item">
            {item.value}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Techs;
