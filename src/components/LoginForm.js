import React from "react";

function LoginForm({ LoginFunction }) {
  return (
    <div>
      <form className="SignupForm" onSubmit={(e) => LoginFunction(e)}>
        <label htmlFor="loginEmail">Email</label>
        <input type="email" name="loginEmail" />

        <label htmlFor="loginEmail">Password</label>
        <input type="passowrd" name="loginPassword" />

        <button> Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
