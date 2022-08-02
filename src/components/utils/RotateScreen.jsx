import React from "react";
import rotateScreens from "../../assets/rotate-screen.png";
import '../../styles/rotatescreen.css'
const RotateScreen = () => {
  return (
    <div className="rotateScreen">
      Gira tu dispositivo para tener una mejor experiencia
      <img src={rotateScreens} alt="rotate screen" />
    </div>
  );
};

export default RotateScreen;
