import "./RegisterForm.css";
import React, { useState } from "react";

function RegisterForm() {
  // Use the useState hook to store the user's input
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // This function will be called when the user submits the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the user's input here
    if (name === "") {
      // Show an error message if the name is empty
      alert("Please enter your name");
    } else if (surname === "") {
      // Show an error message if the email is empty
      alert("Please enter your surname");
    } else if (email === "") {
      // Show an error message if the email is empty
      alert("Please enter your email");
    } else if (password === "") {
      // Show an error message if the password is empty
      alert("Please enter your password");
    } else if (password !== confirmPassword) {
      // Show an error message if the password and confirm password do not match
      alert("The password and confirm password do not match");
    } else {
      // Submit the form
    }
  };

  return (
    <div className="register-container">
      <div className="register_box">
        <h1>Register Account Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="register-form_container">
            <div className="register-name_container">
              <input
                type="text"
                placeholder="Name"
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
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm-Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
          <div className="register-form_container">
            <label>
              <input type="checkbox" aria-label="Agree to terms" />
              <span>
                I agree with the <a href="#">terms</a> and conditions and the
                Privacy Policy
              </span>
            </label>
          </div>
          <div className="register-button_container">
            <button className="register-btn" type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
