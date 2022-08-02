import React from "react";
import "../../styles/register.css";
const LayoutAuth = ({ children }) => {
  return (
    <div className="layoutAuth">
      <main className="card">
        <div className="card__info">{children}</div>
      </main>
    </div>
  );
};

export default LayoutAuth;
