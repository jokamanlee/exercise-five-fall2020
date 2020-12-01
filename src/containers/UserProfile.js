import React from "react";
import UserProfileComponenet from "../components/UserProfileComponent";

function UserProfile({ userInformation }) {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfileComponenet userInformation={userInformation} />
    </div>
  );
}

export default UserProfile;
