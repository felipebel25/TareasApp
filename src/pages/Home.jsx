import React from "react";
import "animate.css";

import "../styles/homepage.css";
import tareasAppImage from '../assets/tareasapp.png'
import { Link } from "react-router-dom";
const Home = () => {
  
  return (
    <div className="homepage ">
      <div className="homepage__container">
        <h1 className="homepage__title animate__animated animate__fadeIn">Tareas App</h1>
        <p className="homepage__text animate__animated animate__fadeIn">
        Aplicación web que te ayuda a organizar tu día a día.
        </p>
        <div className="homepage__buttons">
        <Link to="/login">
          <button className="homepage__button homepage__button--login">
          Iniciar Sesión
          </button>
        </Link>
        <Link to="/register">
          <button className="homepage__button homepage__button--register">
          Registrarse
          </button>
        </Link>
          <p className="homepage__info">Desarrollado por Felipe  Medina <br />
          email: felipemedina.developer@gmail.com</p>
        </div>
      </div>
      <div className="homepage__image">
        <img src={tareasAppImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
