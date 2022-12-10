import "./PersonalProfile.css";
import React, { useState } from "react";
import UserProfile from "../UserProfile/UserProfile";

function PersonalProfile() {
  // Use the useState hook to store the user's personal information
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nickname, setNickname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState("");

  // This function will be called when the user submits the form
  let handleSubmit = (event) => {
    // Save the user's personal information
    localStorage.setItem("name", event.target.name.value);
    localStorage.setItem("surname", event.target.surname.value);
    localStorage.setItem("nickname", event.target.nickname.value);
    localStorage.setItem("dateOfBirth", event.target.dateOfBirth.value);
    localStorage.setItem("weight", event.target.weight.value);
    localStorage.setItem("height", event.target.height.value);
    localStorage.setItem("sex", event.target.value);
  };

  return (
    <div className="personal-container">
      <div className="personalinfo_box">
        <div className="personal-left">
          <UserProfile />
        </div>

        <div className="personal-right">
          <div>
            <div>
              <h1>Personal Information</h1>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(event);
              }}
            >
              <div className="personal-form_container">
                <div className="personal-name_container">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                  />
                </div>

                <div className="personal-name_container">
                  <input
                    type="text"
                    placeholder="Nickname"
                    value={nickname}
                    onChange={(event) => setNickname(event.target.value)}
                  />
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    value={dateOfBirth}
                    onChange={(event) => setDateOfBirth(event.target.value)}
                  />
                </div>

                <div className="personal-name_container">
                  <input
                    type="text"
                    placeholder="Weight"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Height"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                  />
                </div>

                <div className="personal-gender_container">
                  <label for="gender">Gender</label>
                </div>

                <div className="personal-name_container">
                  <select
                    value={sex}
                    onChange={(event) => setSex(event.target.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="personal-button_container">
                  <button className="profile-from-btn" type="submit">
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;