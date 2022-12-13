import "./ActivitiesForm.css";
import React, { useState ,useContext} from "react";
import ActivityContext from '../Context/ActivityContext';
const { v4: uuidv4 } = require('uuid');


function ActivitiesForm() {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberset, setNumberset] = useState("");
  const [distance, setDistance] = useState("");
  const [calburned, setCalburned] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [heartrate, setHeartrate] = useState("");

  const { addActivity} = useContext(ActivityContext)


  //Submit
  const submitActivity = (event) => {
    event.preventDefault();
    const activityCard = {
      id: uuidv4(),
      type: type,
      description: description,
      date: date,
      time: time,
      numberset: Number(numberset),
      distance: Number(distance),
      calburned: Number(calburned),
      duration: Number(duration),
      heartrate: heartrate
  }
  //console.log("card", activityCard);
  addActivity(activityCard)
  alert("Your activity have been submitted")
}
  

// Validate the user's input here
  const handleSubmit = () => {
    if (type === "") {
      alert("Please enter the type of exercise");
    } else if (description === "") {
      alert("Please enter the description of the exercise");
    } else if (date === "") {
      alert("Please enter the date of the exercise");
    } else if (time === "") {
      alert("Please enter the time of the exercise");
    } else if (calburned === "") {
      alert("Please enter the amount of calories burned");
    } else if (duration === "") {
      alert("Please enter the duration of the exercise");
    } 
  };

  return (
    <div className="activity-from-container">
      <div className="exercise_box">
        <h1>New Exercise Activity</h1>
        <form onSubmit={submitActivity}>
          <div className="activity-from-form_container">
            <label for="activity">Activity</label>
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              required
            >
              <option value="">-</option>
              <option value="run">Run</option>
              <option value="bicycleride">Bicycle Ride</option>
              <option value="swimming">Swimming</option>
              <option value="walk">Walk</option>
              <option value="hiking">Hiking</option>
            </select>
          </div>

          <div className="activity-from-form_container">
            <label for="description">Description</label>
            <input
              type="text"
              placeholder="Required"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>

          <div className="activity-from-form_container">
            <label for="date">Date</label>
            <input
              type="date"
              placeholder="DD/MM/YY"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>

          <div className="activity-from-form_container">
            <label for="time">Time</label>
            <input
              type="time"
              placeholder="DD/MM/YY"
              required
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </div>

          <div className="activity-from-form_container">
            <label for="numberset">Number of sets</label>
            <input
              type="number"
              placeholder="Optional"
              value={numberset}
              onChange={(event) => setNumberset(event.target.value)}
            />
          </div>

          <div className="activity-from-form_container">
            <label for="distance">Distance</label>
            <input
              type="number"
              placeholder="Optional (meter)"
              value={distance}
              onChange={(event) => setDistance(event.target.value)}
            />
          </div>

          <div className="activity-from-form_container">
            <label for="caloriesburned">Calories Burned</label>
            <input
              type="number"
              placeholder="Required (cal)"
              required
              value={calburned}
              onChange={(event) => setCalburned(event.target.value)}
            />
          </div>

          <div className="activity-from-form_container">
            <label for="time">The Duration of Your Exercise</label>
            <input
              placeholder="Required (minute)"
              required
              type="number"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
            />
          </div>

          <div className="activity-from-form_container">
            <label for="heartrate">Heart Rate</label>
            <input
              type="text"
              placeholder="Optional"
              value={heartrate}
              onChange={(event) => setHeartrate(event.target.value)}
            />
          </div>

          <div className="activity-from-button_container">
            <button onClick={handleSubmit} className="activity-from-btn" type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ActivitiesForm;
