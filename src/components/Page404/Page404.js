import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <section className="page-error">
      <h1 className="page-error__title">404</h1>
      <p className="page-error__subtitle">Страница не найдена</p>

      <button className="page-error__back-button" onClick={handleClickBack}>
        Назад
      </button>
    </section>
  );
};

export default Page404;
