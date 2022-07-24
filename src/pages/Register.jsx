import React from "react";
import RegisterInput from "../components/register/RegisterInput";
import "../styles/register.css";
import LayoutAuth from "../components/auth/LayoutAuth";

const Register = () => {
  return (
    <LayoutAuth>
      <RegisterInput />
    </LayoutAuth>
  );
};

export default Register;
