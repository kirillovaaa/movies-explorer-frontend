import React from "react";
import "./Page404.css";

function Page404() {
  return (
    <section className="page-error">
      <h1 className="page-error__title">404</h1>
      <p className="page-error__subtitle">Страница не найдена</p>

      <button className="page-error__link">Назад</button>
    </section>
  );
}

export default Page404;
