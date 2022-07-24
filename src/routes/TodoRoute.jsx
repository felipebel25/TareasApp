import { Route, Routes } from "react-router-dom";
import Users from "../pages/Users";
import Todos from "../pages/Todos";

import Profile from "../pages/Profile";

const TodoRouter = () => {
  return (
    <Routes>
      <Route exact path="/todos" element={<Todos />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/" element={<Users />} />
    </Routes>
  );
};

export default TodoRouter;
