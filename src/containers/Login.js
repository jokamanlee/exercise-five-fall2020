import React from "react";
import LoginForm from "../components/LoginForm";

function Login({ LoginFunction }) {
  return (
    <div>
      <LoginForm LoginFunction={LoginFunction} />
    </div>
  );
}

export default Login;
