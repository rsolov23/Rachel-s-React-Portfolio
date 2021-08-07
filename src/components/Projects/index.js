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
  );
}

export default Projects;
