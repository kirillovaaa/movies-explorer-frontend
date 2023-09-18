import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";
import fieldLabels from "../../constants/fieldLabels";
import textLabels from "../../constants/textLabels";

const Profile = ({ onSubmit, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    getValues,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  useEffect(() => {
    checkValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const checkValidity = () => {
    const { name, email } = getValues();
    if (name === currentUser.name && email === currentUser.email) {
      setError("root", { message: fieldLabels.validationMessages.formEmpty });
    } else {
      clearErrors("root");
    }
  };

  const handleChangeWithReset = (e) => {
    if (isSubmitSuccessful) {
      reset({}, { keepValues: true });
    }
    if (errors.response) {
      clearErrors("response");
    }
    checkValidity();
    return e.target.value;
  };

  return (
    <main className="profile">
      <form
        className="profile__form"
        onSubmit={handleSubmit(async (data) => {
          document.activeElement.blur();
          try {
            await onSubmit(data);
          } catch (e) {
            setError("response", {
              message: textLabels.profile.messages.error,
            });
          }
        })}
      >
        <section className="profile__top">
          <h1 className="profile__welcome">
            {textLabels.profile.welcome(currentUser.name)}
          </h1>

          <div className="profile__container">
            <div className="profile__field">
              <span>{fieldLabels.name.label}</span>
              <input
                {...register("name", {
                  onChange: handleChangeWithReset,
                  required: {
                    value: !isSubmitting,
                    message: fieldLabels.validationMessages.required,
                  },
                  minLength: {
                    value: 2,
                    message: fieldLabels.validationMessages.minLength(2),
                  },
                  maxLength: {
                    value: 30,
                    message: fieldLabels.validationMessages.maxLength(30),
                  },
                })}
                placeholder={fieldLabels.name.placeholder}
                className="profile__field-input"
                type="text"
                disabled={isSubmitting}
                autoComplete="name"
              />
            </div>

            <div className="profile__field-divider"></div>

            <div className="profile__field">
              <span>{fieldLabels.email.label}</span>
              <input
                {...register("email", {
                  onChange: handleChangeWithReset,
                  required: {
                    value: !isSubmitting,
                    message: fieldLabels.validationMessages.required,
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: fieldLabels.validationMessages.email,
                  },
                })}
                placeholder={fieldLabels.email.placeholder}
                className="profile__field-input"
                type="text"
                disabled={isSubmitting}
                autoComplete="email"
              />
            </div>
          </div>
        </section>

        <div className="profile__buttons">
          <div className="profile__messages-wrapper">
            {isSubmitSuccessful && (
              <span className="profile__message">
                {textLabels.profile.messages.success}
              </span>
            )}
            {errors.name?.message && (
              <span className="profile__message profile__message_error">
                {fieldLabels.name.label}: {errors.name.message}
              </span>
            )}
            {errors.email?.message && (
              <span className="profile__message profile__message_error">
                {fieldLabels.email.label}: {errors.email.message}
              </span>
            )}
            {errors.response?.message && (
              <span className="profile__message profile__message_error">
                {errors.response.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="profile__button"
            disabled={
              errors.email ||
              errors.name ||
              errors.root ||
              errors.response ||
              isSubmitting
            }
          >
            {textLabels.profile.actions.submit}
          </button>

          <button
            type="button"
            className="profile__button profile__button_destructive"
            onClick={onLogout}
          >
            {textLabels.profile.actions.logout}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
