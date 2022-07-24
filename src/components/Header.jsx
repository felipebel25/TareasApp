import React from "react";
import backIcon from "../assets/arrow_back_ios.svg";
import { Link } from "react-router-dom";
import profileIcon from "../assets/person.svg";
import { NavLink } from "react-router-dom";
import tasksIcons from "../assets/list_alt.svg";
import taskComplete from '../assets/complete.svg'
import "../styles/header.css";
const Header = ({ name = "", iconBack = false }) => {
  return (
    <header className="header">
      <div className="headerName">
        {iconBack && (
          <Link to="/todos">
            <img className="header__backicon" src={backIcon} alt="backIcon" />
          </Link>
        )}

          <h1 className="header__title--h1">Tareas App</h1>
          <div className='header__user'>
          <p className='header__username'>{name && name}</p>

        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "header__user--active" : "")}
          >
          <button >
            <img src={profileIcon} alt="" />
          </button>
        </NavLink>
          </div>
      </div>
      <div className="headerNav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "header__buttons--active" : "header__buttons")}
        >
          <button >
            <img src={taskComplete} alt="" />
          </button>
        </NavLink>
        <NavLink
          to="/todos"
          className={({ isActive }) => (isActive ? "header__buttons--active" : "header__buttons")}
        >
          <button >
            <img src={tasksIcons} alt="" />
          </button>
        </NavLink>
        
      </div>
    </header>
  );
};

export default Header;
