import React from "react";
import LoginInput from "../components/LoginInput";
import "../styles/login.css";
import LayoutAuth from "../components/auth/LayoutAuth";
const Login = () => {
  return (
    <LayoutAuth>
      <LoginInput />
    </LayoutAuth>
  );
};

export default Login;
