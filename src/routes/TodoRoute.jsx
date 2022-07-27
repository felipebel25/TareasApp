import { Route, Routes } from "react-router-dom";
import Complete from "../pages/Complete";
import Todos from "../pages/Todos";

import Profile from "../pages/Profile";

const TodoRouter = () => {
  return (
    <Routes>
      <Route exact path="/todos" element={<Todos />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/complete" element={<Complete />} />
    </Routes>
  );
};

export default TodoRouter;
