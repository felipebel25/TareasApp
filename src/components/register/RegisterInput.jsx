import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerApi from "../../apis/pushRegisterApi";
import validateRegister from "../../helpers/validateRegister";
import "animate.css";

const RegisterLogin = () => {
  let navigate = useNavigate();

  const initialValues = { email: "", password: "", name: "", password2: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [register, setRegister] = useState({
    createdAt: "",
    errors: "",
    statusCode: "",
  });
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const { password, name, email } = formValues;
  const handleChange = (e) => {
    e.persist();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!formErrors) {
      setSubmit(true);
    }
  };
  useEffect(() => {
    if (submit && !formErrors) {
      setLoading(true);
      registerApi({ password, name: name.trim(), email })
        .then((data) => {
          const registro = data.createdAt;
          setSubmit(false);
          setRegister(data);
          if (registro) {
            setLoading(false);
            navigate("/login", { replace: true });
          }
        })
        .catch((er) => {
          console.error(er);
        })
        .finally(() => {
          setLoading(false);
          setSubmit(false);
        });
    }
    return () => {
      setFormValues(initialValues);
      setSubmit(false);
      setFormErrors(initialValues);
      setLoading(false);
    };
  }, [submit]);
  useEffect(() => {
    const { email, password, name, password2 } = formValues;
    if (
      email.length > 0 ||
      password.length > 0 ||
      name.length > 0 ||
      password2.length > 0
    ) {
      setFormErrors(validateRegister(formValues));
    }
  }, [formValues]);
  return (
    <>
      {loading && (
        <p className="loading animate__animated animate__flash animate__infinite">
          Cargando...
        </p>
      )}
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
          <h1>¡Regístrate!</h1>
          <p>Regístrate para Continuar</p>
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
            className={`${formValues.name.length !== 0 ? "visited" : ""}`}
          />
          <span>Tu Primer Nombre</span>
        </label>
        <p className="password-error animate__animated animate__shakeX ">
          {formErrors.name}
        </p>
        <label className="pure-material-textfield-outlined">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Correo@gmail.com"
            value={formValues.email}
            onChange={handleChange}
            className={`${formValues.email.length !== 0 ? "visited" : ""}`}
          />
          <span>Correo</span>
        </label>
        <p className="password-error animate__animated animate__shakeX ">
          {formErrors.email}
        </p>
        <label className="pure-material-textfield-outlined">
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            placeholder="Contraseña"
            value={formValues.password}
            onChange={handleChange}
            className={`${formValues.password.length !== 0 ? "visited" : ""}`}
          />
          <span>Contraseña</span>
        </label>

        <p className="password-error animate__animated animate__shakeX ">
          {formErrors.password}
        </p>
        <label className="pure-material-textfield-outlined">
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirma tu contraseña"
            value={formValues.password2}
            onChange={handleChange}
            autoComplete="new-password"
            className={`${formValues.password2.length !== 0 ? "visited" : ""}`}
          />
          <span>Confirma tu contraseña</span>
        </label>

        <p className="password-error animate__animated animate__shakeX ">
          {formErrors.password2}
        </p>

        <div className="card__info--buttons">
          <button className="card__buttons--register" type="submit">
            Regístrate
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
