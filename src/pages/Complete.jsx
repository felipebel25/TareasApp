import React, { useEffect, useState } from "react";

import Header from "../components/Navbar/Header";
import "moment/locale/es";
import moment from "moment";

const Users = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const getUsers = async (id) => {
    const response = await fetch(
      process.env.REACT_APP_URL_API + "/users/complete/" + id
    );
    const data = await response.json();
    return data;
  };
  moment.locale("es");

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("usuario"));
    if (datos) {
      setName(datos.user.name);
      getUsers(datos.user.id).then((todos) => {
        if (todos) {
          setTodos(todos.todos);
        } else {
          setTodos(false);
        }
      });
    }
  }, []);
  return (
    <main className="content__users">
      <Header name={name} />
      <main className="container__users   ">
        {!todos ? (
          <h2 className="complete--title">Soluciona tus tareas <br /> {name}!</h2>
        ) : (
          <h2 className="complete--title">Tareas Completadas!</h2>
        )}
        {todos
          ? todos.map((todo, index) => (
              <div
                className="complete animate__animated animate__flipInX"
                key={todo.id}
              >
                <p className="complete--name">{todo.name}</p>
                <p className="complete--date">
                  {moment(todo.createdAt).calendar()}
                </p>
              </div>
            ))
          : ""}
      </main>
    </main>
  );
};

export default Users;
