import React from "react";
import "./userprofile.css";

const UserProfile = ({ params }: any) => {
  return (
    <div className="user-single">
      <h1>Your Private Profile</h1>
      <p className="welcome-message">
        Welcome <span>{params.id} </span>
      </p>
    </div>
  );
};

export default UserProfile;
