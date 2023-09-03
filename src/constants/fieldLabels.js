const fieldLabels = {
  name: {
    label: "Имя",
    placeholder: "Имя",
  },
  email: {
    label: "E-mail",
    placeholder: "email@email.com",
  },
  password: {
    label: "Пароль",
    placeholder: "password",
  },
  validationMessages: {
    formEmpty: "Форма не заполнена",
    required: "Обязательное поле",
    email: "Укажите валидный e-mail адрес",
    minLength: (n) => `Минимальная длина ${n} символов`,
    maxLength: (n) => `Максимальная длина ${n} символов`,
  },
};

export default fieldLabels;
