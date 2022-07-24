import React from "react";
import { NavLink } from "react-router-dom";

import profileIcon from "../assets/person.svg";
import usersIcon from "../assets/users.svg";
import tasksIcons from "../assets/list_alt.svg";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "footer__active" : "")}
      >
        <button className="footer__buttons">
          <img src={usersIcon} alt="" />
        </button>
      </NavLink>
      <NavLink
        to="/todos"
        className={({ isActive }) => (isActive ? "footer__active" : "")}
      >
        <button className="footer__buttons">
          <img src={tasksIcons} alt="" />
        </button>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? "footer__active" : "")}
      >
        <button className="footer__buttons">
          <img src={profileIcon} alt="" />
        </button>
      </NavLink>
    </footer>
  );
};

export default Footer;
