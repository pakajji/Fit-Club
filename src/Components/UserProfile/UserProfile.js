import "./UserProfile.css";
import React from "react";

const UserProfile = () => {
  return (
    <div className="userprofile_box">
      <img src="https://via.placeholder.com/150" alt="User's profile photo" />
      <br></br>
      <br></br>
      <br></br>
      <p>
        Username: <strong>johnsmith</strong>
      </p>

      <p>
        Nickname: <strong>Johnny</strong>
      </p>
    </div>
  );
};

export default UserProfile;
