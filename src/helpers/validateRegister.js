 const validate = (values) => {
    let errors = {};
    const regexEmail = /^(?!.{41})[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,22}$/
    const regexName = /^[^\W_](?!.*?[._]{2})[\w.]{3,10}[^\W_]$/

    if (!regexName.test(values.name)) {
      errors.name = 'Nombre debe tener min 3 y max 10 LETRAS'
    }else if (!values.name || values.name === "") {
      errors.name = "Tu nombre es requerido";
    }

    if (!values.email || values.email === "") {
      errors.email = "Correo requerido";
    }
     else if (!values.email.includes("@")) {
      errors.email = "@ es requerido";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Esto no es un formato de email valido";
    } 



    if (!values.password) {
      errors.password = "Contraseña es requerida";
    } else if (values.password.length < 7) {
      errors.password = "La contraseña debe tener al menos 8 caracteres. Prueba con otra. ";
    } 
    else if(!regexPassword.test(values.password || values.password2)){
      errors.password = 'Contrasena min 8 y max 22 y una letra caracteres. Prueba con otra.'
    }

    if (!values.password2) {
      errors.password2 = "Contraseña es requerida";
    }
    else if (values.password2 !== values.password) {
      errors.password2 = "Contraseñas no coinciden";
    }else {
      errors =false
    }
    
    return errors;
  };
  export default validate
