const validate = (values) => {
  let errors = {};
  const regexEmail = /^(?!.{41})[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z]).{8,22}$/gm;
  const regexName = /^(?=^[^_]+_?[^_]+$)\w{3,11}$/;

  if (!regexName.test(values.name)) {
    errors.name =
      "Nombre con min 3 y max 10 letras sin espacios ni caracteres especiales.";
  } else if (!values.name || values.name === "") {
    errors.name = "Tu nombre es requerido";
  } else if (!values.email || values.email === "") {
    errors.email = "Correo requerido";
  } else if (!values.email.includes("@")) {
    errors.email = "@ es requerido";
  } else if (!regexEmail.test(values.email)) {
    errors.email = "Esto no es un formato de email valido";
  } else if (!values.password) {
    errors.password = "Contraseña es requerida";
  } else if (values.password.length < 7) {
    errors.password =
      "La contraseña debe tener al menos 8 caracteres. Prueba con otra. ";
  } else if (!regexPassword.test(values.password || values.password2)) {
    errors.password = "Contraseña min 8 y max 22 y una letra en mayus.";
  } else if (!values.password2) {
    errors.password2 = "Contraseña es requerida";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Contraseñas no coinciden";
  } else {
    errors = false;
  }

  return errors;
};
export default validate;
