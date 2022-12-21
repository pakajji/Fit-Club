import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function PersonalProfileNewLayOut() {
  // Use the useState hook to store the user's personal information
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nickname, setNickname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState("");
  const [picUrl, setPicUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  );
  const [picProfile, setPicProfile] = useState("");

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

  //picProfile ? picProfile : picUrl

  const addProflie = async (profile) => {
    await axios.put("http://localhost:3001/profile", profile);
  };

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
      sex: sex,
    };
    console.log("profile", profile);
    addProflie(profile);
    alert("Your profile have been saved");
    // imgprofile()
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>My Profile</h1>
        </div>

        <div className={styles.right}>
          <h1>Personal Information</h1>
          <form className={styles.form_container} onSubmit={submitProfile}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Nickname"
              name="nickName"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
              className={styles.input}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
              className={styles.input}
            />
            <input
              type="number"
              placeholder="Weight(kg)"
              name="weight"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              className={styles.input}
            />
            <input
              type="number"
              placeholder="Height(cm)"
              name="dateOfBirth"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              className={styles.input}
            />

            <label for="gender">Gender</label>
            <select
              value={sex}
              onChange={(event) => setSex(event.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <button type="submit" className={styles.green_btn}>
              Edit & Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PersonalProfileNewLayOut;
