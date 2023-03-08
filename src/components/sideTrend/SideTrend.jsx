import TrendList from "../trendList";
import "./index.css";

const SideTrend = () => {
  return (
    <div className="SideTrend">
      <input className="SideTrend_search" type="text" placeholder="🔍 Search Twitter" />
      <TrendList />
    </div>
  );
};

export default SideTrend;