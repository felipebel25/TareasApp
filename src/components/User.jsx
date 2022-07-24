import React from "react";
import "../styles/users.css";
import moment from "moment";
import "moment/locale/es";
const User = ({ name, email, length, date, viewProfile }) => {
  return (
    <div className="users">
      <div className="users__person">
        <p className="users--name">{name}</p>
        <p className="users--email">{email}</p>
        {viewProfile && (
          <p className="users--email">Creado en {moment(date).calendar()}</p>
        )}
      </div>
      {length ? (
        <div className="todos__length">
          <p className="todos__length--number">{length}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default User;
