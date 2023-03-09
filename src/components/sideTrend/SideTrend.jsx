import {useRef} from "react";
import TrendList from "../trendList";
import "./index.css";

const SideTrend = () => {

  // Esercizio 09-03-2023 - useRef
  /* ... ho provato ad impostare una lunghezza di massimo 5 righe
   per lo scroll di sideTrend ma non ci sono riuscita....*/
   
  const sideTrendsRef = useRef(null);
  return (
    <div ref={sideTrendsRef}
    className="SideTrend" >
      <input className="SideTrend_search" type="text" placeholder="🔍 Search Twitter" />
      <TrendList />
    </div>
  );
};

export default SideTrend;