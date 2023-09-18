import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page404.css";
import textLabels from "../../constants/textLabels";

const Page404 = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <main className="page-error">
      <section>
        <h1 className="page-error__title">{textLabels.page404.title}</h1>
        <p className="page-error__subtitle">{textLabels.page404.subtitle}</p>
      </section>

      <button
        type="button"
        className="page-error__back-button"
        onClick={handleClickBack}
      >
        {textLabels.page404.actions.back}
      </button>
    </main>
  );
};

export default Page404;
