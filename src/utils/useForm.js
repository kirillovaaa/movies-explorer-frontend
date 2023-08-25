import { useState } from "react";

const useForm = () => {
  // значения полей ({ 'name': 'abc', 'password': '1234' })
  const [values, setValues] = useState({});
  // ошибки ({ 'name': 'ошибка 1', 'password': null })
  const [errors, setErrors] = useState({});

  // проверять валидность формы
  const checkValidity = () => {
    // вызвать проверку валидности формы
    // setErrors({
    //     ...errors,
    //     [name]: error,
    // })
  };

  // обработчик поля
  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };

  return {
    values,
    errors,
    handleChange,
  };
};

export default useForm;
