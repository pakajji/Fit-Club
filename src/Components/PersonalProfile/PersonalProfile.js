import "./PersonalProfile.css";
import React, { useState } from "react";

function PersonalProfileForm() {
  // Use the useState hook to store the user's personal information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // This function will be called when the user submits the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the user's input here
    if (name === "") {
      // Show an error message if the name is empty
      alert("Please enter your name");
    } else if (email === "") {
      // Show an error message if the email is empty
      alert("Please enter your email address");
    } else if (phone === "") {
      // Show an error message if the phone number is empty
      alert("Please enter your phone number");
    } else {
      // Submit the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default PersonalProfileForm;
