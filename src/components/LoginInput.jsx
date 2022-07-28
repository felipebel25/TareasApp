import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";
import { useContext } from "react";
import validateLogin from "../helpers/validateLogin";
import loginApi from "../apis/loginApi";

const Login = () => {
  let navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const initialValues = {
    email: sessionStorage.getItem("email")
      ? sessionStorage.getItem("email")
      : "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };
  useEffect(() => {
    const { email, password } = formValues;
    if (email.length > 0 || password.length > 0) {
      setFormErrors(validateLogin(formValues));
    }
  }, [formValues]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setLoading(true);
      loginApi(formValues)
        .then((data) => {
          setIsSubmit(false);
          if (data.statusCode !== 401) {
            setLoading(false);
            const action = {
              type: types.login,
            };
            dispatch(action);
            navigate("/", { replace: true });
          } else if (data.statusCode === 401) {
            setLoading(false);
            setFormErrors({
              ...formErrors,
              password: "Contrasena o correo incorrecto",
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isSubmit]);

  return (
    <>
      {loading && (
        <p className="loading animate__animated animate__flash animate__infinite">
          Cargando...
        </p>
      )}
      <form onSubmit={handelSubmit} className="card__info--input">
        <div className="card__input--title">
          <h1>Inicia Sesion!</h1>
          <p>Inicia Sesion para Continuar</p>
        </div>
        <label className="pure-material-textfield-outlined">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="username"
            placeholder="Email"
            value={formValues.email}
            onChange={handelChange}
          />

          <span>Correo</span>
        </label>
        <p className="password-error">{formErrors.email}</p>
        <label className="pure-material-textfield-outlined">
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder="Password"
            value={formValues.password}
            onChange={handelChange}
          />
          <span>Contraseña</span>
        </label>

        <p className="password-error">{formErrors.password}</p>

        <div className="card__info--buttons">
          <button className="card__buttons--register" type="submit">
            Inicia Sesion
          </button>
        </div>
        <div className="card__acount">
          <p>¿No tiene una cuenta?</p>
          <Link to="/register" replace>
            Registrarse
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
