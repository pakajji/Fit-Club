import "./App.css";
import Dietary from "../Dietary/Dietary";
import AllActivity from "../AllActivity/AllActivity";
import Navbar from "../Navbar/Navbar";
import Piechart from "../Piechart/Piechart";
import SumCal from "../SumCal/SumCal";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import PersonalProfileForm from "../PersonalProfileForm/PersonalProfileForm";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Piechart />
      <AllActivity />
      <Dietary />
      <SumCal />
      <LoginForm />
      <RegisterForm />
      <PersonalProfileForm />
      <ActivitiesForm />
      {/* */}
    </div>
  );
}

export default App;
