import "./PersonalProfile.css";
import React, { useState } from "react";
import axios from 'axios';

function PersonalProfile() {
  // Use the useState hook to store the user's personal information
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nickname, setNickname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState("");
  const [picUrl, setPicUrl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png");
  const [picProfile, setPicProfile] = useState("")

  // This function will be called when the user submits the form
  // let handleSubmit = (event) => {
  //   // Save the user's personal information
  //   localStorage.setItem("name", event.target.name.value);
  //   localStorage.setItem("surname", event.target.surname.value);
  //   localStorage.setItem("nickname", event.target.nickname.value);
  //   localStorage.setItem("dateOfBirth", event.target.dateOfBirth.value);
  //   localStorage.setItem("weight", event.target.weight.value);
  //   localStorage.setItem("height", event.target.height.value);
  //   localStorage.setItem("sex", event.target.value);
  // };


  // const imgprofile = async () => {
  //   const img = await axios.get('http://localhost:3000/profile');
  //   setPicProfile(img.data.picUrl)
  // }

  //picProfile ? picProfile : picUrl

  const addProflie = async (profile) => {
    await axios.put('http://localhost:3000/profile', profile);
}
  
  const submitProfile = (event) => {
    event.preventDefault();
    const profile = {
      picUrl: picUrl,
      name: name,
      surname: surname,
      nickname: nickname,
      dateOfBirth: dateOfBirth,
      weight: Number(weight),
      height: Number(height),
      sex: sex
    }
    console.log("profile", profile);
    addProflie(profile)
    alert("Your profile have been saved")
    // imgprofile()
  }

  return (
    <div className="personal-container">
      <div className="personalinfo_box">
        <div className="personal">
            <div>
              <h1>Personal Information</h1>
            </div>
            <img className="profilepic" src={picUrl} alt="profile image"/>
            <form onSubmit={submitProfile}>

              <div className="personal-form_container">
              <div className="personal-name_container">
                <input
                    type="text"
                    placeholder="Your image URL"
                    value={picUrl}
                    onChange={(event) => setPicUrl(event.target.value)}
                    />
              </div>
                <label>image url</label>
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
                    type="number"
                    placeholder="Weight(kg)"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Height(cm)"
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
                    <option value="other">Other</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>

                  </select>
                </div>

                <div className="personal-button_container">
                  <button className="profile-from-btn" type="submit">
                    Edit&Save
                  </button>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;