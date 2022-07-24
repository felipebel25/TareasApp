import React, { useState, useEffect } from "react";
//componentes
import InputPut from "../InputPut";
//api peticiones
import deleteTodo from "../../apis/deleteTodo";
import updateTodo from "../../apis/patchTodo";
import updateEstatusTodo from "../../apis/patchEstatusTodo";
//iconos
import trashIcon from "../../assets/delete.svg";
import doneIcon from "../../assets/done.svg";
import incompleteIcon from "../../assets/incomplete.svg";
import moment from "moment";
import "moment/locale/es";

const Todo = ({ token, id, estatus, name = "", userId, movement, date }) => {
  const [replace, setReplace] = useState(false);
  const [dataInput, setDataInput] = useState(false);
  // const [dataEstatus, setdataEstatus] = useState(estatus);
  moment.locale("es");
  const handleClickDelete = async () => {
    if (userId && token) {
      const deleteRta = await deleteTodo(token, userId);
      movement(true);
    }
  };
  const handleUpdtateEstatus = async (data) => {
    const updateRta = await updateEstatusTodo(!data, token, userId);
    movement(true);
  };

  useEffect(() => {
    if (dataInput) {
      updateTodo(dataInput, token, userId).then(() => {
        movement(true);
      });
    }
  }, [dataInput]);

  return (
    <div className="todo">
      <div className="todo__text">
        <p
          className="todo__text--name"
          onClick={() => {
            setReplace(true);
          }}
        >
          {name}
        </p>
        <p>{moment(date).calendar()}</p>
      </div>
      <img
        className="todo__check"
        onClick={() => {
          handleUpdtateEstatus(estatus);
        }}
        src={estatus ? doneIcon : incompleteIcon}
        alt=""
      />
      <img
        className="todo__remove"
        onClick={handleClickDelete}
        src={trashIcon}
        alt=""
      />
      {replace && (
        <InputPut
          action="Editar"
          offModal={setReplace}
          setData={setDataInput}
        />
      )}
    </div>
  );
};

export default Todo;
