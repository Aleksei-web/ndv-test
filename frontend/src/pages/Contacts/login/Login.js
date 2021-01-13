import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "../../../components/forms/LoginForm";

function Login() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      {users == 'null' ? (
        <LoginForm />
      ) : (
        <h2>
          Добро пожаловать, {users} !!!
        </h2>
      )}
    </div>
  );
}

export default Login;
