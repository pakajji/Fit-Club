import "./ActivitiesForm.css";
import React, { useState } from "react";

function ActivitiesForm() {
  // Use the useState hook to store the user's exercise information
  const [activities, setActivities] = useState([]);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberset, setNumberset] = useState("");
  const [distance, setDistance] = useState("");
  const [calburned, setCalburned] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [heartrate, setHeartrate] = useState("");

  // This function will be called when the user changes the selected activities
  const handleChange = (event) => {
    // Get the selected options from the event
    const options = event.target.options;

    // Create an array of the selected activities
    const selectedActivities = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedActivities.push(options[i].value);
      }
    }

    // Update the state with the selected activities
    setActivities(selectedActivities);
  };

  // This function will be called when the user submits the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the user's input here
    if (type === "") {
      // Show an error message if the type is empty
      alert("Please enter the type of exercise");
    } else if (description === "") {
      // Show an error message if the duration is empty
      alert("Please enter the description of the exercise");
    } else if (duration === "") {
      // Show an error message if the duration is empty
      alert("Please enter the duration of the exercise");
    } else if (date === "") {
      // Show an error message if the date is empty
      alert("Please enter the date of the exercise");
    } else if (time === "") {
      // Show an error message if the date is empty
      alert("Please enter the time of the exercise");
    } else if (calburned === "") {
      // Show an error message if the date is empty
      alert("Please enter the amount of calories burned");
    } else {
      // Submit the form
    }
  };

  return (
    <div className="container">
      <div className="exercise_box">
        <h1>New Exercise Activity</h1>
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <label for="activity">Activity</label>
            <select name="form_container" id="form_container">
              <option value="run" value={type} onChange={handleChange}>
                Run
              </option>
              <option value="bicycleride" value={type} onChange={handleChange}>
                Bicycle Ride
              </option>
              <option value="swimming" value={type} onChange={handleChange}>
                Swimming
              </option>
              <option value="walk" value={type} onChange={handleChange}>
                Walk
              </option>
              <option value="hiking" value={type} onChange={handleChange}>
                Hiking
              </option>
            </select>
          </div>

          <div className="form_container">
            <label for="description">Description</label>
            <input
              type="text"
              placeholder="Required"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>

          <div className="form_container">
            <label for="date">Date</label>
            <input
              type="date"
              placeholder="DD/MM/YY"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>

          <div className="form_container">
            <label for="time">Time</label>
            <input
              type="time"
              placeholder="DD/MM/YY"
              required
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </div>

          <div className="form_container">
            <label for="numberset">Number of sets</label>
            <input
              type="text"
              placeholder="Optional"
              value={numberset}
              onChange={(event) => setNumberset(event.target.value)}
            />
          </div>

          <div className="form_container">
            <label for="distance">Distance</label>
            <input
              type="text"
              placeholder="Optional"
              value={distance}
              onChange={(event) => setDistance(event.target.value)}
            />
          </div>

          <div className="form_container">
            <label for="caloriesburned">Calories Burned</label>
            <input
              type="text"
              placeholder="Required"
              required
              value={calburned}
              onChange={(event) => setCalburned(event.target.value)}
            />
          </div>

          <div className="form_container">
            <label for="time">The Duration of Your Exercise</label>
            <input
              placeholder="Required"
              required
              type="time"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
            />
          </div>

          <div className="form_container">
            <label for="heartrate">Heart Rate</label>
            <input
              type="text"
              placeholder="Optional"
              value={heartrate}
              onChange={(event) => setHeartrate(event.target.value)}
            />
          </div>

          <div className="button_container">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ActivitiesForm;
