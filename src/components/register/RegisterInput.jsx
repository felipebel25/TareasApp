import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerApi from "../../apis/pushRegisterApi";
import validateRegister from "../../helpers/validateRegister";
// import Input from "./Input";
const RegisterLogin = () => {
  let navigate = useNavigate();
  const initialValuesDev = {
    email: "felipemedina.developer@gmail.com",
    password: "admin123",
    name: "fua",
    password2: "admin123",
  };
  const initialValues = { email: "", password: "", name: "", password2: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [register, setRegister] = useState({
    createdAt: "",
    errors: "",
    statusCode: "",
  });
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const { password, name, email } = formValues;

  const handleChange = (e) => {
    e.persist();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  useEffect(() => {
    if (submit && !formErrors) {
      registerApi({ password, name: name.trim() , email })
        .then((data) => {
          const registro = data.createdAt
          setSubmit(false);
          setRegister(data);
          if (registro) {
            navigate('/login',{replace: true})
          }
        })
        .catch((er) => {
          setErrors(er);
        });
    }
  }, [submit]);
  
  useEffect(() => {
    const { email, password, name, password2 } = formValues;
    if (
      email.length > 0 ||
      password.length > 0 ||
      name.length > 0 || password2.length > 0
    ) {
      setFormErrors(validateRegister(formValues));
    }
  }, [formValues]);
  return (
    <>
      {register.createdAt && <div className="message-succes">Registrado!</div>}
      {register.statusCode === 409 && (
        <div className="message-succes">Email no disponible...</div>
      )}
      {register.statusCode === 500 ||
        (register.statusCode === 400 && (
          <div className="message-succes">Parece que hubo un error...</div>
        ))}

      <form onSubmit={handelSubmit} className="card__info--input">
        <div className="card__input--title">
          <h1>Registrate!</h1>
          <p>Registrate para Continuar</p>
        </div>
        
        <label className="pure-material-textfield-outlined">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="username"
            placeholder="Tu nombre"
            value={formValues.name}
            onChange={handleChange}
          />
          <span>Nombre Completo</span>
        </label>
        <p className="password-error">{formErrors.name}</p>
        <label className="pure-material-textfield-outlined">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Correo@gmail.com"
            value={formValues.email}
            onChange={handleChange}
          />
          <span>Correo</span>
        </label>

        <p className="password-error">{formErrors.email}</p>
        <label className="pure-material-textfield-outlined">
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            placeholder="Contraseña"
            value={formValues.password}
            onChange={handleChange}
          />
          <span>Contraseña</span>
        </label>

        <p className="password-error">{formErrors.password}</p>
        <label className="pure-material-textfield-outlined">
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirma tu contraseña"
            value={formValues.password2}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <span>Confirma tu contraseña</span>
        </label>

        <p className="password-error">{formErrors.password2}</p>

        <div className="card__info--buttons">
          <button className="card__buttons--register" type="submit">
            Registrate
          </button>
        </div>
        <div className="card__acount">
          <p>¿Ya tienes una Cuenta?</p>
          <Link to="/login" replace>
            Ingresar
          </Link>
        </div>
      </form>
    </>
  );
};

export default RegisterLogin;
