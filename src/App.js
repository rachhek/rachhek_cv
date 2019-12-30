import React from "react";
import Portrait from "./portrait/portrait";
import Links from "./links/links";
import "./App.css";
import Parallax from "parallax-js";
import note1 from "./images/note1.svg";
import sun from "./images/sun.svg";

import me from "./images/me.jpg";

function App() {
  return (
    <div className="App">
      <div id="left-half">
        <Portrait />
      </div>
      <div id="right-half">
        <span id="name">Rachhek Shrestha</span>
        <span id="mytitle">Software developer. Studying data science.</span>
        <Links />
      </div>
      <div id="para">
        <img data-depth="0.4" src={note1} id="note1" />
        <img data-depth="2" src={note1} id="note2" />
        <img data-depth="3" src={sun} id="sun1" />
      </div>
    </div>
  );
}

export default App;
