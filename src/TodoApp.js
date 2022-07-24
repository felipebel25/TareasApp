import React, { useReducer } from "react";
import { useEffect } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import RouteTodo from "./routes/RouteTodo";
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
const TodoApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    if (!user) {
        return 
    }
    localStorage.setItem('user' , JSON.stringify(user))
  }, [user]);
  console.log('hola');
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <RouteTodo />
    </AuthContext.Provider>
  );
};

export default TodoApp;
