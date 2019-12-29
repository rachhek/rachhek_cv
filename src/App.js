import React from "react";
import potrait from "./me.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="outer-circle1">
          <img src={potrait} id="potrait" className="fade-in" alt="rachhek" />
        </div>
        {/* <div class="ferris-wheel">
          <div class="wheel-wrap">
            <div class="wheels">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div> */}
        <div className="orbit1">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="orbit2">
          <div></div>
          <div></div>
        </div>
      </header>
    </div>
  );
}

export default App;
