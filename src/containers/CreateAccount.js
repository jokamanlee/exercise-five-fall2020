import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

function CreateAccount({ CreateAccountFunction }) {
  return (
    <div>
      <CreateAccountForm CreateAccountFunction={CreateAccountFunction} />
    </div>
  );
}

export default CreateAccount;
