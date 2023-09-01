import React from "react";
import "./Field.css";

const Field = ({ label, errorMessage, ...props }) => {
  return (
    <div className="auth__input-wrapper">
      <span className="auth__input-label">{label}</span>

      <input
        className={`auth__input ${errorMessage ? "auth__input_error" : ""}`}
        {...props}
      />

      {errorMessage ? (
        <span className="auth__input-label auth__input-label_error">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};

export default Field;
