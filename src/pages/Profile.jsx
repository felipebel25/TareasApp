import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import User from '../components/User';
import Header from '../components/Header';

import "../styles/home.css";
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";
import { useContext } from "react";

const Profile = () => {
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()
  const [logout, setLogout] = useState(false);
  const datos = JSON.parse(localStorage.getItem("usuario"));
  console.log(datos);
  const handleLogout = () => {
    localStorage.removeItem('usuario')
    dispatch({
      type: types.logout
    })
    setLogout(!logout)
    navigate('/login',{replace: true} )
    

  }

  return (
    <div className='home'>
      <div className="home__content">
      <Header />
        {datos && !logout ?
          <section className="home--user">
            <User name={datos.user.name} email={datos.user.email} date={datos.user.createdAt}  viewProfile={true}/>
          </section>
          : ""}

        <main className='home__session'>
          {!datos ? <Link to='/login'>
            <button type='button' className='home__session--button'>
              Login
            </button>
          </Link> : ""}

     
            <button className="home__session--button" onClick={handleLogout}>
              Cerrar Sesion
            </button>
        

        </main>
      </div>

    </div>
  )
}

export default Profile;