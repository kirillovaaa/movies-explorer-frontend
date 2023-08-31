import React from "react";
import iconSearch from "../../images/icon-search.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

const SearchForm = ({
  search,
  isSearchRequired = true,
  shortMovies,
  onChangeSearch,
  onToggleShort,
  onSubmit,
}) => {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <div className="search-form__input-wrapper">
        <input
          value={search}
          onChange={onChangeSearch}
          className="search-form__input"
          name="search"
          placeholder="Фильм"
          required={isSearchRequired}
        />

        <button type="submit" className="search-form__button-search">
          <img
            src={iconSearch}
            className="search-form__icon-image"
            alt="Иконка поиска"
          />
        </button>
      </div>

      <FilterCheckbox
        value={shortMovies}
        onCheck={() => onToggleShort(!shortMovies)}
      />
    </form>
  );
};

export default SearchForm;
