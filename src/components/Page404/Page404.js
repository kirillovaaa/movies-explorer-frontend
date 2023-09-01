import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <main className="page-error">
      <section>
        <h1 className="page-error__title">404</h1>
        <p className="page-error__subtitle">Страница не найдена</p>
      </section>

      <button
        type="button"
        className="page-error__back-button"
        onClick={handleClickBack}
      >
        Назад
      </button>
    </main>
  );
};

export default Page404;
