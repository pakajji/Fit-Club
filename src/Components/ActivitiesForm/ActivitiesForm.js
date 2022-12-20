import "./ActivitiesForm.css";
import React, { useState, useContext } from "react";
import ActivityContext from '../Context/ActivityContext';
import {useLocation} from 'react-router-dom';
const { v4: uuidv4 } = require('uuid');

function ActivitiesForm() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberset, setNumberset] = useState("");
  const [distance, setDistance] = useState("");
  const [calburned, setCalburned] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [heartrate, setHeartrate] = useState("");

  const { addActivity } = useContext(ActivityContext)
  const location = useLocation();
  
  //เช็คว่ามีไอดีแล้วรึยัง ถ้ายังให้สร้างไอดีใหม่
  let id
  if (location.state === null){
    id = uuidv4()
  }else {
    id = location.state.id
  }

  //Submit
  const submitActivity = (event) => {
    event.preventDefault();
      const activityCard = {
      id: id,
      type: type,
      title: title,
      description: description,
      date: date,
      time: time,
      numberset: Number(numberset),
      distance: Number(distance),
      calburned: Number(calburned),
      duration: Number(duration),
      heartrate: heartrate
    }
    console.log("activity card",activityCard)
    addActivity(activityCard)
  alert("Your activity have been submitted")
  }


  // Validate the user's input here
  const handleSubmit = () => {
    if (type === "") {
      alert("Please enter the type of exercise");
    } else if (title === "") {
      alert("Please enter the title of the exercise");
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
        <h1>Exercise Activity</h1>
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
            <label for="title">Title</label>
            <input
              type="text"
              placeholder={location.state === null ? "Required" : location.state.title}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <div className="activity-from-form_container">
            <label for="description">Description</label>
            <input
              type="text"
              placeholder={location.state === null ? "Required" : location.state.description }
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>

          <div className="activity-from-form_container">
            <label for="date">Date</label>
            <input
              type="date"
              placeholder={location.state === null ? "DD/MM/YY" : location.state.date}
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>

          <div className="activity-from-form_container">
            <label for="time">Time</label>
            <input
              type="time"
              placeholder={location.state === null ? "DD/MM/YY" : location.state.time}
              required
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </div>

          <div className="activity-from-form_container">
            <label for="numberset">Number of sets</label>
            <input
              type="number"
              placeholder={location.state === null ? "Optional" : location.state.numberset}
              value={numberset}
              onChange={(event) => setNumberset(event.target.value)}
            />
          </div>

          <div className="activity-from-form_container">
            <label for="distance">Distance</label>
            <input
              type="number"
              placeholder={location.state === null ? "Optional (meter)" : location.state.distance}
              value={distance}
              onChange={(event) => setDistance(event.target.value)}
            />
          </div>

          <div className="activity-from-form_container">
            <label for="caloriesburned">Calories Burned</label>
            <input
              type="number"
              placeholder={location.state === null ? "Required (cal)" : location.state.calburned}
              required
              value={calburned}
              onChange={(event) => setCalburned(event.target.value)}
            />
          </div>

          <div className="activity-from-form_container">
            <label for="time">The Duration of Your Exercise</label>
            <input
              placeholder={location.state === null ? "Required (minute)" : location.state.duration}
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
              placeholder={location.state === null ? "Optional" : location.state.heartrate}
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
