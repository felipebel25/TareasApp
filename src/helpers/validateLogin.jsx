const validateLogin = (values) => {
  let errors = {};
  const regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

  if (!values.email || values.email === "") {
    errors.email = "Email is required";
  } else if (!values.email.includes("@")) {
    errors.email = "@ is required";
  } else if (!regexEmail.test(values.email)) {
    errors.email = "This is not a valid Email format";
  }
  if (!values.password) {
    errors.password = "Contraseña es requerida";
  }
  return errors;
};

export default validateLogin;
