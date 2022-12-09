import "./LoginForm.css";
import React, { useState } from "react";
// import axios from 'axios';

function LoginForm() {
  // Use the useState hook to store the user's input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // This function will be called when the user submits the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the user's input here
    if (email === "") {
      // Show an error message if the email is empty
      alert("Please enter your email");
    } else if (password === "") {
      // Show an error message if the password is empty
      alert("Please enter your password");
    } else {
      // Submit the form
    }
  };

  // Send a POST request to the /login route on the backend
  // axios
  //   .post('/login', { email, password })
  //   .then(response => {
  //     // If the request is successful, store the JWT in local storage
  //     localStorage.setItem('jwt', response.data.token);

  //     // Redirect the user to the protected page
  //     this.props.history.push('/protected');
  //   })
  //   .catch(error => {
  //     // Handle any errors that occur
  //     console.error(error);
  //   });

  return (
    <div className="login-from-container">
      <div className="login_box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-from-form_container">
            <input
              type="email"
              placeholder="Username or Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="login-from-form_container">
            <input
              type="password"
              placeholder="Password:"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="login-from-form_container">
            <input type="checkbox" name="Remember me" value="Remember me" />
            <label for="Remember me">Remember me</label>
          </div>
          <div className="login-from-button_container">
            <button className="login-from-btn" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
