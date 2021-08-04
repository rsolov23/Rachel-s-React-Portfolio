import React from "react";

function Projects() {
  return (
    <section className="page-section" id="work">
      <div className="flex-container about">
        <a
          href="https://jotitgood.herokuapp.com/"
          target="blank"
          class="flex-item jot-it"
        >
          {/* <img src={jotItImage} className="flex-item profilePic" alt="cover" /> */}
          <div>
            <h3>Jot It</h3>
            <span>HTML/CSS/JavaScript/Express/Handlebars/MYSQL2</span>
            <div>
              <a href="https://github.com/rsolov23/Jot-It">GitHub</a>
            </div>
          </div>
        </a>

        <a
          href="https://lexcraw4d.github.io/Gaminator/"
          target="blank"
          class="flex-item surf-report"
        >
          <div>
            <h3>Gaminator</h3>
            <span>HTML/CSS/JavaScript/Third-Party-API'S</span>
            <div>
              <a href="https://github.com/rsolov23/Gaminator">GitHub</a>
            </div>
          </div>
        </a>

        <a
          href=" https://rsolov23.github.io/Rachel-s-Workday-Scheduler/"
          target="blank"
          class="flex-item led-wall"
        >
          <div>
            <h3>Workday Scheduler</h3>
            <span>HTML/CSS/JavaScript</span>
            <div>
              <a href="https://github.com/rsolov23/Rachel-s-Workday-Scheduler">
                GitHub
              </a>
            </div>
          </div>
        </a>
        <a
          href="https://rsolov23.github.io/Horiseon-Weekly-Challenge/"
          target="blank"
          class="flex-item react-calc"
        >
          <div>
            <h3>Horiseon</h3>
            <span>HTML/CSS</span>
            <div>
              <a href="https://github.com/rsolov23/Horiseon-Weekly-Challenge">
                GitHub
              </a>
            </div>
          </div>
        </a>

        <a
          href="https://rsolov23.github.io/Password-Generator/"
          target="blank"
          class="flex-item pastel-puzzles"
        >
          <div>
            <h3>Password Generator</h3>
            <span>HTML/CSS/JavaScript</span>
            <div>
              <a href="https://github.com/rsolov23/Password-Generator">
                GitHub
              </a>
            </div>
          </div>
        </a>

        <a
          href="https://rsolov23.github.io/run-buddy-2/"
          class="flex-item run-buddy"
        >
          <div>
            <h3>Run Buddy</h3>
            <span>HTML/CSS</span>
            <div>
              <a href="https://github.com/rsolov23/run-buddy-2">GitHub</a>
            </div>
          </div>
        </a>
      </div>
    </section>

    //   <div className="wrapper">
    //     <section>
    //       <div className="title">
    //         <h1></h1>
    //       </div>
    //     </section>

    //     <div className="row">
    //       <div className="col">
    //         <div className="card h-100">
    //           <img
    //             src={projectImage}
    //             className="card-img-top project-image"
    //             style={{ width: "100%" }}
    //             height="350"
    //           />

    //           <div className="card-body text-center">
    //             <h5 className="card-title">Jot It</h5>

    //             <a
    //               href="https://jotitgood.herokuapp.com/"
    //               target="“_blank”"
    //               className="card-text"
    //             >
    //               Link Jot It{" "}
    //             </a>
    //             <br />
    //             <a
    //               href="https://github.com/rsolov23/Jot-It"
    //               target="“_blank”"
    //               className="card-text"
    //             >
    //               GitHub{" "}
    //             </a>
    //             <br />

    //             <br />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col">
    //         <div className="card h-100">
    //           <img
    //             src={projectImage}
    //             className="card-img-top project-image"
    //             style={{ width: "100%" }}
    //             height="350"
    //           />
    //           <div className="card-body text-center">
    //             <h5 className="card-title">Gaminator</h5>
    //             <a
    //               href="https://rsolov23.github.io/Gaminator/"
    //               target="“_blank”"
    //               className="card-text"
    //             >
    //               Link{" "}
    //             </a>
    //             <br />
    //             <a
    //               href="https://github.com/rsolov23/Gaminator"
    //               target="“_blank”"
    //               className="card-text no-underline"
    //             >
    //               GitHub{" "}
    //             </a>
    //             <br />

    //             <br />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col">
    //         <div className="card h-100">
    //           <img
    //             src={projectImage}
    //             className="card-img-top project-image"
    //             style={{ width: "100%" }}
    //             height="350"
    //           />
    //           <div className="card-body text-center">
    //             <h5 className="card-title">WorkDay Scheduler</h5>
    //             <a
    //               href="https://rsolov23.github.io/Rachel-s-Workday-Scheduler/"
    //               target="“_blank”"
    //               className="card-text no-underline"
    //             >
    //               Link{" "}
    //             </a>
    //             <br />
    //             <a
    //               href="https://github.com/rsolov23/Rachel-s-Workday-Scheduler"
    //               target="“_blank”"
    //               className="card-text no-underline"
    //             >
    //               GitHub{" "}
    //             </a>
    //             <br />

    //             <br />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col">
    //         <div className="card h-100">
    //           <img
    //             src={projectImage}
    //             className="card-img-top project-image"
    //             style={{ width: "100%" }}
    //             height="350"
    //           />
    //           <div className="card-body text-center">
    //             <h5 className="card-title">Password Generator</h5>
    //             <a
    //               href="https://rsolov23.github.io/Password-Generator/"
    //               target="“_blank”"
    //               className="card-text"
    //             >
    //               Link{" "}
    //             </a>
    //             <br />
    //             <a
    //               href="https://github.com/rsolov23/Password-Generator"
    //               target="“_blank”"
    //               className="card-text"
    //             >
    //               GitHub{" "}
    //             </a>
    //             <br />

    //             <br />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col">
    //         <div className="card h-100">
    //           <img
    //             src={projectImage}
    //             className="card-img-top project-image"
    //             style={{ width: "100%" }}
    //             height="350"
    //           />
    //           <div className="card-body text-center">
    //             <h5 className="card-title">Run Buddy</h5>
    //             <a
    //               href="https://rsolov23.github.io/run-buddy-2/"
    //               target="“_blank”"
    //               className="card-text"
    //             >
    //               Link{" "}
    //             </a>
    //             <br />
    //             <a
    //               href="https://github.com/rsolov23/run-buddy-2"
    //               target="“_blank”"
    //               className="card-text no-underline"
    //             >
    //               GitHub{" "}
    //             </a>
    //             <br />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col">
    //         <div className="card h-100">
    //           <img
    //             src={projectImage}
    //             className="card-img-top project-image"
    //             style={{ width: "100%" }}
    //             height="350"
    //           />
    //           <div className="card-body text-center">
    //             <h5 className="card-title">Budget Tracker</h5>
    //             <a
    //               href="https://vast-tundra-00537.herokuapp.com/"
    //               target="“_blank”"
    //               className="card-text no-underline"
    //             >
    //               Link{" "}
    //             </a>
    //             <br />
    //             <a
    //               href="https://github.com/rsolov23/Rachel-s-Budget-Tracker"
    //               target="“_blank”"
    //               className="card-text no-underline"
    //             >
    //               GitHub{" "}
    //             </a>
    //             <br />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  );
}

export default Projects;
