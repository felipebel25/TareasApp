import React, { useState, useEffect } from "react";
import Header from "../components/Header";


import createTodo from "../apis/createTodo";
import "../styles/todos.css";
import getTodosApi from "../apis/getTodosApi";
import TodoMobile from "../components/todo/TodoMobile";
import TodoDesktop from "../components/todo/TodoDesktop";

const Todos = () => {
  const [user, setUser] = useState();
  const [add, setAdd] = useState(false);
  const [todos, setTodos] = useState([]);
  const [idUser, setIdUser] = useState(0);
  const [addData, setAddData] = useState("");
  const [token, setToken] = useState("");
  const [changes, setChanges] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("usuario"));
    if (datos) {
      setLoading(true);
      getTodosApi(datos.user.id).then((data) => {
        setTodos(data);
        setLoading(false)
      });
      setUser(datos.user.name);
      setIdUser(datos.user.id);
      setToken(datos.token);
      setChanges(false);
    }
  }, [changes]);
  useEffect(() => {
    if (addData) {
      createTodo(addData, token, idUser).then((data) => {
        getTodosApi(idUser).then((data) => {
          setTodos(data);
        });
      });
    }
  }, [addData]);
  const validateScreen =
    (window.screen.width && window.innerWidth) >= 548 ? false : true;

  return (
    <main className="container__todos">
      <Header name={user}/>
      {validateScreen ? (
        <TodoMobile
          token={token}
          setChanges={setChanges}
          todos={todos}
          add={add}
          setAdd={setAdd}
          setAddData={setAddData}
          loading={loading}
        />
      ) : (
        <TodoDesktop
          token={token}
          setChanges={setChanges}
          todos={todos}
          add={add}
          setAdd={setAdd}
          setAddData={setAddData}
        />
      )}
      {/* <Footer /> */}
    </main>
  );
};

export default Todos;
