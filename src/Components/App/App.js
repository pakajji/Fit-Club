import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "../Main/index.jsx";
import Signup from "../Signup/index.jsx";
import Login from "../Login/index.jsx";
import Navbar from "../Navbar/Navbar";
import Logout from "../Logout/Logout";
import Overview from "../Overview/Overview";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";
import PersonalProfile from "../PersonalProfile/PersonalProfile";
import PersonalProfileNewLayOut from "../PersonalProfile/PersonalProfileNewLayOut";

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/overview" exact element={<Overview />}></Route>
        <Route path="/add-activity" element={<ActivitiesForm />}></Route>
        <Route path="/profile" element={<PersonalProfile />}></Route>
        <Route
          path="/newprofile"
          element={<PersonalProfileNewLayOut />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
