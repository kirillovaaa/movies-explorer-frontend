import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ value, onCheck }) => {
  return (
    <div className="search-form__toggle-wrapper">
      <button
        type="submit"
        className={
          value
            ? "search-form__button-switch search-form__button-switch_on"
            : "search-form__button-switch"
        }
        onClick={onCheck}
      ></button>

      <span className="search-form__toggle-text">Короткометражки</span>
    </div>
  );
};

export default FilterCheckbox;
