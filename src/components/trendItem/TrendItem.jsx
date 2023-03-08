import "./index.css";

const TrendItem = ({ data }) => {
  return (
    <div className="TrendItem">
      <span className="TrendItem_userId">{data.userId}</span>
      <h3 className="TrendItem_todo">{data.todo}</h3>
      <p className="TrendItem_status">Status: {data.completed ? "👍" : "👎"}</p>
      
    </div>
  );
};

export default TrendItem;