import React from "react";

function UserProfileComponent({ userInformation }) {
  console.log({ userInformation });
  return (
    <div>
      <p>
        <strong>UID:</strong>
        {userInformation.user.uid}
      </p>
      <p>
        <strong>Email:</strong>
        {userInformation.user.email}
      </p>
    </div>
  );
}

export default UserProfileComponent;
