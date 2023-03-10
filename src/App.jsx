//import {useState} from "react";
import Content from "./components/content";
import SideTrend from "./components/sideTrend";
import SideMenu from "./components/sideMenu/SideMenu";
//import Modal from "./components/modal";
import "./App.css";


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
