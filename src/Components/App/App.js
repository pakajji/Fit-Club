import './App.css';
import Dietary from '../Dietary/Dietary';
import AllActivity from '../AllActivity/AllActivity';
import Navbar from '../Navbar/Navbar';
import Piechart from '../Piechart/Piechart';
import SumCal from '../SumCal/SumCal';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Piechart/>
      <AllActivity/>
      <Dietary/>
      <SumCal/>
    </div>
  );
}

export default App;
