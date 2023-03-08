import { useState, useEffect } from "react";
import TrendItem from "../trendItem";
import "./index.css";

const TrendList = () => {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then(({ todos }) => setTrendList(todos));
  }, []);

  return (
    <div>
      {trendList.map((item) => (
        <TrendItem data={item} key={item.id} />
      ))}
    </div>
  );
};

export default TrendList;