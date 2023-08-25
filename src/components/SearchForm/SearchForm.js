import React, { useState } from "react";
import iconSearch from "../../images/icon-search.svg";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  const [filterEnabled, setFilterEnabled] = useState(false);

  const handleToggleFilter = () => {
    setFilterEnabled(!filterEnabled);
  };

  return (
    <form className="search-form">
      <div className="search-form__input-wrapper">
        <input
          className="search-form__input"
          type="text"
          name="password"
          placeholder="Фильм"
          required={true}
        />

        <button type="submit" className="search-form__button-search">
          <img
            src={iconSearch}
            className="search-form__icon-image"
            alt="Иконка поиска"
          />
        </button>
      </div>

      <FilterCheckbox isEnabled={filterEnabled} onToggle={handleToggleFilter} />
    </form>
  );
};

export default SearchForm;
