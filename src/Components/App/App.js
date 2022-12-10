import "./App.css";
import Navbar from "../Navbar/Navbar";
import Overview from "../Overview/Overview";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";
import PersonalProfile from "../PersonalProfile/PersonalProfile";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Overview/>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/register" element={<RegisterForm/>}></Route>
        <Route path="/add-activity" element={<ActivitiesForm/>}></Route>
        <Route path="/profile" element={<PersonalProfile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
