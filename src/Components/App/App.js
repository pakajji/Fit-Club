import './App.css';
import Dietary from '../Dietary/Dietary';
import AllActivity from '../AllActivity/AllActivity';
import Navbar from '../Navbar/Navbar';
import Piechart from '../Piechart/Piechart';
import SumCal from '../SumCal/SumCal';
import MenuCalContext from '../Context/MenuCalContext'
import { useContext } from 'react'

function App() {
  const {backgroundColor} = useContext(MenuCalContext)
  
  return (
    <div className={`App ${backgroundColor}`}>
      <Navbar/>
      <Piechart/>
      <AllActivity/>
      <Dietary/>
      <SumCal/>
    </div>
  );
}

export default App;
