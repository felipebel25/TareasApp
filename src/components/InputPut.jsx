import React, { useEffect, useState } from "react";
import "../styles/inputput.css";
const InputPut = ({ action = "", offModal, setData }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const sendData = () => {
    if (!error) {
      setData(input);
      offModal(false);
    }
  };
  const closeModal = () => {
    offModal(false);
  };
  useEffect(() => {
    if (input.length < 4) {
      setError("La tarea debe tener min 4 caracteres.");
    }
    if (input.length > 4 && input.length < 16) {
      setError("");
    }
    if (input.length > 16) {
      setError("La tarea debe tener  max 16 caracteres.");
    }
    if (input.length === 0) {
      setError("");
    }
  }, [input]);
  return (
    <>
      <div className="content__input" onClick={closeModal} />
      <main className="input">
        <h1 className="input--title">{action} tu input</h1>
        {error && <p className="input--error animate__animated  animate__shakeX">{error}</p>}
        <input
          type="text"
          placeholder={action}
          className="input--input"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div className="input__buttons">
          <button className="input__buttons--cancel" onClick={closeModal}>
            Cancelar
          </button>
          <button className="input__buttons--add" onClick={sendData}>
            {action}
          </button>
        </div>
      </main>
    </>
  );
};

export default InputPut;
