import "./App.css";
import Navbar from "../Navbar/Navbar";
import Overview from "../Overview/Overview";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";
import PersonalProfile from "../PersonalProfile/PersonalProfile";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "../Main/index.jsx";
import Signup from "../Signup/index.jsx";
import Login from "../Login/index.jsx";

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />

        <Route path="/overview" exact element={<Overview />}></Route>
        <Route path="/login2" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/add-activity" element={<ActivitiesForm />}></Route>
        <Route path="/profile" element={<PersonalProfile />}></Route>
      </Routes>
    </div>
  );
}

export default App;