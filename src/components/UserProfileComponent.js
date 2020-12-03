import React from "react";

function UserProfileComponent({ userInformation }) {
  console.log({ userInformation });
  return (
    <div>
      <p>
        <strong>UID:</strong>
        {userInformation.uid}
      </p>
      <p>
        <strong>Email:</strong>
        {userInformation.email}
      </p>
    </div>
  );
}

export default UserProfileComponent;
