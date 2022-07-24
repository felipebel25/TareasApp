import React from "react";
import TodoCreate from "./desktop/TodoCreate";
import TodoList from "./desktop/TodoList";

import "../../styles/todosdesktop.css";

const TodoDesktop = ({ todos, add, setAdd, setAddData, token, setChanges ,loading}) => {
  return (
    <div className="tododesktop">
      <div className="tododesktop--container">
        <TodoCreate 
            todos={todos}
            setAddData={setAddData}

        />
        <main className='tododesktop--list'>
        {todos.length === 0 && (<p className='tododesktop--zero'>Crea tu primera tarea :)</p>)}
        {todos.map((todo, index) => (
          <TodoList
          todo={todo}
          key={todo.id}
          token={token}
          setChanges={setChanges}
          />
          ))}
          </main>
      </div>
    </div>
  );
};

export default TodoDesktop;
