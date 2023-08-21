import React from "react";
import "./SearchForm.css";
import iconSearch from "../../images/icon-search.svg";

const SearchForm = () => {
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

        <button type="button" className="search-form__button-search">
          <img
            src={iconSearch}
            className="search-form__icon-image"
            alt="Иконка поиска"
          />
        </button>
      </div>

      <div className="search-form__short-wrapper">
        <button type="button" className="search-form__button-switch"></button>
        <span className="search-form__text">Короткометражки</span>
      </div>

      <div className="search-form__line"></div>
    </form>
  );
};

export default SearchForm;
