import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ isEnabled, onToggle }) => {
  return (
    <div className="search-form__toggle-wrapper">
      <button
        type="button"
        className={
          isEnabled
            ? "search-form__button-switch search-form__button-switch_on"
            : "search-form__button-switch"
        }
        onClick={onToggle}
      ></button>
      <span className="search-form__toggle-text">Короткометражки</span>
    </div>
  );
};

export default FilterCheckbox;
