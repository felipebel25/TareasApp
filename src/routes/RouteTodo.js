import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PublicRoute from "./PublicRoutes";
import PrivateRoute from "./PrivateRoutes";

import TodoRouter from "./TodoRoute";
import Home from "../pages/Home";

function RouteTodo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <TodoRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteTodo;
