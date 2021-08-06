import React from "react";
import jotItImage from "../Projects/images/1234.png";
import gameImage from "../Projects/images/game12.png";
import workImage from "../Projects/images/try564.png";
import horiImage from "../Projects/images/hori.png";
import passImage from "../Projects/images/passw.png";
import runImage from "../Projects/images/run.png";

function Projects() {
  return (
    // <section className="page-section" id="work">
    <main>
      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={jotItImage} alt="cover" style={{ height: "auto" }} />
              </div>
              <div className="card_content">
                <h3 className="card_title">
                  <button className="button card_button">
                    <a href="https://jotitgood.herokuapp.com/" target="blank">
                      Jot It
                    </a>
                  </button>
                </h3>
                <p className="card_text"></p>

                <button className="button card_button">
                  <a href="https://github.com/rsolov23/Jot-It">GitHub</a>
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={gameImage} alt="cover" style={{ height: "auto" }} />
              </div>
              <div className="card_content">
                <h3 className="card_title">
                  {" "}
                  <button className="button card_button">
                    <a
                      href="https://lexcraw4d.github.io/Gaminator/"
                      target="blank"
                    >
                      Gaminator
                    </a>
                  </button>
                </h3>
                <p className="card_text"></p>
                <button className="button card_button">
                  {" "}
                  <a href="https://github.com/rsolov23/Gaminator">GitHub</a>
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={workImage} alt="cover" style={{ height: "auto" }} />
              </div>
              <div className="card_content">
                <h3 className="card_title">
                  <button className="button card_button">
                    <a
                      href=" https://rsolov23.github.io/Rachel-s-Workday-Scheduler/"
                      target="blank"
                    >
                      Workday Scheduler
                    </a>
                  </button>
                </h3>
                <p className="card_text"></p>
                <button className="button card_button">
                  <a href="https://github.com/rsolov23/Rachel-s-Workday-Scheduler">
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={horiImage} alt="cover" />
              </div>
              <div className="card_content">
                <h3 className="card_title">
                  <button className="button card_button">
                    <a
                      href="https://rsolov23.github.io/Horiseon-Weekly-Challenge/"
                      target="blank"
                    >
                      Horiseon
                    </a>
                  </button>
                </h3>

                <button className="button card_button">
                  {" "}
                  <a href="https://github.com/rsolov23/Horiseon-Weekly-Challenge">
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={passImage} alt="cover" />
              </div>
              <div className="card_content">
                <h3 className="card_title">
                  <button className="button card_button">
                    <a
                      href="https://rsolov23.github.io/Password-Generator/"
                      target="blank"
                    >
                      Password Generator
                    </a>
                  </button>
                </h3>

                <button className="button card_button">
                  <a href="https://github.com/rsolov23/Password-Generator">
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={runImage} alt="cover" />
              </div>
              <div className="card_content">
                <h3 className="card_title">
                  <button className="button card_button">
                    <a href="https://rsolov23.github.io/run-buddy-2/">
                      Run Buddy
                    </a>
                  </button>
                </h3>

                <button className="button card_button">
                  <a href="https://github.com/rsolov23/run-buddy-2">GitHub</a>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Projects;

{
  /* <div className="row">
        <div className="column">
          <div className="card">
            <h3>
              {" "}
              <a
                href="https://jotitgood.herokuapp.com/"
                target="blank"
                className="flex-item jot-it"
              ></a>
            </h3>
            <h3>Jot It</h3>
            <span>HTML/CSS/JavaScript/Express/Handlebars/MYSQL2</span>
            <div>
              <a href="https://github.com/rsolov23/Jot-It">GitHub</a>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>
              <a
                href="https://lexcraw4d.github.io/Gaminator/"
                target="blank"
                className="flex-item surf-report"
              ></a>
            </h3>
            <h3>Gaminator</h3>
            <span>HTML/CSS/JavaScript/Third-Party-API'S</span>
            <div>
              <a href="https://github.com/rsolov23/Gaminator">GitHub</a>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>
              <a
                href=" https://rsolov23.github.io/Rachel-s-Workday-Scheduler/"
                target="blank"
                className="flex-item led-wall"
              ></a>
            </h3>
            <h3>Workday Scheduler</h3>
            <span>HTML/CSS/JavaScript</span>
            <div>
              <a href="https://github.com/rsolov23/Rachel-s-Workday-Scheduler">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <h3>
              {" "}
              <a
                href="https://rsolov23.github.io/Horiseon-Weekly-Challenge/"
                target="blank"
                className="flex-item react-calc"
              ></a>
            </h3>
            <h3>Horiseon</h3>
            <span>HTML/CSS</span>
            <div>
              <a href="https://github.com/rsolov23/Horiseon-Weekly-Challenge">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>
              {" "}
              <a
                href="https://rsolov23.github.io/Password-Generator/"
                target="blank"
                className="flex-item pastel-puzzles"
              ></a>
            </h3>
            <h3>Password Generator</h3>
            <span>HTML/CSS/JavaScript</span>
            <div>
              <a href="https://github.com/rsolov23/Password-Generator">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>
              <a
                href="https://rsolov23.github.io/run-buddy-2/"
                className="flex-item run-buddy"
              ></a>
            </h3>
            <h3>Run Buddy</h3>
            <span>HTML/CSS</span>
            <div>
              <a href="https://github.com/rsolov23/run-buddy-2">GitHub</a>
            </div>
          </div>
        </div>
      </div> */
}
