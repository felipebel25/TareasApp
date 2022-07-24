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
      errors.password = "Password is required";
    }
    return errors;

  };

  export default validateLogin