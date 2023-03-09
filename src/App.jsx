import Content from "./components/content";
import SideTrend from "./components/sideTrend";
import "./App.css";
import SideMenu from "./components/sideMenu/SideMenu";


function App() {
  return (
    <div className="App">
      <SideMenu />
      <Content />
      <SideTrend />
      
    </div>
  );
}

export default App;
