import React from "react";
import htmlImage from "../Pages/images/html.png";
import cssImage from "../Pages/images/css.png";
import jsImage from "../Pages/images/js.png";
import reactImage from "../Pages/images/react.png";
import mongoImage from "../Pages/images/mongo.png";
import mysqlImage from "../Pages/images/mysql.png";
import nodeImage from "../Pages/images/node.png";
import npmImage from "../Pages/images/npm.png";
import gitImage from "../Pages/images/git.png";
import expressImage from "../Pages/images/express.png";
function Resume() {
  return (
    <div className="resume">
      <div className="info">
        <h1 className="resumeMargin">Resume</h1>
        <a
          id="download"
          href={require(`../Pages/images/portfolio.pdf`).default}
          download="portfolio.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download My Resume
        </a>
        <div className="iframeContainer col-lg-12"></div>
        <div>
          <h2 className="skills">Skills</h2>
          <div className="logos">
            <img src={htmlImage} style={{ padding: "10px" }} />
            <img src={cssImage} style={{ padding: "10px" }} />
            <img src={jsImage} style={{ padding: "10px" }} />
            <img src={mongoImage} style={{ padding: "10px" }} />
            <img src={expressImage} style={{ padding: "10px" }} />
            <img src={reactImage} style={{ padding: "10px" }} />
            <img src={nodeImage} style={{ padding: "10px" }} />
            <img src={mysqlImage} style={{ padding: "10px" }} />
            <img src={npmImage} style={{ padding: "10px" }} />
            <img src={gitImage} style={{ padding: "10px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
