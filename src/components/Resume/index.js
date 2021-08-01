import React from "react";
function Resume() {
  return (
    <div className="resume">
      <h1 className="resumeMargin">Resume</h1>
      <a
        id="download"
        href={require(`../Resume/portfolioresume-converted.pdf`).default}
        download="portfolioresume-converted.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Download My Resume
      </a>
      <div className="iframeContainer col-lg-12">
        {/* <iframe
          title="Resume-Download"
          src="https://docs.google.com/document/d/1x0QgJrSfTiTxcoS4ghTmAAH3qYiijYa67Ea-LhSSrbc/edit?usp=sharing"
          frameBorder="0"
        ></iframe> */}
      </div>
      <div>
        <h2 classname="skills">Skills</h2>
        <i className="fab fa-html5 fa-5x"></i>
        <i className="fab fa-css3-alt fa-5x"></i>
        <i className="fab fa-js fa-5x"></i>
        <i className="fab fa-react fa-5x"></i>
      </div>
    </div>
  );
}

export default Resume;
