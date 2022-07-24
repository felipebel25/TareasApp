import React from "react";
import addIcon from "../../assets/add.svg";
import InputPut from "../InputPut";
import LoadingSpinner from "../LoadingSpinner";
import Todo from "./Todo";

const TodoMobile = ({
  todos,
  add,
  setAdd,
  setAddData,
  token,
  setChanges,
  loading,
}) => {
  return (
    <>
      {add && (
        <InputPut setData={setAddData} action="Agregar" offModal={setAdd} />
      )}
      <div className="todo__list">
        {todos.length === 0 && loading && <LoadingSpinner />}
        {todos.length > 0 ? (
          todos.map((algo, index) => (
            <Todo
              estatus={algo.estatus}
              token={token}
              key={index}
              name={algo.name}
              userId={algo.id}
              movement={setChanges}
              date={algo.createdAt}
            />
          ))
        ) : todos.length === 0 && !loading ? (
          <h1 className="todo__nodata">Crea una Tarea</h1>
        ) : (
          ""
        )}
      </div>
      <div className="todo__downinfo">
        {todos.length >= 20 ? (
          <h4 className="todo__error">
            Numero de tareas maximo alcanzado, soluciona tus tareas
          </h4>
        ) : (
          <h4 className="todo__realize">
            Tienes {todos.length} tarea{todos.length === 1 ? "" : "s"}
          </h4>
        )}
        <button
          onClick={() => {
            setAdd(true);
          }}
          className="todos__add"
        >
          <img src={addIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default TodoMobile;
