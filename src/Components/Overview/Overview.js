import Dietary from "../Dietary/Dietary";
import AllActivity from "../AllActivity/AllActivity";
import Piechart from "../Piechart/Piechart";
import SumCal from "../SumCal/SumCal";

function Overview() {
  return (
    <div className="Overview">
      <Piechart />
      <AllActivity />
      <Dietary />
      <SumCal />
    </div>
  );
}

export default Overview;
