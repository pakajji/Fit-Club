import './App.css';
import Dietary from '../Dietary/Dietary';
import AllActivity from '../AllActivity/AllActivity';
import Navbar from '../Navbar/Navbar';
import Piechart from '../Piechart/Piechart';
import SumCal from '../SumCal/SumCal';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Piechart/>
        <AllActivity/>
        <Dietary/>
        <SumCal/>
      </div>
    </div>
  );
}

export default App;
