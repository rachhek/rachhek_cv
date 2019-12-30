import React from "react";
import Portrait from "./portrait/portrait";
import "./App.css";
import linkedin from "./images/linkedin.png";
import facebook from "./images/facebook.png";
import github from "./images/github.png";
import twitter from "./images/twitter.png";
import hackerrank from "./images/hackerrank.png";
import stackoverflow from "./images/stackoverflow.png";
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
        <div id="links-container">
          <table>
            <tr>
              <td>
                <div>
                  <a
                    href="https://linkedin.com/in/rachhekshrestha"
                    target="_blank"
                  >
                    <img src={linkedin} />
                  </a>
                </div>
              </td>
              <td>
                <div>
                  <a href="https://github.com/rachhek" target="_blank">
                    <img src={github} />
                  </a>
                </div>
              </td>
              <td>
                <div>
                  <a href="https://twitter.com/rachhekshrestha" target="_blank">
                    <img src={twitter} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <a href="https://www.hackerrank.com/rachhek" target="_blank">
                    <img src={hackerrank} />
                  </a>
                </div>
              </td>
              <td>
                <div>
                  <a
                    href="https://stackoverflow.com/users/4627034/raxak"
                    target="_blank"
                  >
                    <img src={stackoverflow} />
                  </a>
                </div>
              </td>
              <td>
                <div>
                  <a href="https://facebook.com/rachhek" target="_blank">
                    <img src={facebook} />
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
