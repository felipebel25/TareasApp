import React, { useState, useEffect } from "react";
import addTareaIcon from "../../../assets/plus_circle.svg";
import "animate.css";
const TodoCreate = ({setAddData, todos}) => {
  const [tarea, setTarea] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setTarea(e.target.value);
  };
  const submitData = (e) => {
    e.preventDefault();
    if (tarea.length === 0) {
      setError("La tarea debe tener min 4 caracteres.");
    }
    if (!error) {
      setAddData(tarea)
      setTarea('')
    }
  };
  useEffect(() => {
    if (todos.length >= 20)  {
      setError("Numero de tareas maximo alcanzado, soluciona tus tareas");
      
    }
    if (tarea.length < 4) {
      setError("La tarea debe tener min 4 caracteres.");
    }
    if (tarea.length > 4 && tarea.length < 16) {
      setError("");
    }
    if (tarea.length > 16) {
      setError("La tarea debe tener min 4 caracteres y max 16 caracteres.");
    }
    if (tarea.length === 0) {
      setError("");
    }
  }, [tarea]);
  return (
    <form className="todocreate" onSubmit={submitData}>
      <input
        type="text"
        placeholder="Crea tu tarea..."
        value={tarea}
        onChange={handleChange}
      />
      <button className="todocreate__button" type="submit">
        <img src={addTareaIcon} alt="" />
      </button>
      <p className="todoscreate__length">{todos.length} <br /> {todos.length === 1 ? 'tarea' : 'tareas'}</p>
      {error && (
        <p className="todocreate__error animate__animated  animate__shakeX">
          {error}
        </p>
      )}
    </form>
  );
};

export default TodoCreate;
