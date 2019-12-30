import React from "react";
import Portrait from "./portrait/portrait";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="left-half">
        <Portrait />
      </div>
      <div id="right-half"></div>
    </div>
  );
}

export default App;
