import React from "react";
import portrait from "../images/me.jpg";
import orbit1 from "../images/orbit1.svg";
import orbit2 from "../images/orbit2.svg";
import "./portrait.css";

class Portrait extends React.Component {
  render() {
    return (
      <div id="portrait-container">
        <img src={orbit2} id="orbit2" />
        <img src={orbit1} id="orbit1" />
        <img src={portrait} id="portrait" className="fade-in" alt="rachhek" />
      </div>
    );
  }
}

export default Portrait;
